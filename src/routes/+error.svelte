<script>
    import { fade } from 'svelte/transition';
</script>

<div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8" in:fade={{ duration: 800 }}>
    <div class="text-center">
        <h1 class="text-8xl sm:text-9xl font-bold mb-6">404</h1>
        <p class="text-xl sm:text-2xl opacity-70 mb-8">Oops! Page not found</p>
        <a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg transition-colors duration-300">
            <i class="ri-arrow-left-fill"></i>
            Back to Home
        </a>
    </div>
</div>