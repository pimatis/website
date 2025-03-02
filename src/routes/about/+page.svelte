<script>
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import { fade, fly } from 'svelte/transition';

    const teamValues = [
        {
            icon: "ri-heart-fill",
            title: "Open Source Passion",
            description: "Our team is dedicated to creating and contributing to open-source projects that make a difference in the developer community."
        },
        {
            icon: "ri-code-box-fill",
            title: "Technical Excellence",
            description: "With expertise in both software development and design, we deliver high-quality solutions across multiple domains."
        },
        {
            icon: "ri-team-fill",
            title: "Community Focus",
            description: "We believe in the power of community collaboration and actively participate in various open-source initiatives."
        }
    ];

    const platforms = [
        {
            name: "GitHub",
            icon: "ri-github-fill",
            link: "https://github.com/pimatis",
            description: "Check out our open source projects and contributions"
        },
        {
            name: "Codeberg",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z"/></svg>',
            link: "https://codeberg.org/pimatis",
            description: "Our alternative open source repository"
        }
    ];
</script>

<Navbar />

<section class="py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Our Story</h1>
            <p class="text-base sm:text-lg opacity-70 max-w-3xl mx-auto">We are a passionate team of volunteers dedicated to advancing the open-source community through innovative software solutions and design excellence.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div class="space-y-6" in:fade={{ duration: 800, delay: 200 }}>
                <h2 class="text-2xl sm:text-3xl font-bold mb-4">The Story of Our Name</h2>
                <p class="opacity-70">Pimatis, a unique name born at the intersection of creativity and technology. 'Pi' (π) represents the universal language of mathematics and infinite potential, while 'Matis' symbolizes the perfect harmony of nature and art.</p>
                <p class="opacity-70">The combination of these two powerful concepts is reflected in every project we create in the open-source world. By blending mathematical precision with artistic creativity, we develop innovative and sustainable solutions for the community.</p>
                <p class="opacity-70">Our name, just like the open-source philosophy, reflects our belief in unlimited potential and continuous improvement.</p>
            </div>
            
            <div class="relative aspect-video rounded-xl overflow-hidden" in:fly={{ x: 20, duration: 600 }}>
                <img src="https://www.upload.ee/image/17799615/IMG-202205187261.png" alt="Pimatis Team" class="w-full h-full object-cover" />
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div class="space-y-6" in:fade={{ duration: 800, delay: 200 }}>
                <h2 class="text-2xl sm:text-3xl font-bold mb-4">Committed to Open Source</h2>
                <p class="opacity-70">Our team consists of dedicated volunteers who have contributed to numerous open-source projects and design initiatives. We combine our expertise in software development and design to create impactful solutions that benefit the wider community.</p>
                <p class="opacity-70">Through our contributions, we've helped various projects enhance their technical capabilities and design aesthetics. Our commitment to open source drives us to continuously learn, share, and improve.</p>
            </div>
            
            <div class="relative aspect-video rounded-xl overflow-hidden" in:fly={{ x: 20, duration: 600 }}>
                <img src="https://www.upload.ee/image/17796408/IMG-2022052018274.png" alt="Pimatis Team" class="w-full h-full object-cover" />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {#each teamValues as value, i}
                <div class="bg-black/[1%] border border-black/5 backdrop-blur-sm rounded-xl p-6 hover:bg-black/[2%] transition-all duration-300" in:fly={{ y: 20, duration: 600, delay: 200 + (i * 100) }}>
                    <div class="absolute top-0 right-0 h-20 w-20 bg-black/[2%] rounded-bl-3xl rounded-tr-xl -z-10"></div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg sm:text-xl font-semibold text-black">{value.title}</h3>
                        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors duration-300">
                            <i class="{value.icon} text-xl sm:text-2xl text-black/70 group-hover:text-black transition-colors duration-300"></i>
                        </div>
                    </div>
                    <p class="opacity-70">{value.description}</p>
                </div>
            {/each}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {#each platforms as platform, i}
                <a href={platform.link} target="_blank" rel="noopener noreferrer" class="bg-black/[1%] border border-black/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-black/[2%] transition-all duration-300 flex items-center gap-4" in:fly={{ y: 20, duration: 600, delay: 400 + (i * 100) }}>
                    {#if platform.name === "GitHub"}
                        <i class="{platform.icon} text-2xl sm:text-3xl"></i>
                    {:else}
                        {@html platform.icon}
                    {/if}
                    <div>
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">{platform.name}</h3>
                        <p class="text-sm sm:text-base opacity-70">{platform.description}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<Footer />