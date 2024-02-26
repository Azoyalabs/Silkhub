import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms/server';
// import { publishSchema } from '$lib/schemas/PublishSchema';
import { tokenFormSchema } from './+page.svelte';

export const load = (async () => {
	return { form: await superValidate(tokenFormSchema) };
}) satisfies PageServerLoad;