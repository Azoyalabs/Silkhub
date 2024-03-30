<script lang="ts" context="module">
	import { z } from 'zod';

	export const tokenFormSchema = z.object({
		tokenName: z
			.string({
				required_error: 'Required.'
			})
			.min(2, 'Name must be at least 2 characters.')
			.max(30, 'Name must not be longer than 30 characters')
			.default('name'),
		symbol: z
			.string({
				required_error: 'Required.'
			})
			.min(2, 'Symbol must be at least 2 characters')
			.max(6, 'Symbol must not be longer than 6 characters'),
		logo: z.string(),
		description: z.string().min(10, 'Description must be at least 10 characters.'),
		supply: z.coerce.number().default(100_000), //z.number().min(1).max(18).default(18),

		website: z.string().url().optional(),
		twitter: z.string().optional(),
		discord: z.string().optional(),
		telegram: z.string().optional(),
		linkedin: z.string().optional(),
		medium: z.string().optional(),

		decimals: z.coerce.number().min(1).max(18).default(18), //z.number().min(1).max(18).default(18),
		mintable: z.boolean().default(false),
		pausable: z.boolean().default(false),
		burnable: z.boolean().default(false),

		// NOTE: This will be added when we manually validate
		address: z.string(),
		sender: z.string()
	});

	export type TokenFormSchema = typeof tokenFormSchema;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';
	import { Switch } from '$lib/components/ui/switch';
	import type { PageData } from './$types';

	import { getContext } from 'svelte';
	import { getWalletClient, type GetAccountReturnType, getPublicClient } from '@wagmi/core';
	import type { Writable } from 'svelte/store';
	import { WAGMI_CONFIG } from '$lib/configs/wagmi';
	import * as ERC20 from '$lib/contracts/ERC20';
	import type { TokenCreationMessage } from '$lib/types/Messages';
	import { Button } from '$lib/components/ui/button';
	import TxForm, { Step } from '$lib/components/app/TxForm/TxForm.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { AVOCADOSWAP, BITZY } from '$lib/constants/dexLinks';

	let step = Step.Input;

	let error: Error | null = null;

	export let data: PageData;
	const form = superForm(data.form, {
		validators: zodClient(tokenFormSchema),
		onSubmit: async ({ formData, cancel }) => {
			const result = await validateForm({ update: false });
			if (result.valid) {
				step = Step.Transacting;
				const walletClient = await getWalletClient(WAGMI_CONFIG);
				const publicClient = await getPublicClient(WAGMI_CONFIG)!;

				// TODO: get the right ABI
				const abi = ERC20.Burnable;
				try {
					const txHash = await walletClient.deployContract({
						abi: abi.abi,
						args: [$formData.tokenName, $formData.symbol, BigInt($formData.supply)],
						bytecode: abi.bytecode
					});

					const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
					formData.set('address', receipt.contractAddress as string);
					formData.set('sender', walletClient.account.address as string);
				} catch (err) {
					error = err as Error;
					cancel();
					step = Step.Failure;
				} finally {
					return;
				}
			} else {
				cancel();
			}
		}
	});
	const { form: formData, enhance, message, validateForm } = form;

	const account = getContext<Writable<GetAccountReturnType>>('account');

	let deployAddress: string = '';
	message.subscribe((msg: TokenCreationMessage) => {
		if (msg) {
			deployAddress = msg.address;
			step = Step.Success;
			return;
		}
	});
</script>

