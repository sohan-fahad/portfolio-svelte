import type { ObserverEventDetails, Options } from 'svelte-inview';

export default class ScrollInterSection {



    isInView?: boolean;
    scrollDirection?: string;
    elementType?: HTMLElement
    options: Options = {
        // root: document.getElementById("root_wrapper"),
        rootMargin: '-50px',
        unobserveOnEnter: true,
        threshold: [1]
    };


    public handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
        this.isInView = detail.inView;
        console.log(detail)
        this.scrollDirection = detail.scrollDirection.vertical;
    };
}