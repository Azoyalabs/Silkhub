import { formatEther } from 'viem';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const { publicClient } = await parent();
	const address = params.address as `0x${string}`;
    
	const balance = await publicClient.getBalance({
        blockTag: 'safe',
		address: address
	});
    
	const balanceAsEther = formatEther(balance);
    // TODO: get balances for tokens

    
	return {
		address: {
			balances: {
				native: balanceAsEther,
                tokens: []
			},
			address
		}
	};
}) satisfies PageLoad;
