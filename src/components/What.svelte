<script>
    import { fade, fly } from 'svelte/transition';

    const reasons = [
        {
            icon: "ri-download-cloud-fill",
            title: "Premium Designs",
            description: "Access high-quality UI templates, logos, and design assets instantly after purchase."
        },
        {
            icon: "ri-code-box-fill",
            title: "Open Source",
            description: "Contribute to and benefit from our growing collection of open-source software tools."
        },
        {
            icon: "ri-shield-check-fill",
            title: "Quality Assured",
            description: "Thoroughly tested designs and code following modern standards and best practices."
        },
        {
            icon: "ri-git-branch-fill",
            title: "Community Driven",
            description: "Join our active community of developers and designers shaping the future of digital tools."
        },
        {
            icon: "ri-tools-fill",
            title: "Easy Integration",
            description: "Well-documented resources and code that seamlessly integrate into your projects."
        },
        {
            icon: "ri-customer-service-fill",
            title: "Dedicated Support",
            description: "Get help from our team for design assets and technical guidance for open-source projects."
        }
    ];
</script>

<section class="py-12 sm:py-16 lg:py-20 relative">
    <div class="absolute top-10 left-[5%] text-8xl opacity-5 font-serif hidden lg:block">π</div>
    <div class="absolute bottom-20 right-[8%] text-8xl opacity-5 font-serif hidden lg:block">∞</div>
    <div class="absolute top-[35%] right-[12%] text-6xl opacity-5 font-serif hidden lg:block">∑</div>
    <div class="absolute bottom-[30%] left-[15%] text-7xl opacity-5 font-serif hidden lg:block">∫</div>
    <div class="absolute top-[15%] left-[25%] w-16 h-16 border-2 border-black/5 rounded-full opacity-10 hidden lg:block"></div>
    <div class="absolute bottom-[25%] right-[20%] w-20 h-20 border-2 border-black/5 rotate-45 opacity-10 hidden lg:block"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16" in:fade={{ duration: 800, delay: 200 }}>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
                What is Pimatis?
                <span class="absolute -bottom-2 left-0 w-full h-2 bg-blue-100 opacity-50 -z-10"></span>
            </h2>
            <p class="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">Your one-stop destination for premium design resources and powerful open-source tools.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each reasons as reason, i}
                <div class="bg-white border border-black/5 hover:bg-black/[2%] rounded-xl p-6 transition-all duration-300 relative group card-hover z-10 shadow-sm" in:fly={{ y: 20, duration: 600, delay: 300 + (i * 100) }}>
                    <div class="absolute top-0 right-0 h-20 w-20 bg-black/[2%] rounded-bl-3xl rounded-tr-xl -z-10"></div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg sm:text-xl font-semibold text-black">{reason.title}</h3>
                        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors duration-300">
                            <i class="{reason.icon} text-xl sm:text-2xl text-black/70 group-hover:text-black transition-colors duration-300"></i>
                        </div>
                    </div>
                    <p class="text-sm sm:text-base opacity-70">{reason.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>