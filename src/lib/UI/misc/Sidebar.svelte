<script lang="ts">
	import { clickOutside } from "$lib/utils";

	export let enabled = false
	export let toggleButton: EventTarget = null

	$: toggleButton?.addEventListener('click', e => {
		enabled = !enabled
	})
</script>

<div class='absolute bg-secondary h-full w-72 flex flex-col text-primary
-translate-x-full md:translate-x-0 {enabled ? 'translate-x-0' : ''} h-full transition'
use:clickOutside={{ callback: e => enabled = false, ignore: toggleButton }}>
	<slot name='menu'/>
</div>

<main class='translate-x-0 md:ml-72 {enabled ? 'translate-x-72' : ''} transition w-full'>
	<slot/>
</main>