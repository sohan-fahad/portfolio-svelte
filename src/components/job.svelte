<script>
	let state = 'upstream';
</script>

<section
	id="jobs"
	class="job_wrapper"
	style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;"
>
	<h2 class="numbered-heading">Where I’ve Worked</h2>
	<div class="inner">
		<div class="job_tablist">
			<button
				class="option {state === 'upstream' ? 'active' : ''}"
				on:click={() => (state = 'upstream')}
			>
				<span>Upstatement</span></button
			>
			<button
				class="option {state === 'scount' ? 'active' : ''}"
				on:click={() => (state = 'scount')}
			>
				<span>Scount</span></button
			>
			<button class="option {state === 'apple' ? 'active' : ''}" on:click={() => (state = 'apple')}>
				<span>Apple</span></button
			>
			<button class="option {state === 'scout' ? 'active' : ''}" on:click={() => (state = 'scout')}>
				<span>Scout</span></button
			>
			<button
				class="option {state === 'starry' ? 'active' : ''}"
				on:click={() => (state = 'starry')}
			>
				<span>Starry</span></button
			>
			<button
				class="option {state === 'mullenlowe' ? 'active' : ''}"
				on:click={() => (state = 'mullenlowe')}
			>
				<span>MullenLowe</span></button
			>
		</div>

		<div class="job_details_wrapper">
			{#if state === 'upstream'}
				<div class="job_details">
					<h3>
						<span>Engineer</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://www.upstatement.com/"
								class="inline-link"
								rel="noopener noreferrer"
								target="_blank">Upstatement</a
							></span
						>
					</h3>
					<p class="range">May 2018 - Present</p>
					<div>
						<ul>
							<li>
								Write modern, performant, maintainable code for a diverse array of client and
								internal projects
							</li>
							<li>
								Work with a variety of different languages, platforms, frameworks, and content
								management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,
								Prismic, and Netlify
							</li>
							<li>
								Communicate with multi-disciplinary teams of engineers, designers, producers, and
								clients on a daily basis
							</li>
						</ul>
					</div>
				</div>
			{/if}

			{#if state === 'scount'}
				<div class="job_details">
					<h3>
						<span>Studio Developer</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://web.northeastern.edu/scout/"
								class="inline-link"
								target="_blank">Scout</a
							></span
						>
					</h3>
					<p class="range">January - April 2018</p>
					<div>
						<ul>
							<li>
								Worked with a team of three designers to build a marketing website and e-commerce
								platform for <a
									href="https://blistabloc.com"
									target="_blank"
									rel="noopener noreferrer">blistabloc</a
								>, an ambitious startup originating from Northeastern
							</li>
							<li>
								Helped solidify a brand direction for blistabloc that spans both packaging and web
							</li>
							<li>Interfaced with clients on a weekly basis, providing technological expertise</li>
						</ul>
					</div>
				</div>
			{/if}

			{#if state === 'apple'}
				<div class="job_details">
					<h3>
						<span>UI Engineer Co-op</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://www.apple.com/music/"
								class="inline-link"
								rel="noopener noreferrer"
								target="_blank">Apple</a
							></span
						>
					</h3>
					<p class="range">July - December 2017</p>
					<div>
						<ul>
							<li>
								Developed and shipped highly interactive web applications for Apple Music using
								Ember.js
							</li>
							<li>
								Built and shipped the Apple Music Extension within Facebook Messenger leveraging
								third-party and internal APIs
							</li>
							<li>
								Architected and implemented the front-end of Apple Music's embeddable web player
								widget, which lets users log in and listen to full songs in the browser
							</li>
							<li>
								Contributed extensively to MusicKit.js, a JavaScript framework that allows
								developers to add an Apple Music player to their web apps
							</li>
						</ul>
					</div>
				</div>
			{/if}

			{#if state === 'scout'}
				<div class="job_details">
					<h3>
						<span>Studio Developer</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://web.northeastern.edu/scout/"
								class="inline-link"
								rel="noopener noreferrer"
								target="_blank">Scout</a
							></span
						>
					</h3>
					<p class="range">January - June 2017</p>
					<div>
						<ul>
							<li>
								Collaborated with a small team of student designers to spearhead a new brand and
								design system for Scout’s inaugural student-led design conference at Northeastern
							</li>
							<li>
								Worked closely with designers and management team to develop, document, and manage
								the conference’s marketing website using Jekyll, Sass, and JavaScript
							</li>
						</ul>
					</div>
				</div>
			{/if}

			{#if state === 'starry'}
				<div class="job_details">
					<h3>
						<span>Software Engineer Co-op</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://starry.com/"
								class="inline-link"
								rel="noopener noreferrer"
								target="_blank">Starry</a
							></span
						>
					</h3>
					<p class="range">July - December 2016</p>
					<div>
						<ul>
							<li>
								Engineered and maintained major features of Starry's customer-facing web app using
								ES6, Handlebars, Backbone, Marionette and CSS
							</li>
							<li>
								Proposed and implemented scalable solutions to issues identified with cloud services
								and applications responsible for communicating with Starry Station
							</li>
							<li>
								Interfaced with user experience designers and other developers to ensure thoughtful
								and coherent user experiences across Starry’s iOS and Android mobile apps
							</li>
						</ul>
					</div>
				</div>
			{/if}

			{#if state === 'mullenlowe'}
				<div class="job_details">
					<h3>
						<span>Creative Technologist Co-op</span><span class="company"
							>&nbsp;@&nbsp;<a
								href="https://us.mullenlowe.com/"
								class="inline-link"
								rel="noopener noreferrer"
								target="_blank">MullenLowe</a
							></span
						>
					</h3>
					<p class="range">July - December 2015</p>
					<div>
						<ul>
							<li>
								Developed and maintained code for in-house and client websites primarily using HTML,
								CSS, Sass, JavaScript, and jQuery
							</li>
							<li>
								Manually tested sites in various browsers and mobile devices to ensure cross-browser
								compatibility and responsiveness
							</li>
							<li>
								Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and
								more
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.job_wrapper {
		visibility: visible;
		opacity: 1;
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
			transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
		max-width: 700px;
	}

	.job_wrapper .numbered-heading {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
		margin: 10px 0px 40px;
		width: 100%;
		font-size: clamp(26px, 5vw, var(--fz-heading));
		white-space: nowrap;
		font-family: 'Calibre', sans-serif;
		font-weight: 500;
	}

	.job_wrapper .numbered-heading::before {
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
	.job_wrapper .numbered-heading::after {
		content: '';
		display: block;
		position: relative;
		top: -5px;
		width: 300px;
		height: 1px;
		margin-left: 20px;
		background-color: var(--lightest-navy);
	}

	.job_wrapper .inner {
		display: flex;
	}

	.job_wrapper .inner {
		min-height: 340px;
	}

	.job_wrapper .inner .job_tablist {
		position: relative;
		z-index: 3;
		width: max-content;
		padding: 0px;
		margin: 0px;
		list-style: none;
	}

	.job_wrapper .inner .job_tablist .option {
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		width: 100%;
		height: var(--tab-height);
		padding: 0px 20px 2px;
		border-left: 2px solid var(--lightest-navy);
		background-color: transparent;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
		text-align: left;
		white-space: nowrap;
	}

	.job_wrapper .inner .job_tablist .option:hover {
		background-color: var(--light-navy);
		border-left: 2px solid var(--green);
	}

	.job_wrapper .inner .job_tablist .active {
		border-left: 2px solid var(--green);
	}

	.job_details_wrapper {
		position: relative;
		width: 100%;
		margin-left: 20px;
	}

	.job_details_wrapper .job_details {
		width: 100%;
		height: auto;
		padding: 10px 5px;
	}

	.job_details_wrapper .job_details h3 {
		margin-bottom: 2px;
		font-size: var(--fz-xxl);
		font-weight: 500;
		line-height: 1.3;
	}
	.job_details_wrapper .job_details .company {
		color: var(--green);
		font-size: 22px;
	}
	a.inline-link {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		color: var(--green);
	}

	.company a::after {
		content: '';
		display: block;
		width: 0px;
		height: 1px;
		position: relative;
		bottom: 0.37em;
		background-color: var(--green);
		transition: var(--transition);
		opacity: 0.5;
	}

	a.inline-link:hover,
	a.inline-link:focus,
	a.inline-link:active {
		color: var(--green);
		outline: 0px;
	}

	.job_details .range {
		margin-bottom: 25px;
		color: var(--light-slate);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
	}

	.job_details ul {
		padding: 0px;
		margin: 0px;
		list-style: none;
		font-size: var(--fz-lg);
		color: var(--slate);
		font-family: 'Calibre', sans-serif;
		line-height: 23px;
	}

	.job_details ul li {
		position: relative;
		padding-left: 30px;
		margin-bottom: 10px;
	}

	.job_details ul li::before {
		content: '▹';
		position: absolute;
		left: 0px;
		color: var(--green);
	}

	@media screen and (max-width: 768px) {
		.job_wrapper .inner .job_tablist .option {
			padding: 0px 15px 2px !important;
		}
	}

	@media screen and (max-width: 600px) {
		.job_wrapper .inner {
			display: block;
		}
		.job_wrapper .inner .job_tablist {
			display: flex;
			overflow-x: auto;
			width: calc(100% + 100px);
			padding-left: 50px;
			margin-left: -50px;
			margin-bottom: 30px;
		}

		.job_wrapper .inner .job_tablist .option {
			display: flex;
			-webkit-box-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			align-items: center;
			min-width: 120px;
			padding: 0px 15px;
			border-left: none;
			border-bottom: 2px solid var(--lightest-navy);
			text-align: center;
		}

		.job_wrapper .inner .job_tablist .option:hover {
			border: none;
		}

		.job_wrapper .inner .job_tablist .active {
			border-left: none;
			border-bottom: 2px solid var(--green);
		}
	}
</style>
