<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowUpRight, BoomBox } from 'lucide-svelte';

	let heroFeatures = [
		{
			icon: BoomBox,
			title: 'Classic',
			content: 'Create a regular ERC20 token with a fixed supply.'
		},
		{
			icon: BoomBox,
			title: 'Mintable',
			content: 'Create a token with a customisable minter.'
		},
		{
			icon: BoomBox,
			title: 'Burnable',
			content: 'Let holders or contracts burn their holdings.'
		},
		{
			icon: BoomBox,
			title: 'Pausable',
			content: 'Add an emergency stop mechanism to your token contract.'
		}
	];
</script>

<div class="mx-auto my-12 max-w-7xl">
	<div class="pb-6 mx-auto md:pb-12">
		<h2 class="block font-sans text-5xl font-bold">
			Launch Your <span class="text-primary">Token</span> with Silkhub
		</h2>
		<p class="block mt-6 font-serif text-xl font-normal text-muted-foreground">
			Create and launch a new token with Silkhub. Choose from a variety of token types or mix &
			match capabilities to your liking.
		</p>
	</div>
	<div
		class="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-600 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16 xl:grid-cols-4"
	>
		{#each heroFeatures as feature}
			<div class="relative pl-9">
				<h3 class="block font-serif text-lg font-semibold text-gray-900 dark:text-gray-100">
					<svelte:component this={feature.icon} class="absolute w-5 h-5 left-1 top-1"
					></svelte:component>

					{feature.title}
				</h3>
				<p class="font-serif text-lg font-normal text-muted-foreground">
					{feature.content}
				</p>
			</div>
		{/each}
	</div>
	<div>
		<Button href="/launchpad">Create a token</Button>
	</div>
</div>

<section class="p-8 mt-12 rounded-lg bg-primary text-background">
	<div class="">
		<div class="">
			<div class="">
				<h2 class="text-3xl font-bold lg:text-5xl">Ecosystem First</h2>
			</div>
			<p class="mt-10">
				Build a DEX or an dApp on Botanix?<br /> Silkhub helps you keep track of launched token thanks
				to our token list.
			</p>

			<div class="flex items-center gap-4">
				<Button variant="outline" href="/tokens" class="mt-12 text-white"
					>View Launched tokens

					<ArrowUpRight class="w-5 h-5 ml-2"></ArrowUpRight>
				</Button>
				<Button variant="default" href="/api/tokens" class="mt-12 text-black border-black"
					>Access token list

					<ArrowUpRight class="w-5 h-5 ml-2"></ArrowUpRight>
				</Button>

				
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
	<div
		class="relative px-6 py-24 overflow-hidden text-center shadow-2xl isolate bg-background/50 sm:rounded-3xl sm:px-16"
	>
		<h2 class="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
			Go the extra mile
		</h2>
		<p class="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
			Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
			proident excepteur commodo do ea.
		</p>
		<div class="flex items-center justify-center mt-10 gap-x-6">
			<a
				href="/airdrops/new"
				class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>Create an Airdrop</a
			>
			<a href="/sales/new" class="text-sm font-semibold leading-6 text-white"
				>Create a Token Sale <span aria-hidden="true">→</span></a
			>
		</div>
		<svg
			viewBox="0 0 1024 1024"
			class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
			aria-hidden="true"
		>
			<circle
				cx="512"
				cy="512"
				r="512"
				fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
				fill-opacity="0.7"
			/>
			<defs>
				<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
					<stop stop-color="#7775D6" />
					<stop offset="1" stop-color="#E935C1" />
				</radialGradient>
			</defs>
		</svg>
	</div>
</div>

<a href="https://dorahacks.io/hackathon/spiderhack/buidl">Built for the Spiderhack Hackathon</a>
