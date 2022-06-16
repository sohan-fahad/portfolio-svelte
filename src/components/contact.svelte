<section id="contact" class="contact_wrapper">
	<h2 class="numbered-heading">What’s Next?</h2>
	<h2 class="title">Get In Touch</h2>
	<p>
		Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
		you have a question or just want to say hi, I’ll try my best to get back to you!
	</p>
	<a class="email-link" href="mailto:brittany.chiang@gmail.com" target="_blank">Say Hello</a>
</section>

<style>
	.contact_wrapper {
		visibility: visible;
		opacity: 1;
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
			transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
		max-width: 600px;
		margin: 0px auto 100px;
		text-align: center;
	}

	.contact_wrapper .numbered-heading {
		display: block;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-md);
		font-weight: 400;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		justify-content: center;
		position: relative;
		margin: 10px 0px 20px;
		width: 100%;
		white-space: nowrap;
	}

	.contact_wrapper .numbered-heading::before {
		bottom: 0px;
		font-size: var(--fz-sm);
		position: relative;
		bottom: 4px;
		counter-increment: section 1;
		content: '0' counter(section) '.';
		margin-right: 10px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
		font-weight: 400;
	}

	.contact_wrapper .title {
		font-size: clamp(40px, 5vw, 60px);
		font-family: 'Calibre', sans-serif;
	}

	.contact_wrapper p {
		color: var(--slate);
		font-family: 'Calibre', sans-serif;
		font-size: 20px;
		line-height: 26px;
	}
	.contact_wrapper .email-link {
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

	.contact_wrapper .email-link:hover,
	.contact_wrapper .email-link:focus,
	.contact_wrapper .email-link:active {
		background-color: var(--green-tint);
		outline: none;
	}

	@media screen and (max-width: 768px) {
		.contact_wrapper {
			margin: 0 auto 50px;
		}
	}
</style>
