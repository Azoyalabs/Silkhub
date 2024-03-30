

import { defineChain } from 'viem'

export const botanix_testnet = defineChain({
    id: 3636,
    name: "Botanix Testnet",
    nativeCurrency: {
        decimals: 18,
        name: "Bitcoin",
        symbol: "BTC"
    },
    rpcUrls: {
        default: {
            http: ["https://node.botanixlabs.dev"],
            webSocket: ["wss://node.botanixlabs.dev"] // not sure if is ok
        }
    },
    blockExplorers: {
        default: { name: '3xpl', url: 'https://3xpl.com/botanix' },
    },
})