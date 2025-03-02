<script>
    import { fade, fly } from 'svelte/transition';

    let selectedCategory = 'all';

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'design', name: 'UI/UX Design' }
    ];

    const projects = [
        {
            title: "RexChat",
            category: "web",
            image: "https://www.upload.ee/image/17796333/RexChat.jpeg",
            description: "All AI Models One Platform",
            technologies: ["SvelteKit", "Pocketbase", "Groq"],
            link: "https://rexchat.vercel.app"
        },
        {
            title: "K9Crypt",
            category: "web",
            image: "https://www.upload.ee/image/17796332/K9Crypt.jpeg",
            description: "Share your thoughts with the world securely, knowing that only you can access your messages.",
            technologies: ["SvelteKit", "Express", "MongoDB"],
            link: "https://k9crypt.xyz"
        },
        {
            title: "Saharkadasim Logo",
            category: "design",
            description: "Branding and Logo Design",
            technologies: ["Figma"],
            link: "/"
        },
        {
            title: "PiContent",
            category: "software",
            image: "https://www.upload.ee/image/17806442/GitHub_-_pimatis_picontent__AI-Powered_Social_Media_Content_Generator.jpeg",
            description: "AI-Powered Social Media Content Generator",
            technologies: ["Node.js", "Typescript", "GROQ"],
            link: "https://github.com/pimatis/picontent"
        }
    ];

    $: filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);
</script>

<section class="py-12 sm:py-16 lg:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12 lg:mb-16" in:fade={{ duration: 800 }}>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
                Our Portfolio
                <span class="absolute -bottom-2 left-0 w-full h-2 bg-green-100 opacity-50 -z-10"></span>
            </h2>
            <p class="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">Explore our latest projects and success stories</p>
        </div>

        <div class="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            {#each categories as category}
                <button class="border border-black/10 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base {selectedCategory === category.id ? 'bg-black text-white' : 'text-black'}" on:click={() => selectedCategory = category.id}>{category.name}</button>
            {/each}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {#each filteredProjects as project, i}
                <div class="bg-black/[1%] border border-black/5 backdrop-blur-sm rounded-xl overflow-hidden group" in:fly={{ y: 20, duration: 600, delay: 200 + (i * 100) }}>
                    <div class="relative aspect-video overflow-hidden">
                        {#if project.image}
                            <img src={project.image} alt={project.title} class="w-full h-full border-b border-black/10 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        {:else}
                            <div class="w-full h-full flex items-center justify-center border-b border-black/10">
                                <img src="https://www.upload.ee/image/17797875/pimatislogo-black.png" alt="Pimatis Logo" class="w-16 sm:w-20 opacity-5" />
                            </div>
                        {/if}
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a href={project.link} class="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-sm transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View Case Study
                            </a>
                        </div>
                    </div>
                    <div class="p-4 sm:p-6">
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                        <p class="text-sm opacity-70 mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            {#each project.technologies as tech}
                                <span class="text-xs px-2 sm:px-3 py-1 bg-black/[1%] border border-black/5 backdrop-blur-sm rounded-full text-black">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>