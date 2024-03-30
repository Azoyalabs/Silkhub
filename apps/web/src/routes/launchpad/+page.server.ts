import type { PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { tokenFormSchema } from './+page.svelte';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { supabase } from '$lib/db';

export const load = (async () => {
	return { form: await superValidate(zod(tokenFormSchema)) };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const form = await superValidate(formData, zod(tokenFormSchema));

		if (!form.valid) {
			return fail(400, form);
		}

		const result = await supabase.from('token').insert([
			{
				address: form.data.address,
				burnable: form.data.burnable,
				creation_date: new Date().toISOString(),
				decimals: form.data.decimals,
				creator: form.data.sender,
				description: form.data.description,
				name: form.data.tokenName,
				symbol: form.data.symbol,
				initial_supply: form.data.supply,
				website: form.data.website,
				telegram: form.data.telegram,
				twitter: form.data.twitter,
				medium: form.data.medium,
				mintable: form.data.mintable,
				pausable: form.data.pausable,
				logo: form.data.logo
			}
		]);
		if (result.error) {
			console.dir(result.error);
		}

		return message(form, { address: form.data.address });
		return {
			form
		};
	}
};
