import type { PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { saleFormSchema } from './+page.svelte';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { supabase } from '$lib/db';
import type { SaleCreationMessage } from '$lib/types/Messages';

export const load = (async () => {
	return { form: await superValidate(zod(saleFormSchema)) };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		console.dir(formData);
		const form = await superValidate(formData, zod(saleFormSchema));

		if (!form.valid) {
			return fail(400, form);
		}

		const result = await supabase
			.from('sale')
			.insert([
				{
					start_date: form.data.range.start,
					end_date: form.data.range.end,
					token_address: form.data.address,
					contract: form.data.contract,
					unit_price: form.data.price
				}
			])
			.select('contract')
			.single();

		if (result.error) {
			console.dir(result.error);
		}

		return message<SaleCreationMessage>(form, {
			address: form.data!.contract,
			token: form.data!.address
		});
		return {
			form
		};
	}
};
