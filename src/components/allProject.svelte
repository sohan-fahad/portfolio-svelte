<script lang="ts">
	import { onMount } from 'svelte';

	import '../assets/css/allProject.css';
	import ProjectCard from './projectCard.svelte';

	let projects: [] = [];
	let showAll = false;

	onMount(async () => {
		await fetch('https://raw.githubusercontent.com/sohan-fahad/fakeDB/main/projectDB')
			.then((res) => res.json())
			.then((data) => {
				projects = data;
			});
	});
</script>

<section class="all_projects_wrapper">
	<h2>Other Noteworthy Projects</h2>
	<a class="inline-link archive-link" href="/archive">view the archive</a>

	<ul class="projects-grid">
		{#if projects.length > 0}
			{#each showAll ? projects : projects.slice(0, 6) as project}
				<ProjectCard {project} />
			{/each}
		{/if}
	</ul>

	<button class="more-button" on:click={() => (showAll = !showAll)}
		>Show {!showAll ? 'More' : 'Less'}</button
	>
</section>

<style>
</style>
