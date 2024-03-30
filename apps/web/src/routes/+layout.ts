import { BOTANIX_TESTNET } from '$lib/constants/chain';
import type { LayoutLoad } from './$types';
import { createPublicClient, http } from 'viem';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = (async ({ url }) => {
	const publicClient = createPublicClient({
		chain: BOTANIX_TESTNET,
		transport: http()
	});

	const baseMetaTags = Object.freeze({
		title: 'Home',
		titleTemplate: '%s | Silkhub',
		description:
			'Silkhub is a Token Launchpad for the Spiderchain. Create your token, an airdrop or a Token sale without writing a line of code.',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_US',
			title: 'Home',
			description: 'Silkhub is a Token Launchpad for the Spiderchain. Create your token, an airdrop or a Token sale without writing a line of code.',
			siteName: 'Silkhub',
			images: [
				 // TODO: Add OG images
				{
					url: 'https://www.example.ie/og-image.jpg',
					alt: 'Og Image Alt',
					width: 800,
					height: 600,
					secureUrl: 'https://www.example.ie/og-image.jpg',
					type: 'image/jpeg'
				}
			]
		}
	}) satisfies MetaTagsProps;

	return { publicClient, baseMetaTags };
}) satisfies LayoutLoad;
