<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { MessageCircleQuestion, PlusCircle } from 'lucide-svelte';

	export let data;
</script>

<div class="space-y-16">
	<section>
		<div class="flex items-center justify-between">
			<h2>Token Sales</h2>
			<Button href="/sales/new" size="sm" variant="outline"
				>Create a Sale <PlusCircle class="ml-2"></PlusCircle></Button
			>
		</div>
		<div class="mt-4">
			{#if data.sales.length > 0}
				<div class="grid gap-6 lg:grid-cols-3">
					{#each data.sales as sale}
						{@const startDate = new Date(sale.start_date)}
						{@const endDate = new Date(sale.end_date)}

						{@const hasStarted = new Date() > startDate}
						<a href="/tokens/{sale.token?.address}" class="group">
							<Card.Root class="duration-300 group-hover:border-primary">
								<Card.Content class="flex flex-col p-4">
									<div class="flex items-center space-x-3">
										<Avatar.Root>
											<Avatar.Image src={sale.token.logo}></Avatar.Image>
										</Avatar.Root>
										<div>
											<h5 class="text-lg font-medium lg:text-2xl">
												{sale.token.name}
											</h5>
											<div class="text-xs font-semibold uppercase text-muted-foreground lg:text-sm">
												{sale.token.symbol}
											</div>
										</div>
									</div>
									<div class="flex items-center justify-between mt-6">
										<div>
											{#if hasStarted}
												<Badge class="uppercase">ongoing</Badge>
											{:else}
												<div class="text-sm">
													Starts on {startDate.toLocaleDateString()}
												</div>
											{/if}
										</div>

										<div class="text-xs text-muted-foreground">
											{sale.unit_price} BTC
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</a>
					{/each}
				</div>
			{:else}
				<div
					class="flex h-[250px] shrink-0 items-center justify-center rounded-md border border-dashed bg-background"
				>
					<div class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
						<div class="w-10 h-10 text-muted-foreground">
							<MessageCircleQuestion class="w-10 h-10" />
						</div>

						<h3 class="mt-4 text-lg font-medium">No Sale found</h3>
						<p class="mt-2 mb-4 text-sm text-muted-foreground"></p>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<section>
		<div class="flex items-center justify-between">
			<h2>Airdrops available</h2>
			<Button href="/airdrops/new" size="sm" variant="outline"
				>Create an Airdrop <PlusCircle class="ml-2"></PlusCircle></Button
			>
		</div>
		<div class="mt-4">
			{#if data.airdrops.length > 0}
				<div class="grid gap-6 lg:grid-cols-3">
					{#each data.airdrops as airdrop}
						{@const startDate = new Date(airdrop.start_date)}
						{@const hasStarted = new Date() > startDate}
						<a href="/tokens/{airdrop.token?.address}" class="group">
							<Card.Root class="duration-300 group-hover:border-primary">
								<Card.Content class="flex flex-col p-4">
									<div class="flex items-center space-x-3">
										<Avatar.Root>
											<Avatar.Image src={airdrop.token.logo}></Avatar.Image>
										</Avatar.Root>
										<div>
											<h5 class="text-lg font-medium lg:text-2xl">
												{airdrop.token.name}
											</h5>
											<div class="text-xs font-semibold uppercase text-muted-foreground lg:text-sm">
												{airdrop.token.symbol}
											</div>
										</div>
									</div>
									<div class="mt-6">
										{#if hasStarted}
											<Badge class="uppercase">ongoing</Badge>
										{:else}
											<div class="text-sm">
												Starts on {startDate.toLocaleDateString()}
											</div>
										{/if}
									</div>
								</Card.Content>
							</Card.Root>
						</a>
					{/each}
				</div>
			{:else}
				<div
					class="flex h-[250px] shrink-0 items-center justify-center rounded-md border border-dashed bg-background"
				>
					<div class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
						<div class="w-10 h-10 text-muted-foreground">
							<MessageCircleQuestion class="w-10 h-10" />
						</div>

						<h3 class="mt-4 text-lg font-semibold">No Airdrop found</h3>
						<p class="mt-2 mb-4 text-sm text-muted-foreground"></p>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<section>
		<div class="flex items-center justify-between">
			<h2>Tokens Created</h2>
			<Button href="/launchpad" size="sm" variant="outline"
				>Create a Token <PlusCircle class="ml-2"></PlusCircle></Button
			>
		</div>
		<div class="mt-4">
			{#if data.tokens.length > 0}
				<div class="grid gap-6 lg:grid-cols-3">
					{#each data.tokens as token}
						{@const created = new Date(token.creation_date)}
						<a href="/tokens/{token.address}" class="group">
							<Card.Root class="duration-300 group-hover:border-primary">
								<Card.Content class="flex flex-col p-4">
									<div class="flex items-center space-x-3">
										<Avatar.Root>
											<Avatar.Image src={token.logo}></Avatar.Image>
										</Avatar.Root>
										<div>
											<h5 class="text-lg font-medium lg:text-2xl">
												{token.name}
											</h5>
											<div class="text-xs font-semibold uppercase text-muted-foreground lg:text-sm">
												{token.symbol}
											</div>
										</div>
									</div>
									<div class="mt-6">
										<div class="text-sm">
											Created on {created.toLocaleDateString()}
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</a>
					{/each}
				</div>
			{:else}
				<div
					class="flex h-[250px] shrink-0 items-center justify-center rounded-md border border-dashed bg-background"
				>
					<div class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
						<div class="w-10 h-10 text-muted-foreground">
							<MessageCircleQuestion class="w-10 h-10" />
						</div>

						<h3 class="mt-4 text-lg font-semibold">No Tokens found</h3>
						<p class="mt-2 mb-4 text-sm text-muted-foreground"></p>
					</div>
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	h2 {
		@apply text-xl font-semibold;
	}
</style>
