<script lang="ts" context="module">
	import { z } from 'zod';

	const languages = {
		en: 'English',
		fr: 'French',
		de: 'German',
		es: 'Spanish',
		pt: 'Portuguese',
		ru: 'Russian',
		ja: 'Japanese',
		ko: 'Korean',
		zh: 'Chinese'
	} as const;

	type Language = keyof typeof languages;

	export const tokenFormSchema = z.object({
		name: z
			.string({
				required_error: 'Required.'
			})
			.min(2, 'Name must be at least 2 characters.')
			.max(30, 'Name must not be longer than 30 characters'),
		symbol: z
			.string({
				required_error: 'Required.'
			})
			.min(2, 'Symbol must be at least 2 characters')
			.max(6, 'Symbol must not be longer than 6 characters'),
		communication_emails: z.boolean().default(false).optional(),
		social_emails: z.boolean().default(false).optional(),
		marketing_emails: z.boolean().default(false).optional(),
		security_emails: z.boolean(),
		// Hack: https://github.com/colinhacks/zod/issues/2280
		language: z.enum(Object.keys(languages) as [Language, ...Language[]])
	});

	export type TokenFormSchema = typeof tokenFormSchema;
</script>

<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { cn } from '$lib/utils';
	import * as Form from '$lib/components/ui/form';

	// export let data: SuperValidated<TokenFormSchema>;
		export let data;
</script>

<Form.Root
	method="POST"
	class="space-y-8"
	let:config
	schema={tokenFormSchema}
	form={data.form}
	debug={true}
>
	<Form.Item>
		<Form.Field name="name" {config}>
			<Form.Label>Name</Form.Label>
			<Form.Input placeholder="Your name" />
			<Form.Description>
				This is the name that will be displayed on your profile and in emails.
			</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field name="symbol" {config}>
			<Form.Label>Symbol</Form.Label>
			<Form.Input placeholder="Token symbol (ex: ETH)" />
			<Form.Description>This is the symbol that will be displayed</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="language" let:attrs>
			{@const { value } = attrs.input}
			<Form.Label>Language</Form.Label>
			<Form.Select selected={{ value, label: languages[value] }}>
				<Form.SelectTrigger
					placeholder="Select language"
					class={cn('w-[200px] justify-between', !attrs.input.value && 'text-muted-foreground')}
				/>
				<Form.SelectContent class="overflow-y-auto h-52">
					{#each Object.entries(languages) as [value, lang]}
						<Form.SelectItem {value}>
							{lang}
						</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Description>This is the language that will be used in the dashboard.</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<div>
		<h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
		<div class="space-y-4">
			<Form.Field {config} name="communication_emails">
				<Form.Item class="flex flex-row items-center justify-between p-4 border rounded-lg">
					<div class="space-y-0.5">
						<Form.Label class="text-base">Mintable</Form.Label>
						<Form.Description>Receive emails about your account activity.</Form.Description>
					</div>
					<Form.Switch />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="marketing_emails">
				<Form.Item class="flex flex-row items-center justify-between p-4 border rounded-lg">
					<div class="space-y-0.5">
						<Form.Label class="text-base">Burnable</Form.Label>
						<Form.Description>
							Receive emails about new products, features, and more.
						</Form.Description>
					</div>
					<Form.Switch />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="social_emails">
				<Form.Item class="flex flex-row items-center justify-between p-4 border rounded-lg">
					<div class="space-y-0.5">
						<Form.Label class="text-base">Pausable</Form.Label>
						<Form.Description>
							Receive emails for friend requests, follows, and more.
						</Form.Description>
					</div>
					<Form.Switch />
				</Form.Item>
			</Form.Field>
		</div>
	</div>
	<Form.Button>Update account</Form.Button>
</Form.Root>
