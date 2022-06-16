<script lang="typescript">
	export let project: any;
</script>

<li class="project_card">
	<div class="project-inner">
		<header>
			<div class="project-top">
				<div class="folder">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-folder"
						><title>Folder</title><path
							d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
						/></svg
					>
				</div>
				<div class="project-links">
					{#if project?.node?.frontmatter?.github}
						<a href={project?.node?.frontmatter?.github}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github"
								><title>GitHub</title><path
									d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
								/></svg
							>
						</a>
					{/if}
					<a href={project?.node?.frontmatter?.external} class="external" target="_blank"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-external-link"
							><title>External Link</title><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg
						></a
					>
				</div>
			</div>
			<h3 class="project-title">
				<a href={project?.node?.frontmatter?.external} target="_blank"
					>{project?.node?.frontmatter?.title}</a
				>
			</h3>
			<div class="project-description">
				<p>{project?.node?.html}</p>
			</div>
		</header>
		<footer>
			<ul class="project-tech-list">
				{#each project?.node?.frontmatter?.tech as tech}
					<li>{tech}</li>
				{/each}
			</ul>
		</footer>
	</div>
</li>
