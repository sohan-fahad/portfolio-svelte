<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';
	let isInView: boolean;
	let scrollDirection: any;
	const options: Options = {
		rootMargin: '-20px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
		console.log(isInView);
	};
</script>

<div class="left-side-wrapper" use:inview={options} on:change={handleChange}>
	<!-- {#if isInView} -->
	<ul class:social_icon_wrapper={scrollDirection === 'down'}>
		<li>
			<a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noreferrer"
				><svg
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
				></a
			>
		</li>
		<li>
			<a
				href="https://www.instagram.com/bchiang7"
				aria-label="Instagram"
				target="_blank"
				rel="noreferrer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-instagram"
					><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
						d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
					/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
				></a
			>
		</li>
		<li>
			<a href="https://twitter.com/bchiang7" aria-label="Twitter" target="_blank" rel="noreferrer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-twitter"
					><title>Twitter</title><path
						d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
					/></svg
				></a
			>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/bchiang7"
				aria-label="Linkedin"
				target="_blank"
				rel="noreferrer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-linkedin"
					><title>LinkedIn</title><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
				></a
			>
		</li>
		<li>
			<a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noreferrer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-codepen"
					><title>CodePen</title><polygon
						points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
					/><line x1="12" y1="22" x2="12" y2="15.5" /><polyline
						points="22 8.5 12 15.5 2 8.5"
					/><polyline points="2 15.5 12 8.5 22 15.5" /><line x1="12" y1="2" x2="12" y2="8.5" /></svg
				>
			</a>
		</li>
	</ul>
	<!-- {/if} -->
</div>

<style>
	.left-side-wrapper {
		width: 40px;
		position: fixed;
		bottom: 0px;
		left: 40px;
		right: auto;
		z-index: 10;
		color: var(--light-slate);
	}

	.social_icon_wrapper {
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		margin: 0px;
		padding: 0px;
		list-style: none;
		animation: fadedown-enter 1.2s forwards ease-out;
	}

	.social_icon_wrapper a {
		padding: 10px;
	}
	.social_icon_wrapper a:hover,
	.social_icon_wrapper a:focus {
		transform: translateY(-3px);
		color: var(--green);
	}

	.social_icon_wrapper a svg {
		width: 20px;
		height: 20px;
		fill: none;
	}

	.social_icon_wrapper a svg:focus:not(:focus-visible) {
		outline: none;
		outline-offset: 0px;
	}

	.social_icon_wrapper::after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: var(--light-slate);
	}

	@keyframes fadedown-enter {
		from {
			transform: translateX(-200px);
		}

		to {
			transform: translateX(0);
		}
	}

	@media screen and (max-width: 1080px) {
		.left-side-wrapper {
			left: 20px;
			right: auto;
		}
	}

	@media screen and (max-width: 768px) {
		.left-side-wrapper {
			display: none;
		}
	}
</style>
