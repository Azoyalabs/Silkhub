<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { setLayoutContext, LayoutLink } from './context.js';
	import { ArrowUpRight } from 'lucide-svelte';

	export let data;
	setLayoutContext(LayoutLink.Home);
</script>

<article class="prose prose-yellow prose-invert xl:prose-lg">
	<SvelteMarkdown source={data.token.description}></SvelteMarkdown>
</article>

<a
	href="/launchpad"
	class="flex items-center justify-between p-6 mt-6 text-black rounded-lg bg-primary"
>
	<div>Make your own token</div>

	<ArrowUpRight></ArrowUpRight>
</a>
