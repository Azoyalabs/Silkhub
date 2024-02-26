import { BOTANIX_TESTNET } from '$lib/constants/chain';
import type { LayoutLoad } from './$types';
import { createPublicClient, http } from 'viem';

export const load = (async () => {
	const publicClient = createPublicClient({
		chain: BOTANIX_TESTNET,
		transport: http()
	});

	return { publicClient };
}) satisfies LayoutLoad;
