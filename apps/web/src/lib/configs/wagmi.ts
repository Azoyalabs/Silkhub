import { PUBLIC_WALLETCONNECT_PROJECT_ID } from '$env/static/public';
import { BOTANIX_TESTNET } from '$lib/constants/chain';
import { defaultWagmiConfig } from '@web3modal/wagmi';

// 1. Define constants
const projectId = PUBLIC_WALLETCONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [BOTANIX_TESTNET];

export const WAGMI_CONFIG = defaultWagmiConfig({
    chains: chains, // required
    projectId, // required
    metadata, // required
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true, // Optional - true by default
    // ...wagmiOptions // Optional - Override createConfig parameters
    enableEmail: true,
});