import type { TokenList } from '$lib/types/TokenList';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/db';
import { BOTANIX_TESTNET } from '$lib/constants/chain';

// FIXME: chainID should be bot

export const GET: RequestHandler = async () => {
	const { data: tokens } = await supabase
		.from('token')
		.select('*')
		.order('creation_date', { ascending: false });

	const tokenList: TokenList = {
		name: 'Silkhub',
		version: { major: 0, minor: 0, patch: 1 },
		timestamp: tokens && tokens[0] ? new Date(tokens[0].creation_date) : new Date(), // TODO: should be last modified in database
		tokens: [
			...(tokens || []).map((t) => {
				return {
					address: t.address as `0x${string}`,
					chainId: BOTANIX_TESTNET.id,
					logoURI: t.logo,
					decimals: t.decimals,
					name: t.name,
					symbol: t.symbol,
					extensions: {
						creator: t.creator,
						created: t.creation_date,

						website: t.website,
						telegram: t.telegram,
						twitter: t.twitter,
						medium: t.medium,
						linkedin: t.linkedin,
						discord: t.discord
					}
				};
			})
		]
	};
	return json(tokenList);
};
