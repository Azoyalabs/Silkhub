<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let data;
</script>

<!-- TODO: implement airdrop landing page -->

airdrop landing

<section>
	<h2>Create your own airdrop</h2>
	<p>description</p>

	<Button>Create</Button>
</section>

<section class="mt-6">
	<h2 class="text-xl font-medium">Registered Airdrops</h2>
	<div class="grid gap-6 mt-2 md:grid-cols-2 lg:grid-cols-3">
		{#each data.airdrops as airdrop}
			<div class="p-2 border rounded-lg">
				{airdrop.name}
			</div>
		{/each}
	</div>
</section>
