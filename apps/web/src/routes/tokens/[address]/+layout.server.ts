import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { data: token, error: err } = await supabase
		.from('token')
		.select(
			'*, airdrop(token_address, start_date, contract), sale(token_address, start_date, end_date, contract, unit_price)'
		)
		.eq('address', params.address)
		.single();

	if (token) {
		return { token };
	} else {
		error(404, 'Token not found');
	}
}) satisfies LayoutServerLoad;
