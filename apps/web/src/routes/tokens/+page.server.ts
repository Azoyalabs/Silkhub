import { supabase } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data: airdrops } = await supabase.from('airdrop').select(`
        id,
        start_date,
        contract,
        token(address, logo, name, symbol)
    `);

	const { data: tokens } = await supabase
		.from('token')
		.select(`*`)
		.order('creation_date', { ascending: false })
		.limit(10);


	return { airdrops: airdrops || [], tokens: tokens || [] };
}) satisfies PageServerLoad;
