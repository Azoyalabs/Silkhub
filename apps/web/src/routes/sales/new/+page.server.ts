import type { PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
// import { publishSchema } from '$lib/schemas/PublishSchema';
import { saleFormSchema } from './+page.svelte';
import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';

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

		return message(form, { success: 'yep' });
		return {
			form
		};
	}
};
