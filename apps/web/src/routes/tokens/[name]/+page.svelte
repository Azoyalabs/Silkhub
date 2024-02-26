<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { setLayoutContext, LayoutLink } from './context.js';

	export let data;
	setLayoutContext(LayoutLink.Home);
</script>

<article class="prose xl:prose-lg prose-invert prose-yellow">
	<SvelteMarkdown source={data.token.description}></SvelteMarkdown>
</article>

<a href="/launchpad" class="block p-6 mt-6 text-white rounded-lg bg-primary">Make your own token</a>
