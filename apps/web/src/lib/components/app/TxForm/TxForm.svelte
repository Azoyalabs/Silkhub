<script lang="ts" context="module">
	export enum Step {
		Input,
		Transacting,
		Success,
		Failure
	}
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import Transacting from './Transacting.svelte';

	export let step: Step = Step.Input;
</script>

{#if step === Step.Input}
	<slot />
{/if}

{#if step === Step.Transacting}
	<Transacting></Transacting>
{/if}

{#if step === Step.Success}
	<div class="flex min-h-[200px] p-4 flex-col items-center justify-center rounded-lg border text-center">
		<slot name="success">
			<p>Success!</p>
		</slot>
	</div>
{/if}

{#if step === Step.Failure}
	<div class="flex min-h-[200px] p-4 flex-col items-center justify-center rounded-lg border text-center">
		<slot name="failure">
			<p>Failure!</p>
		</slot>
		<Button class="mt-4" on:click={() => (step = Step.Input)}>Go back</Button>
	</div>
{/if}