<TxForm {step}>
	<div slot="success">
		<h1 class="text-xl font-bold">Success</h1>
		<p class="text-muted-foreground">Your token has been created at</p>
		<!-- TODO: this will overflow -->
		<p class="mt-2 text-lg">{deployAddress}</p>
		<!-- TODO: add support for links to token page, create liquidity, create airdrop, create ico -->
	</div>

	<div slot="failure">
		<h1 class="text-xl font-bold">Failure</h1>
		<p class="text-muted-foreground">Your token could not be created</p>

		<p class="mx-auto mt-2 max-w-[50%] text-sm">Error: {error?.cause || error?.message}</p>
	</div>

	<div class="flex flex-col items-center justify-center w-full h-full space-y-2">
		<h1 class="text-4xl font-bold">Create your token</h1>
		<p class="text-lg text-center">Create your own token in a few clicks. No coding required.</p>
	</div>

	<form use:enhance method="POST" class="mt-6 space-y-8">
		<Form.Field name="tokenName" {form}>
			<Form.Control let:attrs>
				<Form.Label>Token Name</Form.Label>
				<Input {...attrs} bind:value={$formData.tokenName} placeholder="Your token's name" />
			</Form.Control>
			<Form.Description>This is the name that will used to display your token.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field name="symbol" {form}>
			<Form.Control let:attrs>
				<Form.Label>Symbol</Form.Label>
				<Input {...attrs} bind:value={$formData.symbol} placeholder="Token symbol (ex: ETH)" />
			</Form.Control>
			<Form.Description>This is the symbol that will be displayed</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field name="logo" {form}>
			<Form.Control let:attrs>
				<Form.Label>Logo</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.logo}
					placeholder="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
				/>
			</Form.Control>
			<Form.Description>This is the URL of the token's logo</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- TODO: Decimals is not exposed in the constructor, we'll disable and fix it to 18. Maybe add a small explainer -->

		<Form.Field name="decimals" {form}>
			<Form.Control let:attrs>
				<Form.Label>Decimals</Form.Label>
				<Input
					{...attrs}
					placeholder="18"
					type="number"
					bind:value={$formData.decimals}
					disabled
					min={1}
					max={18}
				/>
			</Form.Control>
			<Form.Description>How many decimals should your token have (18 recommended)</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field name="supply" {form}>
			<Form.Control let:attrs>
				<Form.Label>Initial Supply</Form.Label>
				<Input {...attrs} bind:value={$formData.supply} type="number" />
			</Form.Control>
			<Form.Description
				>This initial supply will be sent to you and will be usable for an Airdrop or an ICO</Form.Description
			>
			<Form.FieldErrors />
		</Form.Field>

		<Separator></Separator>

		<div>
			<div class="">
				<h3 class="text-2xl font-medium">Customize your token</h3>
				<p class="mt-1 text-sm text-muted-foreground">
					Choose the features you want to add to your token
				</p>
			</div>
			<div class="mt-4 space-y-4">
				<div>
					<Form.Field
						{form}
						name="mintable"
						class="flex flex-row items-center justify-between p-4 border rounded-lg"
					>
						<Form.Control let:attrs>
							<div class="space-y-0.5">
								<Form.Label class="text-base">Mintable</Form.Label>
								<Form.Description
									>The contract owner will be able to mint additional tokens.</Form.Description
								>
							</div>
							<Switch {...attrs} bind:checked={$formData.mintable} />
						</Form.Control>
					</Form.Field>
				</div>

				<div>
					<Form.Field
						class="flex flex-row items-center justify-between p-4 border rounded-lg"
						{form}
						name="burnable"
					>
						<Form.Control let:attrs>
							<div class="space-y-0.5">
								<Form.Label class="text-base">Burnable</Form.Label>
								<Form.Description>
									Allow token holders to destroy tokens they own or have an allowance for.
								</Form.Description>
							</div>
							<Switch {...attrs} bind:checked={$formData.burnable} />
						</Form.Control>
					</Form.Field>
				</div>

				<Form.Field
					class="flex flex-row items-center justify-between p-4 border rounded-lg"
					{form}
					name="pausable"
				>
					<Form.Control let:attrs>
						<div class="space-y-0.5">
							<Form.Label class="text-base">Pausable</Form.Label>
							<Form.Description>
								Add an emergency stop mechanism that can be triggered by the contract's owner.
							</Form.Description>
						</div>
						<Switch {...attrs} bind:checked={$formData.pausable} />
					</Form.Control>
				</Form.Field>
			</div>
		</div>
		<Separator></Separator>

		<div>
			<h3 class="mb-4 text-2xl font-medium">About your project</h3>
			<div>
				<Form.Field {form} name="description">
					<Form.Control let:attrs>
						<div class="flex items-center justify-between">
							<Form.Label>Project Description</Form.Label>
						</div>
						<Textarea
							{...attrs}
							placeholder="Tell us a little bit about your project"
							class="min-h-[200px] resize-none"
							bind:value={$formData.description}
						/>
						<Form.Description>
							<a
								target="_blank"
								href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
								class="text-sm hover:text-primary">We recommend using Markdown (learn more)</a
							>
						</Form.Description>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<div class="mt-6">
				<div class="mb-4">
					<h4 class="text-lg font-medium">Social links</h4>
					<p class="mt-1 text-sm text-muted-foreground">
						Help users find your project. This info will be featured in our token list
					</p>
				</div>
				<div class="grid gap-6 p-4 border rounded-md md:grid-cols-2">
					<Form.Field name="website" {form}>
						<Form.Control let:attrs>
							<Form.Label>Website</Form.Label>
							<Input {...attrs} placeholder="https://mytoken.com" bind:value={$formData.website} />
						</Form.Control>
						<Form.Description>Your project's website (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field name="discord" {form}>
						<Form.Control let:attrs>
							<Form.Label>Discord</Form.Label>
							<Input {...attrs} class="" placeholder="Handle" bind:value={$formData.discord} />
						</Form.Control>
						<Form.Description>The token's Discord handle (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field name="twitter" {form}>
						<Form.Control let:attrs>
							<Form.Label>X (Twitter)</Form.Label>
							<div class="flex items-stretch">
								<div
									class="flex items-center px-4 border-l rounded-l border-y bg-muted/80 text-muted-foreground"
								>
									@
								</div>
								<Input
									{...attrs}
									class="relative rounded-l-none"
									bind:value={$formData.twitter}
									placeholder="Handle"
								/>
							</div>
						</Form.Control>
						<Form.Description>The token's X (Twitter) handle (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field name="telegram" {form}>
						<Form.Control let:attrs>
							<Form.Label>Telegram</Form.Label>
							<div class="flex items-stretch">
								<div
									class="flex items-center px-4 border-l rounded-l border-y bg-muted/80 text-muted-foreground"
								>
									@
								</div>
								<Input
									{...attrs}
									class="relative rounded-l-none"
									bind:value={$formData.telegram}
									placeholder="Handle"
								/>
							</div>
						</Form.Control>
						<Form.Description>The token's Telegram handle (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field name="linkedin" {form}>
						<Form.Control let:attrs>
							<Form.Label>Linkedin</Form.Label>
							<Input class="" {...attrs} bind:value={$formData.linkedin} placeholder="Handle" />
						</Form.Control>
						<Form.Description>The token's Linkedin handle (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field name="medium" {form}>
						<Form.Control let:attrs>
							<Form.Label>Medium</Form.Label>
							<div class="flex items-stretch">
								<div
									class="flex items-center px-4 border-l rounded-l border-y bg-muted/80 text-muted-foreground"
								>
									@
								</div>
								<Input
									{...attrs}
									class="relative rounded-l-none"
									bind:value={$formData.medium}
									placeholder="Handle"
								/>
							</div>
						</Form.Control>
						<Form.Description>This is the token's medium handle (optional)</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
				</div>
			</div>
		</div>
		<Form.Button disabled={!$account || $account.isDisconnected}>Create Token</Form.Button>
	</form>
</TxForm>

<!-- TODO: Missing links -->

<section class="mt-12">
	<h2>Additional Actions</h2>
	<div class="grid gap-4 mt-2 md:grid-cols-2">
		<Button variant="outline" href="{BITZY.POOL}">Create pool on Bitzy</Button>
		<Button variant="outline" href="{AVOCADOSWAP.POOL()}">Create pool on Avocadoswap</Button>
		<Button variant="outline" href="/airdrops/new">Create Airdrop</Button>
		<Button variant="outline" href="/sales/new">Create Token Sale</Button>
	</div>
</section>

<style>
</style>
