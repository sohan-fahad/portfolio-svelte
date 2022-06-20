<script context="module" lang="ts">
	import type { ObserverEventDetails, Options, ScrollDirection } from 'svelte-inview';

	export let isInView: boolean;
	export let scrollDirection: ScrollDirection;
	export let options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true,
		threshold: [1]
	};

	export const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		console.log(isInView);
		scrollDirection = detail.scrollDirection;
	};
</script>
