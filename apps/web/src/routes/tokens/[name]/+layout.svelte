<script lang="ts">
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { LayoutLink, CONTEXT_KEY } from './context';
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;

	const currentLink = writable(LayoutLink.Home);
	setContext(CONTEXT_KEY, currentLink);

	const LINK_TO = (link: LayoutLink) => {
		return `/tokens/${$page.params.name}/${link}`;
	};

	const symbol = 'DEDGE';
</script>

<section class="mb-8 ">
	<div class="grid gap-4 md:grid-cols-2">
		<div class="flex items-center space-x-3">
			<Avatar.Root>
				<Avatar.Image src={data.token.info.logo}></Avatar.Image>
			</Avatar.Root>
			<div>
				<h1 class="text-lg lg:text-2xl">
					{data.token.info.name}
				</h1>
				<div class="mt-1 text-xs font-semibold uppercase text-muted-foreground lg:text-sm">
					{data.token.info.symbol}
				</div>
			</div>
		</div>

		<div class="">
			token info? decimals / holders count / links

			<div class="text-white bg-primary">if ico - link to /icos/token_name</div>

			<div>
				Header avec display du token and stuff Bouton "Add to Metamask" (and other wallets ofc)
				<!-- TODO: https://ethereum.stackexchange.com/questions/99343/how-to-automatically-add-a-custom-token-to-metamask-with-ethers-js -->
			</div>
		</div>
	</div>

	<div class="mt-12 overflow-x-auto">
		<div class="pb-0 border-b border-muted">
			<div class="mt-3 sm:mt-4">
				<nav class="flex justify-center -mb-px space-x-8">
					<a
						href={LINK_TO(LayoutLink.Home)}
						data-sveltekit-noscroll
						data-active={$currentLink === LayoutLink.Home}
						class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap">About {data.token.info.symbol.toUpperCase()}</a
					>
					<a
						href={LINK_TO(LayoutLink.Analytics)}
						data-sveltekit-noscroll
						data-active={$currentLink === LayoutLink.Analytics}
						class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap"
						aria-current="page">Analytics</a
					>
					<!-- 
				<a
					href={LINK_TO(LayoutLink.Stats)}
					data-sveltekit-noscroll
					data-active={$currentLink === LayoutLink.Stats}
					class="px-1 pb-4 text-sm font-medium border-b-2 whitespace-nowrap">Stats</a
				>
				 -->
				</nav>
			</div>
		</div>
	</div>
</section>

<slot />

<style lang="postcss">
	nav > a {
		@apply text-muted-foreground border-transparent duration-200;

		&[data-active='true'] {
			@apply text-primary border-primary;
		}

		&:hover[data-active='false'] {
			@apply border-muted-foreground text-foreground;
		}
	}
</style>
