import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return /^0x[a-fA-F0-9]{40}$/.test(param);
};
