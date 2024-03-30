import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
	
	return {
		token: {
			info: data.token,
			description: data.token.description
		},
		airdrop: data.token.airdrop,
		sale: data.token.sale,
	};
}) satisfies LayoutLoad;
