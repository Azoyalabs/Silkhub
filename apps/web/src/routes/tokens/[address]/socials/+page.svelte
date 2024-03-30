<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { setLayoutContext, LayoutLink } from '../context';

	setLayoutContext(LayoutLink.Socials);

	export let data;

	const socialNetworks = ['telegram', 'twitter', 'discord', 'linkedin', 'medium'];
	// @ts-expect-error
	$: socials = socialNetworks.map((network) => data.token.info[network] as string | null);
</script>


<div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
	{#each socialNetworks as social, i}
		{@const input = data.token.info[social]}
		<Card.Root>
			<Card.Header>
				<Card.Title class="text-sm uppercase text-muted-foreground">
					{social}
				</Card.Title>
				<Card.Description class={input ? 'text-lg text-white' : 'text-muted-foreground'}>
					{input ?? 'None'}
				</Card.Description>
			</Card.Header>
		</Card.Root>
	{/each}
</div>
