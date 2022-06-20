<script lang="ts">
	import '../assets/css/nav.css';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	export let active: boolean;
	let scrollValue: number = 0;
	let prevScrollValue: number = 0;

	$: if (scrollValue > 60 && scrollValue > prevScrollValue) {
		prevScrollValue = scrollValue;
	}

	export let handlActive: any;

	let isInViewNav: boolean;
	let scrollDirection: ScrollDirection;
	let options: Options = {
		rootMargin: '-20px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInViewNav = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<svelte:window bind:scrollY={scrollValue} />

<header
	class={scrollValue < 60
		? 'navbar'
		: scrollValue < prevScrollValue
		? 'navbar_scroll_top'
		: 'navbar_scroll_down'}
	use:inview={options}
	on:change={handleChange}
>
	<nav class="navbar_wrapper">
		<div class="navbar_logo" tabindex="-1">
			<a href="/" aria-label="home"
				><svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
					<title>Logo</title>
					<g transform="translate(-8.000000, -2.000000)"
						><g transform="translate(11.000000, 5.000000)"
							><path
								d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
								fill="currentColor"
							/>
							<polygon
								id="Shape"
								stroke="currentColor"
								stroke-width="5"
								stroke-linecap="round"
								stroke-linejoin="round"
								points="39 0 0 22 0 67 39 90 78 68 78 23"
							/>
						</g></g
					></svg
				>
			</a>
		</div>
		{#if isInViewNav && scrollDirection.vertical === 'down'}
			<div class="navbar_menu_wr">
				<ol>
					<li
						class={scrollDirection.vertical === 'down'
							? 'fade-enter-done-top'
							: 'fade-enter-proccess'}
						style="animation-delay: 0;"
					>
						<a href="/#about">About</a>
					</li>
					<li
						class={scrollDirection.vertical === 'down'
							? 'fade-enter-done-top'
							: 'fade-enter-proccess'}
						style="animation-delay: 100ms;"
					>
						<a href="/#jobs">Experience</a>
					</li>
					<li
						class={scrollDirection.vertical === 'down'
							? 'fade-enter-done-top'
							: 'fade-enter-proccess'}
						style="animation-delay: 200ms;"
					>
						<a href="/#projects">Work</a>
					</li>
					<li
						class={scrollDirection.vertical === 'down'
							? 'fade-enter-done-top'
							: 'fade-enter-proccess'}
						style="animation-delay: 300ms;"
					>
						<a href="/#contact">Contact</a>
					</li>
				</ol>

				<div
					class="nevbar_resume_wrpper {scrollDirection.vertical === 'down'
						? 'fade-enter-done-top'
						: 'fade-enter-proccess'}"
					style="animation-delay: 400ms;"
				>
					<a class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"
						>Resume</a
					>
				</div>
			</div>
		{/if}
		<div class="navbar_menu_responsive">
			<div>
				<button
					class={active ? 'navbar_responsive_btn_active' : 'navbar_responsive_btn'}
					on:click={handlActive}
				>
					<div class="ham-box"><div class="ham-box-inner" /></div>
				</button>

				<aside
					tabindex="-1"
					class={active ? 'navbar_responsive_menu_show' : 'navbar_responsive_menu'}
				>
					<nav>
						<ol>
							<li><a href="/#about">About</a></li>
							<li><a href="/#jobs">Experience</a></li>
							<li><a href="/#projects">Work</a></li>
							<li><a href="/#contact">Contact</a></li>
						</ol>
						<a href="/resume.pdf" class="resume-link">Resume</a>
					</nav>
				</aside>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
