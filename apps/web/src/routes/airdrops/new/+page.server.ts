import type { PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { airdropFormSchema } from './+page.svelte';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { supabase } from '$lib/db';
import type { AirdropCreationMessage } from '$lib/types/Messages';

export const load = (async () => {
	return { form: await superValidate(zod(airdropFormSchema)) };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const form = await superValidate(formData, zod(airdropFormSchema));

		if (!form.valid) {
			return fail(400, form);
		}
		const result = await supabase
			.from('airdrop')
			.insert([
				{
					start_date: form.data.start,
					token_address: form.data.address,
					contract: form.data.contract
				}
			])
			.select('contract')
			.single();

		if (result.error) {
			console.dir(result.error);
		}

		return message<AirdropCreationMessage>(form, { address: form.data!.contract });
	}
};
