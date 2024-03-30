<script context="module" lang="ts">
	import TxForm, { Step } from './TxForm.svelte';

	export const meta = {
		title: 'App/Transaction Form',
		component: TxForm,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<TxForm>;

	let error = Error('This is a transaction error', { cause: 'no reason given' });
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<TxForm {...args}></TxForm>
</Template>

<Story name="Input">
	<TxForm>
        <div>
            Form
        </div>
    </TxForm>
</Story>

<Story name="Transacting">
	<TxForm step={Step.Transacting}></TxForm>
</Story>

<Story name="Success">
	<TxForm step={Step.Success}>
		<div slot="success">
			<h1 class="text-xl font-bold">Success</h1>
			<p class="text-muted-foreground">Your token has been created at</p>
			<p class="mt-2 text-lg">{'0xaddress'}</p>
		</div>
	</TxForm>
</Story>

<Story name="Failure">
	<TxForm step={Step.Failure}>
		<div slot="failure">
			<h1 class="text-xl font-bold">Failure</h1>
			<p class="text-muted-foreground">Your token could not be created</p>

			<p class="mt-2">Error: {error.cause || error.message}</p>
		</div>
	</TxForm>
</Story>
