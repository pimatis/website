<script>
    import { fade, fly } from 'svelte/transition';
</script>

<section class="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="pattern-background"></div>
    <div class="pattern-fade-left"></div>
    <div class="pattern-fade-right"></div>
    <div class="pattern-fade-top"></div>
    <div class="pattern-fade-bottom"></div>
    
    <div class="max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20 flex flex-col items-center">
        <div class="flex flex-col items-center text-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div in:fade={{ duration: 1000, delay: 200 }} class="w-full">
                <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                    Design Assets & <br class="hidden sm:block"/>
                    <span class="block mt-2 sm:mt-3">Open Source Software</span>
                </h1>
                <p class="text-base sm:text-lg md:text-xl opacity-70 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
                    Premium design resources for your projects and powerful open-source tools for developers. Building the future of digital solutions together.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button disabled class="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-lg transition-colors duration-300 text-center disabled:opacity-20 disabled:cursor-not-allowed">
                    Browse Designs
                </button>
                <a href="/about" class="w-full sm:w-auto px-6 sm:px-8 py-3 border border-black bg-white rounded-lg transition-colors duration-300 text-center">
                    About Us
                </a>
            </div>
        </div>
    </div>
</section>