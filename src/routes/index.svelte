<script>
	import LeftSide from '../components/left.svelte';
	import RightSide from '../components/right.svelte';
	import Hero from '../components/hero.svelte';
	import About from '../components/about.svelte';
	import Job from '../components/job.svelte';
	import Nav from '../components/nav.svelte';
	import Projects from '../components/projects.svelte';
	import AllProject from '../components/allProject.svelte';
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';

	let active = false;

	const handlActive = () => {
		active = !active;
	};
</script>

<Nav {handlActive} {active} />

<div class={active ? 'blur' : ''}>
	<LeftSide />
	<RightSide />
	<main class="mx-auto w-full fill-width">
		<Hero />
		<About />
		<Job />
		<Projects />
		<AllProject />
	</main>
	<Contact />
	<Footer />
</div>

<style>
	main.fill-width {
		padding: 0 150px;
		max-width: 1600px;
		margin: 0 auto;
		min-height: 100vh;
		width: 100%;
	}

	.blur {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		filter: blur(6px);
		-webkit-filter: blur(6px);
		transition: var(--transition);
	}

	@media screen and (max-width: 1080px) {
		main.fill-width {
			padding: 0 100px;
		}
	}

	@media screen and (max-width: 768px) {
		main.fill-width {
			padding: 0 50px;
		}
	}
</style>
