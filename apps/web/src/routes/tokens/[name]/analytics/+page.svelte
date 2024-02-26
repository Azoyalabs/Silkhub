<script lang="ts">
	import StatsCard from '$lib/components/app/StatsCard/StatsCard.svelte';
	import { setLayoutContext, LayoutLink } from '../context';

	setLayoutContext(LayoutLink.Analytics);
</script>

<div class="grid grid-cols-3 gap-6">
	<StatsCard value={'NUMBER'} description={'owners'}></StatsCard>
	<StatsCard value={'1000'} description={'supply'}></StatsCard>

	<StatsCard value={'MINT'} description={'feature'}></StatsCard>

	<StatsCard value={new Date().toLocaleDateString()} description={'Launched'}></StatsCard>
	<StatsCard value={'20 or so'} description={'transactions'}></StatsCard>
</div>

<div class="mt-12">
	<h3>Rich List</h3>
	<div>rich list table</div>
</div>

<div class="mt-12">
	<h3>charts?</h3>
	<div>some charts</div>
</div>
