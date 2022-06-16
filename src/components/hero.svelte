<script>
</script>

<section class="hero-wrapper">
	<div class="fadeup-enter-done"><h1>Hi, my name is</h1></div>
	<div class="fadeup-enter-done">
		<h2 class="big-heading-1">Brittany Chiang.</h2>
	</div>
	<div class="fadeup-enter-done">
		<h3 class="big-heading-2">I build things for the web.</h3>
	</div>
	<div class="fadeup-enter-done">
		<p>
			I’m a software engineer specializing in building (and occasionally designing) exceptional
			digital experiences. Currently, I’m focused on building accessible, human-centered products at
			<a href="#" target="_blank" rel="noreferrer">Upstatement</a>.
		</p>
	</div>
	<div class="fadeup-enter-done" style="transition-delay: 500ms;">
		<a class="email-link" href="#" target="_blank" rel="noreferrer">Check out my course!</a>
	</div>
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

	.fadeup-enter-done {
		transition-delay: 200ms;
	}

	.hero-wrapper h1 {
		margin: 0px 0px 30px 4px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;
	}

	.hero-wrapper .big-heading-1 {
		margin: 0px;
		font-weight: 500;
		font-size: clamp(40px, 8vw, 80px);
		font-family: 'Calibre', sans-serif;
	}

	.hero-wrapper .big-heading-2 {
		margin-top: 10px;
		color: var(--slate);
		line-height: 0.9;
		font-weight: 500;
		font-size: clamp(40px, 8vw, 80px);
		font-family: 'Calibre', sans-serif;
	}
	.hero-wrapper p {
		margin: 20px 0px 0px;
		max-width: 540px;
		color: var(--slate);
		font-size: 20px;
		line-height: 1.3;
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
	}

	.hero-wrapper .email-link:hover,
	.hero-wrapper .email-link:focus,
	.hero-wrapper .email-link:active {
		background-color: var(--green-tint);
		outline: none;
	}
</style>
