<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap');

    :global(body) {
        font-family: 'Geist Mono', sans-serif;
        background-color: #fafafa;
        margin: 0;
        padding: 0;
        position: relative;
    }
</style>
