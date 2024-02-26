import { defineChain } from 'viem';

export const BOTANIX_TESTNET = defineChain({
	id: 3636,
	name: 'Botanix Testnet',
	nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['https://node.botanixlabs.dev']
		}
	},
	blockExplorers: {
		default: {
			name: '3xpl',
			url: 'https://3xpl.com/botanix',
			apiUrl: 'https://api.3xpl.com'
		}
	},
	contracts: {
		// TODO: maybe we should deploy a multicall
        // https://github.com/mds1/multicall/blob/main/src/Multicall3.sol
        /*
		multicall3: {
			address: '0xca11bde05977b3631167028862be2a173976ca11',
			blockCreated: 14_353_601
		}*/
	}
});
