<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	let isInViewHero: boolean;
	let scrollDirection: ScrollDirection;
	let options: Options = {
		rootMargin: '-20px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInViewHero = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<section class="hero-wrapper" use:inview={options} on:change={handleChange}>
	{#if isInViewHero}
		<div>
			<div>
				<h1
					class={scrollDirection.vertical === 'down'
						? 'fade-enter-done-botton'
						: 'fade-enter-proccess'}
					style="animation-delay:800ms; animation-duration: 0.2s;"
				>
					Hi, my name is
				</h1>
			</div>
			<div>
				<h2
					class="big-heading-1 {scrollDirection.vertical === 'down'
						? 'fade-enter-done-botton'
						: 'fade-enter-proccess'}"
					style="animation-delay: 1000ms; animation-duration: 0.2s;"
				>
					Brittany Chiang.
				</h2>
			</div>
			<div>
				<h3
					class="big-heading-2 {scrollDirection.vertical === 'down'
						? 'fade-enter-done-botton'
						: 'fade-enter-proccess'}"
					style="animation-delay: 1100ms; animation-duration: 0.2s;"
				>
					I build things for the web.
				</h3>
			</div>
			<div>
				<p
					class={scrollDirection.vertical === 'down'
						? 'fade-enter-done-botton'
						: 'fade-enter-proccess'}
					style="animation-delay: 1150ms; animation-duration: 0.2s;"
				>
					I’m a software engineer specializing in building (and occasionally designing) exceptional
					digital experiences. Currently, I’m focused on building accessible, human-centered
					products at
					<a href="#about" target="_blank" rel="noreferrer">Upstatement</a>.
				</p>
			</div>
			<div>
				<a
					class="email-link {scrollDirection.vertical === 'down'
						? 'fade-enter-done-botton'
						: 'fade-enter-proccess'}"
					style="animation-delay: 1120ms; animation-duration: 0.2s;"
					href="#about"
					target="_blank"
					rel="noreferrer">Check out my course!</a
				>
			</div>
		</div>
	{/if}
</section>

<style>
	.hero-wrapper {
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		flex-direction: column;
		align-items: flex-start;
		min-height: 100vh;
		padding-top: 70px;
		margin-top: 70px;
	}

	.fadeup-enter {
		animation: fadedown-enter 0.5s forwards ease-out;
	}

	.fadeup-enter1 {
		animation: fadedown-enter1 1.2s forwards ease-in;
	}
	.hero-wrapper h1 {
		margin: 0px 0px 30px 4px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;
		visibility: hidden;
		transform: translateY(50px);
	}

	.hero-wrapper .big-heading-1 {
		margin: 0px;
		font-weight: 500;
		font-size: clamp(40px, 8vw, 80px);
		font-family: 'Calibre', sans-serif;
		visibility: hidden;
		transform: translateY(50px);
	}

	.hero-wrapper .big-heading-2 {
		margin-top: 10px;
		color: var(--slate);
		line-height: 0.9;
		font-weight: 500;
		font-size: clamp(40px, 8vw, 80px);
		font-family: 'Calibre', sans-serif;
		visibility: hidden;
		transform: translateY(50px);
	}
	.hero-wrapper p {
		margin: 20px 0px 0px;
		max-width: 540px;
		color: var(--slate);
		font-size: 20px;
		line-height: 1.3;
		visibility: hidden;
		transform: translateY(50px);
	}

	.hero-wrapper p > a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		color: var(--green);
	}

	.hero-wrapper .email-link {
		color: var(--green);
		background-color: transparent;
		border: 1px solid var(--green);
		border-radius: var(--border-radius);
		padding: 1.25rem 1.75rem;
		font-size: var(--fz-sm);
		font-family: var(--font-mono);
		line-height: 1;
		text-decoration: none;
		cursor: pointer;
		transition: var(--transition);
		margin-top: 50px;
		visibility: hidden;
		transform: translateY(50px);
		width: 240px;
		text-align: center;
	}

	.hero-wrapper .email-link:hover,
	.hero-wrapper .email-link:focus,
	.hero-wrapper .email-link:active {
		background-color: var(--green-tint);
		outline: none;
	}

	@keyframes fadedown-enter {
		from {
			transform: translateY(100px);
		}

		to {
			transform: translateY(0);
		}
	}

	@keyframes fadedown-enter1 {
		from {
			transform: translateY(100px);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
