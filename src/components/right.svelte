<script>
</script>

<div class="right-side-wrapper">
	<div class="email-wrapper">
		<a href="mailto:brittany.chiang@gmail.com">brittany.chiang@gmail.com</a>
	</div>
</div>

<style>
	.right-side-wrapper {
		width: 40px;
		position: fixed;
		bottom: 0px;
		left: auto;
		right: 40px;
		z-index: 10;
		color: var(--light-slate);
	}

	.email-wrapper {
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
	}

	.email-wrapper a {
		margin: 20px auto;
		padding: 10px;
		font-family: var(--font-mono);
		font-size: var(--fz-xxs);
		line-height: var(--fz-lg);
		letter-spacing: 0.1em;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}

	.email-wrapper :focus:not(:focus-visible) {
		outline: none;
		outline-offset: 0px;
	}

	.email-wrapper a:hover,
	.email-wrapper a:focus {
		transform: translateY(-3px);
		color: var(--green);
	}

	.email-wrapper::after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: var(--light-slate);
	}

	@media screen and (max-width: 1080px) {
		.right-side-wrapper {
			right: 20px;
			left: auto;
		}
	}

	@media screen and (max-width: 768px) {
		.right-side-wrapper {
			display: none;
		}
	}
</style>
