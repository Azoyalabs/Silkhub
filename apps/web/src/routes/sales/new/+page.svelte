<script lang="ts" context="module">
	import { z } from 'zod';

	// TODO: ensure end date > start date

	export const saleFormSchema = z.object({
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
		range: z.object({
			start: z.string().refine((v) => v, { message: 'A valid date is required' }),
			end: z.string().refine((v) => v, { message: 'A valid date is required' })
		}),
		price: z.coerce.number().default(0.001),
		supply: z.coerce.number().default(100_000),
		contract: z.string(),

	});

	export type SaleFormSchema = typeof saleFormSchema;

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
	import { buttonVariants } from '$lib/components/ui/button';
	import { CalendarIcon } from 'lucide-svelte';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { cn, dateToTimestamp, isEVMAddress } from '$lib/utils';
	import type { PageData } from './$types';
	import * as Popover from '$lib/components/ui/popover';
	import { Input } from '$lib/components/ui/input';
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import type { DateRange } from 'bits-ui';
	import TxForm, { Step } from '$lib/components/app/TxForm/TxForm.svelte';
	import { getPublicClient, getWalletClient, type GetAccountReturnType } from '@wagmi/core';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { WAGMI_CONFIG } from '$lib/configs/wagmi';
	import { Sale } from '$lib/contracts';
	import type { SaleCreationMessage } from '$lib/types/Messages';
	import { Button } from '$lib/components/ui/button';
	import { ArrowUpRight } from 'lucide-svelte';
	import * as Contracts from '$lib/contracts';

	export let data: PageData;
	let step = Step.Input;

	const form = superForm(data.form, {
		dataType: 'json',
		validators: zodClient(saleFormSchema),
		onSubmit: async ({ formData, cancel, jsonData }) => {
			const result = await validateForm({ update: false });
			if (result.valid) {
				step = Step.Transacting;

				const walletClient = await getWalletClient(WAGMI_CONFIG);
				const publicClient = await getPublicClient(WAGMI_CONFIG)!;

				const abi = Sale;

				try {
					let txHash = await walletClient.deployContract({
						abi: abi.abi,
						args: [
							$formData.address as `0x${string}`,
							BigInt($formData.price * Math.pow(10, 18)),
							dateToTimestamp(new Date($formData.range.start)),
							dateToTimestamp(new Date($formData.range.end))
						],
						bytecode: abi.bytecode
					});

					const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
					const updatedFormData = {
						...$formData,
						contract: receipt.contractAddress as string
					};

					txHash = await walletClient.writeContract({
						abi: Contracts.ERC20.ERC20.abi,
						address: $formData.address as `0x${string}`,
						functionName: 'transfer',
						args: [receipt.contractAddress! as `0x${string}`, BigInt($formData.supply)]
					});

					await publicClient.waitForTransactionReceipt({ hash: txHash });

					jsonData(updatedFormData);

					// formData.set('address', receipt.contractAddress as string);
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

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let startValue: DateValue | undefined;
	let tomorrow = today(getLocalTimeZone()).add({ days: 1 });

	let rangeValue: DateRange | undefined = {
		start: tomorrow,
		end: tomorrow.add({ days: 20 })
	};
	let rangeStartValue: DateValue | undefined = undefined;

	let deployAddress = '';
	let tokenAddress = '';
	let error: Error;

	const account = getContext<Writable<GetAccountReturnType>>('account');

	message.subscribe((msg: SaleCreationMessage) => {
		if (msg) {
			tokenAddress = msg.token;
			deployAddress = msg.address;
			console.log(deployAddress);
			step = Step.Success;
			return;
		}
	});
</script>

<TxForm {step}>
	<div slot="success">
		<h1 class="text-xl font-bold">Success</h1>
		<p class="text-muted-foreground">Your token sale has been created at</p>
		<p class="mt-2 text-lg">{deployAddress}</p>

		<Button href="/tokens/{tokenAddress}">View Sale <ArrowUpRight size="24" /></Button>
	</div>

	<div slot="failure">
		<h1 class="text-xl font-bold">Failure</h1>
		<p class="text-muted-foreground">Your token could not be created</p>

		<p class="mx-auto mt-2 max-w-[50%] text-sm">Error: {error?.cause || error?.message}</p>
	</div>

	<div class="flex flex-col items-center justify-center w-full h-full space-y-2">
		<h1 class="text-4xl font-bold">Create your Token Sale</h1>
		<p class="text-lg text-center">
			Create your own token sale in a few clicks. No coding required.
		</p>
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

		<Form.Field {form} name="range" class="flex flex-col">
			<Form.Control let:attrs>
				<Form.Label>Token Sale date</Form.Label>
				<Popover.Root>
					<Popover.Trigger
						{...attrs}
						class={cn(
							buttonVariants({ variant: 'outline' }),
							'w-[280px] justify-start pl-4 text-left font-normal',
							!rangeStartValue && 'text-muted-foreground'
						)}
					>
						{#if rangeValue?.start && rangeValue?.end}
							{df.format(rangeValue?.start.toDate(getLocalTimeZone()))} - {df.format(
								rangeValue?.end.toDate(getLocalTimeZone())
							)}
						{:else}
							Pick a date
						{/if}
						<CalendarIcon class="w-4 h-4 ml-auto opacity-50" />
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0" side="top">
						<RangeCalendar
							bind:value={rangeValue}
							bind:startValue={rangeStartValue}
							placeholder={rangeValue?.start}
							minValue={tomorrow}
							initialFocus
							numberOfMonths={2}
							onValueChange={(v) => {
								if (v) {
									$formData.range = {
										start: v.start?.toString() ?? '',
										end: v.end?.toString() ?? ''
									};
								} else {
									$formData.range = {
										start: '',
										end: ''
									};
								}
							}}
						/>
					</Popover.Content>
				</Popover.Root>
				<Form.Description>Your sale will end at midnight of the selected day.</Form.Description>
				<Form.FieldErrors />
				<input hidden value={$formData.range.start} name={attrs.name} />
				<input hidden value={$formData.range.end} name={attrs.name} />
			</Form.Control>
		</Form.Field>

		<Form.Field name="supply" {form}>
			<Form.Control let:attrs>
				<Form.Label>Sale Supply</Form.Label>
				<Input {...attrs} bind:value={$formData.supply} type="number" />
			</Form.Control>
			<Form.Description>How many tokens will be put on sale.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field name="price" {form}>
			<Form.Control let:attrs>
				<Form.Label>Token Price</Form.Label>
				<div class="flex items-stretch">
					<Input
						{...attrs}
						step={'0.00000001'}
						bind:value={$formData.price}
						type="number"
						class="rounded-r-none"
					/>
					<div
						class="flex items-center px-4 border-l rounded-r border-y bg-muted/80 text-muted-foreground"
					>
						BTC
					</div>
				</div>
			</Form.Control>
			<Form.Description>Price for 1 token in Bitcoin (BTC)</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button>Submit</Form.Button>
		{#if browser}
			<SuperDebug data={$formData} />
		{/if}
	</form>
</TxForm>
