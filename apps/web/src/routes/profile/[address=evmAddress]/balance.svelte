<script lang="ts">
	export let balance: string;
	export let symbol: string;

	function splitBalance(bal: string) {
		const [whole, decimal] = bal.split('.') as [string, string];
		return {
			whole,
			decimal
		};
	}

	$: split = splitBalance(balance);
</script>

<div class="flex items-baseline">
	<span class="text-2xl">{split.whole}</span>.<span class="mr-2 text-muted-foreground"
		>{split.decimal}</span
	>
	{symbol}
</div>
