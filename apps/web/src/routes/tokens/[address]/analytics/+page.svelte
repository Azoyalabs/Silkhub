<script lang="ts">
	import StatsCard from '$lib/components/app/StatsCard/StatsCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { AVOCADOSWAP, BITZY } from '$lib/constants/dexLinks';
	import { setLayoutContext, LayoutLink } from '../context';

	setLayoutContext(LayoutLink.Analytics);

	export let data;
</script>

<div class="grid grid-cols-3 gap-6">
	<StatsCard value={data.token.info.initial_supply} description={'Initial Supply'}></StatsCard>

	<StatsCard value={String(data.token.info.mintable).toUpperCase()} description={'Mintable'}
	></StatsCard>
	<StatsCard value={String(data.token.info.burnable).toUpperCase()} description={'Burnable'}
	></StatsCard>
	<StatsCard value={String(data.token.info.pausable).toUpperCase()} description={'Pausable'}
	></StatsCard>

	<StatsCard
		value={new Date(data.token.info.creation_date).toLocaleDateString()}
		description={'Launched'}
	></StatsCard>
</div>

<div class="mt-12">
	<h3 class="text-xl font-medium">Trade on</h3>
	<div class="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
		<Button href="{BITZY.SWAP}" variant="outline" class="h-[100px]">
			<div>Bitzy</div>
		</Button>
		<Button href="{AVOCADOSWAP.SWAP(data.token.info.address)}" variant="outline" class="h-[100px]">
			<div>AvocadoSwap</div>
		</Button>
	</div>
</div>
