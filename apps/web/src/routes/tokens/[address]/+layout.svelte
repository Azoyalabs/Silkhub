<script lang="ts">
	import { page } from '$app/stores';
	import { getContext, onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { LayoutLink, CONTEXT_KEY } from './context';
	import * as TokenView from '$lib/components/app/views/TokenView';
	import Breadcrumb from '$lib/components/app/Breadcrumb/Breadcrumb.svelte';
	import {
		getWalletClient,
		type GetAccountReturnType,
		getPublicClient,
		simulateContract
	} from '@wagmi/core';
	import { WAGMI_CONFIG } from '$lib/configs/wagmi';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Contracts from '$lib/contracts';

	export let data;

	const currentLink = writable(LayoutLink.Home);
	setContext(CONTEXT_KEY, currentLink);

	$: airdrop = data?.airdrop[0] || null;
	$: sale = data?.sale[0] || null;

	const account = getContext<Writable<GetAccountReturnType>>('account');

	let claimStatus: readonly [boolean, bigint] | null = null;
	let saleInfo: {
		start: Date;
		end: Date;
		status: number;
		unitPrice: bigint;
		remaining: bigint;
	} | null = null;

	onMount(async () => {
		account.subscribe(async (account) => {
			if (account) {
				const publicClient = await getPublicClient(WAGMI_CONFIG);

				if (airdrop) {
					claimStatus = await publicClient!.readContract({
						abi: Contracts.Airdrop.abi,
						address: airdrop.contract as `0x${string}`,
						functionName: 'getIsClaimableAndAmount',
						args: [account.address!]
					});
				} else {
					claimStatus = [false, BigInt(0)];
				}

				if (sale) {
					const icoStatus = await publicClient!.readContract({
						abi: Contracts.Sale.abi,
						address: sale.contract as `0x${string}`,
						functionName: 'getIcoStatus',
						args: []
					});

					const remaining = await publicClient!.readContract({
						abi: Contracts.Sale.abi,
						address: sale.contract as `0x${string}`,
						functionName: 'getTokensRemaining',
						args: []
					});
					const inWei = await publicClient!.readContract({
						abi: Contracts.Sale.abi,
						address: sale.contract as `0x${string}`,
						functionName: 'oneTokenInWei',
						args: []
					});
					saleInfo = {
						start: new Date(sale.start_date!),
						end: new Date(sale.end_date!),
						status: icoStatus,
						remaining,
						unitPrice: inWei
					};

				}
			} else {
				claimStatus = [false, BigInt(0)];
			}
		});
	});

	async function claimAirdrop() {
		const walletClient = await getWalletClient(WAGMI_CONFIG);
		try {
			const simulation = await simulateContract(WAGMI_CONFIG, {
				abi: Contracts.Airdrop.abi,
				address: airdrop.contract as `0x${string}`,
				functionName: 'claim',
				account: $account!.address,
				args: []
			});

			const claim = await walletClient.writeContract({
				abi: Contracts.Airdrop.abi,
				address: airdrop.contract as `0x${string}`,
				functionName: 'claim',
				args: []
			});

		} catch (error) {
			console.error(error);
		}
	}
</script>

<TokenView.Header token={data.token} {currentLink}>
	<!-- TODO: this is where we want to provide access to token sale and airdrops -->
	<div class="border rounded-md border-white/20 bg-muted">
		<Tabs.Root value="airdrop" class="w-full">
			<Tabs.List class="w-full">
				<Tabs.Trigger value="airdrop" class="w-full">Airdrop</Tabs.Trigger>
				<Tabs.Trigger value="sale" class="w-full">Sale</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="airdrop" class="p-4">
				{#if airdrop}
					{#if claimStatus}
						{#if claimStatus[0] === false}
							can't claim yet
						{:else}
							<div class="">
								<p>
									{Number(claimStatus[1]) * Math.pow(10, -data.token.info.decimals)}
									<span class="font-bold uppercase">{data.token.info.symbol}</span> to claim
								</p>
								<Button class="mt-4" disabled={claimStatus[1] === BigInt(0)} on:click={claimAirdrop}
									>Claim Airdrop</Button
								>
							</div>
						{/if}
					{:else}
						<div class="pulse">Querying</div>
					{/if}
				{:else}
					<div>No Airdrop found</div>
				{/if}
			</Tabs.Content>
			<Tabs.Content value="sale" class="p-4">
				{#if sale}
					{#if saleInfo}
						<div class="">
							<div class="flex items-center justify-between text-xs text-muted-foreground">
								<p>Start: {saleInfo.start.toLocaleString()}</p>
								<p>End: {saleInfo.end.toLocaleString()}</p>
							</div>
							<p class="mt-4">
								{Number(saleInfo.remaining) * Math.pow(10, -data.token.info.decimals)}
								<span class="font-bold uppercase">{data.token.info.symbol}</span> remaining
							</p>
							
							<Button class="mt-4" disabled={saleInfo.status !== 1}>Buy Token</Button>
						</div>
					{:else}
						<div class="pulse">Querying</div>
					{/if}
				{:else}
					<div>No Sale found</div>
				{/if}
			</Tabs.Content>
		</Tabs.Root>
	</div>
</TokenView.Header>
<slot />
