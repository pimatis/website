<script>
    import { fade, fly } from 'svelte/transition';

    const stats = [
        { number: "5+", label: "Design Assets" },
        { number: "2+", label: "Open Source Projects" },
        { number: "24/7", label: "Community Support" }
    ];

    const values = [
        {
            icon: "ri-store-3-fill",
            title: "Design Marketplace",
            description: "Premium UI templates, logos, and design resources ready for your next project."
        },
        {
            icon: "ri-code-box-fill",
            title: "Open Source",
            description: "Building and sharing powerful software tools with the developer community."
        },
        {
            icon: "ri-team-fill",
            title: "Community Driven",
            description: "Active community of designers and developers working together to innovate."
        }
    ];
</script>

<section class="py-12 sm:py-16 lg:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div class="space-y-6 sm:space-y-8" in:fade={{ duration: 800 }}>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block">
                    Empowering Digital Creation
                    <span class="absolute -bottom-2 left-0 w-full h-2 bg-red-100 opacity-50 -z-10"></span>
                </h2>
                <p class="text-base sm:text-lg opacity-70">We're a team of passionate creators building both premium design resources and open-source software solutions. Our mission is to empower developers and designers with the tools they need to build amazing digital experiences.</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                    {#each stats as stat}
                        <div class="text-center p-4 sm:p-6 bg-black/[1%] border border-black/5 hover:bg-black/[2%] backdrop-blur-sm rounded-xl">
                            <h3 class="text-2xl sm:text-3xl font-bold text-black mb-2">{stat.number}</h3>
                            <p class="text-sm opacity-70">{stat.label}</p>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6">
                {#each values as value, i}
                    <div class="bg-black/[1%] border border-black/5 hover:bg-black/[2%] backdrop-blur-sm rounded-xl p-6 transition-all duration-300" in:fly={{ x: 20, duration: 600, delay: 200 + (i * 100) }}>
                        <div class="flex items-center gap-4">
                            <div class="bg-white/10 p-3 rounded-lg shrink-0">
                                <i class="{value.icon} text-xl sm:text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                                <p class="text-sm opacity-70">{value.description}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>