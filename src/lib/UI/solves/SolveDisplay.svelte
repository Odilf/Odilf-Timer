<script lang="ts">
	import { Penalty, type Solve } from "$lib/data/architecture";
	import TimeDisplay from "./TimeDisplay.svelte";

	export let solve: Solve
</script>

{#if solve.penalty === Penalty.None}
	<TimeDisplay time={solve.time}/>
{:else if solve.penalty === Penalty.Plus2}
	<TimeDisplay time={solve.time +2}/>+
{:else}
	<span class='text-red-600'>
		DNF (<TimeDisplay time={solve.time}/>)
	</span>
{/if}

