<script lang="ts">
	export let value: string;
	export let description: string;
</script>

<div class="flex flex-col items-center py-6 border rounded-md">
	<div class="text-lg">{value}</div>
	<div class="text-sm uppercase text-muted-foreground">{description}</div>
</div>
