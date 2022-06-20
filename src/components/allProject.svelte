<script lang="ts">
	import { onMount } from 'svelte';

	import '../assets/css/allProject.css';
	import ProjectCard from './projectCard.svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	let projects: [] = [];
	let showAll = false;

	onMount(async () => {
		await fetch('https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/projectDB')
			.then((res) => res.json())
			.then((data) => {
				projects = data;
			});
	});

	let isInView: boolean;
	let scrollDirection: ScrollDirection;
	let options: Options = {
		rootMargin: '-200px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<section class="all_projects_wrapper" use:inview={options} on:change={handleChange}>
	{#if isInView}
		<h2
			class={scrollDirection.vertical === 'up' ? 'fade-enter-done-botton' : 'fade-enter-proccess'}
			style="animation-delay:0ms; animation-duration: 0.4s;"
		>
			Other Noteworthy Projects
		</h2>
		<a
			class="inline-link archive-link {scrollDirection.vertical === 'up'
				? 'fade-enter-done-botton'
				: 'fade-enter-proccess'}"
			style="animation-delay:0ms; animation-duration: 0.4s;"
			href="/archive">view the archive</a
		>

		<ul class="projects-grid">
			{#if projects.length > 0}
				{#each showAll ? projects : projects.slice(0, 6) as project, index}
					<div
						class="invisible {scrollDirection.vertical === 'up'
							? 'fade-enter-done-botton'
							: 'fade-enter-proccess'}"
						style="animation-delay:{(index + 1) * 100}ms; animation-duration: 0.4s;"
					>
						<ProjectCard {project} {index} {scrollDirection} />
					</div>
				{/each}
			{/if}
		</ul>

		<button class="more-button" on:click={() => (showAll = !showAll)}
			>Show {!showAll ? 'More' : 'Less'}</button
		>
	{/if}
</section>

<style>
</style>
