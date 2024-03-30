import type { PageServerLoad } from './$types';

export const load = (async () => {

    const airdrops = new Array(10).fill(null).map((_) => {
        return {
            name: "Airdrop Token",
            symbol: "ADT",
            address: "0x1234567890",
            start: "2021-10-01",
        }
    })
    return {
        airdrops
    };
}) satisfies PageServerLoad;