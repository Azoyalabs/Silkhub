<script lang="ts" context="module">
	import { z } from 'zod';

	export const airdropFormSchema = z.object({
		address: z
			.string({
				required_error: 'Required.'
			})
			.superRefine((val, ctx) => {
				if (!isEVMAddress(val)) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Must be a valid Botanix address'
					});
				}
			}),
		start: z.string().refine((v) => v, { message: 'A valid date is required' }),
		contract: z.string(),
		recipients: z
			.array(
				z
					.object({ address: z.string(), amount: z.coerce.number().min(0) })
					.superRefine((val, ctx) => {
						if (!isEVMAddress(val.address)) {
							ctx.addIssue({
								code: z.ZodIssueCode.custom,
								message: 'Must be a valid Botanix address'
							});
						}
					})
			)
			.default([{ address: '', amount: 0 }])
	});

	export type AirdropFormSchema = typeof airdropFormSchema;

	// https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_deploying-contracts?file=index.tsx
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';

	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	import { browser } from '$app/environment';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { CalendarIcon } from 'lucide-svelte';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { cn, dateToTimestamp, isEVMAddress } from '$lib/utils';
	import type { PageData } from './$types';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Popover from '$lib/components/ui/popover';
	import { Input } from '$lib/components/ui/input';
	import TxForm, { Step } from '$lib/components/app/TxForm/TxForm.svelte';
	import { WAGMI_CONFIG } from '$lib/configs/wagmi';
	import { getWalletClient, getPublicClient } from '@wagmi/core';
	import * as Contracts from '$lib/contracts';
	import type { AirdropCreationMessage } from '$lib/types/Messages';

	export let data: PageData;
	// & SuperValidated<Infer<TokenFormSchema>>
	const form = superForm(data.form, {
		dataType: 'json',
		validators: zodClient(airdropFormSchema),
		onSubmit: async ({ form, formData, cancel, jsonData }) => {
			const result = await validateForm({ update: false });
			if (result.valid) {
				step = Step.Transacting;
				const walletClient = await getWalletClient(WAGMI_CONFIG);
				const publicClient = await getPublicClient(WAGMI_CONFIG)!;

				const abi = Contracts.Airdrop.abi;

				try {
					let txHash = await walletClient.deployContract({
						abi,
						args: [$formData.address as `0x${string}`, dateToTimestamp(new Date($formData.start))],
						bytecode: Contracts.Airdrop.bytecode
					});

					let receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
					const toSend = {
						...$formData,
						contract: receipt.contractAddress as string
					}
					

					txHash = await walletClient.writeContract({
						abi: abi,
						address: receipt.contractAddress!,
						functionName: 'batchSetAllowance',
						args: [
							$formData.recipients.map((r) => r.address as `0x${string}`),
							$formData.recipients.map((r) => BigInt(r.amount))
						]
					});
					await publicClient.waitForTransactionReceipt({ hash: txHash });

					const totalToSend = $formData.recipients
						.map((r) => BigInt(r.amount))
						.reduce((a, b) => a + b, BigInt(0));

					txHash = await walletClient.writeContract({
						abi: Contracts.ERC20.ERC20.abi,
						address: $formData.address as `0x${string}`,
						functionName: 'transfer',
						args: [receipt.contractAddress! as `0x${string}`, totalToSend]
					});
					await publicClient.waitForTransactionReceipt({ hash: txHash });


					jsonData(toSend)

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

	const { form: formData, enhance, validateForm, message } = form;

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value: DateValue | undefined;

	$: value = $formData.start ? parseDate($formData.start) : undefined;

	let placeholder: DateValue = today(getLocalTimeZone());

	let step = Step.Input;

	let deployAddress = '';
	let error: Error;

	message.subscribe((msg: AirdropCreationMessage) => {
		if (msg) {
			deployAddress = msg.address;
			step = Step.Success;
			return;
		}
	});
</script>

<!-- FIXME: triple step for airdrops: deploy contract -> send tokens -> set allowances donc -->
<TxForm {step}>
	<div slot="success">
		<h1 class="text-xl font-bold">Success</h1>
		<p class="text-muted-foreground">The airdrop contract was deployed at</p>
		<!-- TODO: this will overflow -->
		<p class="mt-2 text-lg">{deployAddress}</p>
		<!-- TODO: add support for links to token page, create liquidity, create airdrop, create ico -->
	</div>

	<div slot="failure">
		<h1 class="text-xl font-bold">Failure</h1>
		<p class="text-muted-foreground">Your contract could not be created</p>

		<p class="mx-auto mt-2 max-w-[50%] text-sm">Error: {error?.cause || error?.message}</p>
	</div>

	<div class="flex flex-col items-center justify-center w-full h-full space-y-2">
		<h1 class="text-4xl font-bold">Create your Airdrop</h1>
		<p class="text-lg text-center">Create your own airdrop in a few clicks. No coding required.</p>
	</div>

	<form method="POST" class="mt-6 space-y-8" use:enhance>
		<Form.Field name="address" {form}>
			<Form.Control let:attrs>
				<Form.Label>Token Address</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.address}
					placeholder="Your token's contract address"
				/>
			</Form.Control>
			<Form.Description
				>This is the address of the token that will be used to set up this airdrop.</Form.Description
			>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="start" class="flex flex-col">
			<Form.Control let:attrs>
				<Form.Label>Airdrop start date</Form.Label>
				<Popover.Root>
					<Popover.Trigger
						{...attrs}
						class={cn(
							buttonVariants({ variant: 'outline' }),
							'w-[280px] justify-start pl-4 text-left font-normal',
							!value && 'text-muted-foreground'
						)}
					>
						{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
						<CalendarIcon class="w-4 h-4 ml-auto opacity-50" />
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0" side="top">
						<Calendar
							{value}
							bind:placeholder
							minValue={today(getLocalTimeZone())}
							maxValue={new CalendarDate(2025, 12, 31)}
							calendarLabel="Start date"
							initialFocus
							onValueChange={(v) => {
								if (v) {
									//$formData.start = v.toDate(getLocalTimeZone()).toTimeString()
									$formData.start = v.toString();
								} else {
									$formData.start = '';
								}
							}}
						/>
					</Popover.Content>
				</Popover.Root>
				<Form.Description>Your airdrop will start at midnight of the selected day.</Form.Description
				>
				<Form.FieldErrors />
				<input hidden value={$formData.start} name={attrs.name} />
			</Form.Control>
		</Form.Field>

		<Form.Field {form} name="recipients">
			<Form.Control let:attrs>
				<Form.Label>Recipients</Form.Label>
				<Form.Description
					>Whitelist addresses that will be able to claim the airdrop.</Form.Description
				>
				<div class="flex items-center space-x-3">
					<Button
						disabled={$formData.recipients.length <= 1}
						on:click={() => {
							$formData.recipients.pop();
							$formData.recipients = $formData.recipients;
						}}
						size="sm"
					>
						-
					</Button>

					<Button
						size="sm"
						on:click={() =>
							($formData.recipients = [...$formData.recipients, { address: '', amount: 0 }])}
					>
						+
					</Button>
				</div>
				<div class="space-y-2">
					{#each $formData.recipients as recipient, i}
						<div class="flex items-center gap-4">
							<Input {...attrs} bind:value={recipient.address} placeholder="Recipient Address" />
							<Input {...attrs} bind:value={recipient.amount} placeholder="Recipient Amount" />
						</div>
					{/each}
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Submit</Form.Button>
		{#if browser}
			<SuperDebug data={$formData} />
		{/if}
	</form>
</TxForm>
