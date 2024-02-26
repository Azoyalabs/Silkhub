<script lang="ts">
	import { page } from '$app/stores';
	import Balance from './balance.svelte';
	export let data;
	/*
    Juste montrer "combien de tokens tu as en natif", plus potentiellement tous les tokens hostés chez nous
Viem permet multicall, donc is ok
Sans doute caler une route /user/{address} 
pas besoin de connection, c'est de la data publique
*/
</script>

<section class="py-6">
	<h1 class="text-xl font-semibold">
		{data.address.address}
	</h1>
	<div class="mt-6">
		<h2 class="text-sm font-medium tracking-wider uppercase text-primary">Balances</h2>
		<div class="mt-2 space-y-4">
			<Balance balance={data.address.balances.native} symbol="BTC" />
			<Balance balance={data.address.balances.native} symbol="BTC" />
			<Balance balance={data.address.balances.native} symbol="BTC" />
		</div>
	</div>
</section>
