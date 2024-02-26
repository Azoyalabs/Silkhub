<script lang="ts">
	import { BoomBox } from 'lucide-svelte';

	let heroFeatures = [
		{
			icon: BoomBox,
			title: 'Sequence timing.',
			content: 'Change the speaker’s timing by clicking and dragging the clips.'
		},
		{
			icon: BoomBox,
			title: 'Sequence timing.',
			content: 'Change the speaker’s timing by clicking and dragging the clips.'
		},
		{
			icon: BoomBox,
			title: 'Sequence timing.',
			content: 'Change the speaker’s timing by clicking and dragging the clips.'
		},
		{
			icon: BoomBox,
			title: 'Sequence timing.',
			content: 'Change the speaker’s timing by clicking and dragging the clips.'
		}
	];

	let useCases = [
		{
			title: 'Classic Token',
			content:
				"Whether you're a content creator or a short story writer, our AI voice generator lets you design captivating audio experiences.",
			tagline: 'Stories with emotion',
			subline: 'Bring fictional characters to life'
		},
		{
			title: 'Mint & Burn',
			content:
				"Whether you're a content creator or a short story writer, our AI voice generator lets you design captivating audio experiences.",
			tagline: 'tagline',
			subline: 'Bring fictional characters to life'
		},
		{
			title: 'ERC1363 - Payable',
			content:
				"Whether you're a content creator or a short story writer, our AI voice generator lets you design captivating audio experiences.",
			tagline: 'tagline',
			subline: 'Bring fictional characters to life'
		},
		{
			title: 'Pausable',
			content:
				"Whether you're a content creator or a short story writer, our AI voice generator lets you design captivating audio experiences.",
			tagline: 'tagline',
			subline: 'Bring fictional characters to life'
		}
	];
</script>

<div class="mx-auto mb-12 max-w-7xl">
	<div class="pb-6 mx-auto md:pb-12">
		<h2 class="block font-sans text-5xl font-bold">
			Launch Your <span class="text-primary">Token</span> with Silkhub
		</h2>
		<p class="block mt-6 font-serif text-xl font-normal text-muted-foreground">
			Create new and unique synthetic voices in minutes using advanced Generative AI technology.
			Create lifelike voices to use in videos, podcasts, audiobooks, and more.
		</p>
	</div>
	<div
		class="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-600 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16 xl:grid-cols-4"
	>
		{#each heroFeatures as feature}
			<div class="relative pl-9">
				<h3 class="block font-serif text-lg font-semibold text-gray-900 dark:text-gray-100">
					<svelte:component this={feature.icon} class="absolute w-5 h-5 left-1 top-1"
					></svelte:component>

					{feature.title}
				</h3>
				<p class="font-serif text-lg font-normal text-muted-foreground">
					{feature.content}
				</p>
			</div>
		{/each}
	</div>
</div>
<div class="pt-32 pb-24 content sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-52">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 sm:text-left md:mb-16 lg:mb-20">
			<h2 class="block mb-6 font-sans text-5xl font-bold">
				Natural Text to Speech &amp; AI Voice Generator
			</h2>
			<span class="block font-serif text-xl font-normal text-muted-foreground"
				>Let your content go beyond text with our realistic AI voices. Generate high-quality spoken
				audio in any voice, style, and language. Our AI voice generator is powered by an AI model
				that renders human intonation and inflections with unrivaled fidelity, adjusting the
				delivery based on context.</span
			>
		</div>
		<div class="max-w-lg sm:mx-auto md:max-w-none">
			<div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
				{#each useCases as useCase}
					<div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
						<div class="flex flex-col justify-between sm:min-w-0 sm:flex-1">
							<div>
								<a href="/use-cases/videos"
									><h3 class="block mb-4 font-sans text-2xl font-bold">{useCase.title}</h3></a
								>
								<p class="block w-full font-serif text-base font-normal text-gray-500">
									{useCase.content}
								</p>
							</div>
							<div class="flex items-center mt-4 space-x-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									class="w-16 h-16 cursor-pointer hover:text-muted-foreground"
									><path
										fill-rule="evenodd"
										d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
										clip-rule="evenodd"
									></path></svg
								>
								<div class="flex flex-col space-y-2">
									<span
										class="block font-serif text-sm font-normal leading-none text-muted-foreground"
										>{useCase.subline}</span
									>
									<h3
										class="block font-sans text-base font-semibold leading-none text-gray-900 md:text-gray-100"
									>
										{useCase.tagline}
									</h3>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
