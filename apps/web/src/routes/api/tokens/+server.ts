import type { TokenList } from '$lib/types/TokenList';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const tokenList: TokenList = {
		name: 'Silkhub',
		version: { major: 0, minor: 0, patch: 0 }, // TODO: handle versioning
		timestamp: new Date(), // TODO: should be last modified in database
		tokens: [
			{
				address: '0xaddress',
				chainId: 1,
				decimals: 18,
				name: 'token name',
				symbol: 'SYM',
				logoURI: '',
				extensions: {}
			}
		]
	};
	return json(tokenList);
};
