<script lang="ts">
	import { page } from '$app/stores';
	import { type Writable } from 'svelte/store';
	import { LayoutLink } from './context';
	import * as Avatar from '$lib/components/ui/avatar';
	import { getWalletClient } from '@wagmi/core';
	import { WAGMI_CONFIG } from '$lib/configs/wagmi';
	import { Button } from '$lib/components/ui/button';

	export let token: {
		info: {
			name: string;
			symbol: string;
			decimals: number;
			supply: bigint;
			logo: string;
			address: string;
		};
		description: string;
	};
	export let currentLink: Writable<string>;

	const LINK_TO = (link: LayoutLink) => {
		return `/tokens/${$page.params.address}/${link}`;
	};

	async function addToWallet() {
		const walletClient = await getWalletClient(WAGMI_CONFIG);
		walletClient.watchAsset({
			type: 'ERC20',
			options: {
				address: token.info.address,
				symbol: token.info.symbol,
				decimals: token.info.decimals,
				image: token.info.logo || undefined
			}
		});
	}
</script>

<section class="mb-8">
	<div class="grid gap-4 md:grid-cols-2">
		<div class="flex flex-col justify-center">
			<div class="flex items-center space-x-3">
				<Avatar.Root>
					<Avatar.Image src={token.info.logo}></Avatar.Image>
				</Avatar.Root>
				<div>
					<h1 class="text-lg lg:text-2xl">
						{token.info.name}
					</h1>
					<div class="mt-1 text-xs font-semibold uppercase text-muted-foreground lg:text-sm">
						{token.info.symbol}
					</div>
				</div>
			</div>
			<Button size="sm" class="mt-4 w-[200px]" on:click={addToWallet}>Add to wallet</Button>
		</div>
		<slot />
	</div>

	<div class="mt-12 overflow-x-auto">
		<div class="pb-0 border-b border-muted">
			<div class="mt-3 sm:mt-4">
				<nav class="flex justify-center -mb-px space-x-8">
					<a
						href={LINK_TO(LayoutLink.Home)}
						data-sveltekit-noscroll
						data-current={$currentLink === LayoutLink.Home}
						class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap"
						>About {token.info.symbol.toUpperCase()}</a
					>
					<a
						href={LINK_TO(LayoutLink.Analytics)}
						data-sveltekit-noscroll
						data-current={$currentLink === LayoutLink.Analytics}
						class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap">Analytics</a
					>
					<a
						href={LINK_TO(LayoutLink.Socials)}
						data-sveltekit-noscroll
						data-current={$currentLink === LayoutLink.Socials}
						class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap">Socials</a
					>
				</nav>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	nav > a {
		@apply border-transparent text-muted-foreground duration-200;

		&[data-current='true'] {
			@apply border-primary text-primary;
		}

		&:hover[data-current='false'] {
			@apply border-muted-foreground text-foreground;
		}
	}
</style>
