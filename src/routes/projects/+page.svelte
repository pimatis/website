<script lang="ts">
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import { onMount } from 'svelte';
    import { githubProjects } from '$lib/projects';

    let projects: any[] = [];
    let loading = true;
    let error = false;

    let currentPage = 1;
    let projectsPerPage = 5;
    let totalPages = 1;

    onMount(async () => {
      try {
        const data = await githubProjects;
        projects = data.map((project: any) => ({
          name: project.name,
          description: project.description || 'No description available',
          stars: project.stargazers_count,
          forks: project.forks_count,
          language: project.language,
          url: project.html_url,
          updated_at: new Date(project.updated_at).toLocaleDateString()
        }));

        totalPages = Math.ceil(projects.length / projectsPerPage);
        loading = false;
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        error = true;
        loading = false;
      }
    });

    $: paginatedProjects = projects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );

    function goToPage(page: number) {
      if (page > 0 && page <= totalPages) {
        currentPage = page;
        window.scrollTo(0, 0);
      }
    }
</script>

<div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-5">
    <Navbar />

    <section class="py-10 sm:py-16 md:py-20">
        <div class="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <span class="text-xs sm:text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">Our Projects</span>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-black/90 mb-3 sm:mb-4 md:mb-6">Open Source Initiatives</h1>
            <p class="max-w-3xl mx-auto text-base sm:text-lg text-black/60">
                Explore our collection of open source projects. These initiatives represent our commitment to innovation and collaboration.
            </p>
        </div>

        {#if loading}
        <div class="flex justify-center items-center py-20 sm:py-30 md:py-40">
            <i class="ri-loader-3-line animate-spin text-[#0033ff] text-2xl sm:text-3xl"></i>
        </div>
        {:else if error}
        <div class="text-center py-6 sm:py-8 md:py-10 border border-red-200 bg-red-50 mx-4">
            <i class="ri-error-warning-line text-red-500 text-3xl sm:text-4xl mb-2 sm:mb-4"></i>
            <p class="text-red-600 text-sm sm:text-base">Failed to load projects. Please try again later.</p>
        </div>
        {:else if projects.length === 0}
        <div class="text-center py-6 sm:py-8 md:py-10 border border-black/20 bg-black/5 mx-4">
            <i class="ri-folder-info-line text-black/50 text-3xl sm:text-4xl mb-2 sm:mb-4"></i>
            <p class="text-black/60 text-sm sm:text-base">No projects found at the moment. Check back soon!</p>
        </div>
        {:else}
        <div class="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10 px-4">
            {#each paginatedProjects as project}
            <div class="bg-white p-4 sm:p-5 md:p-6 border border-black/10 hover:border-[#0033ff]/30 transition-all duration-200">
                <div class="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h2 class="text-xl sm:text-2xl font-bold text-black/90 mb-1 sm:mb-0">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" class="hover:text-[#0033ff] transition-colors">
                            {project.name}
                            </a>
                        </h2>
                        <span class="text-xs sm:text-sm text-black/50">Updated: {project.updated_at}</span>
                    </div>

                    <p class="text-sm sm:text-base text-black/60">{project.description}</p>

                    <div class="flex flex-wrap gap-1 sm:gap-2">
                        {#if project.language}
                        <span class="border border-black/10 text-black/80 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center">
                            <i class="ri-code-line mr-1"></i> {project.language}
                        </span>
                        {/if}
                        <span class="border border-black/10 text-black/80 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center">
                            <i class="ri-star-line mr-1"></i> {project.stars}
                        </span>
                        <span class="border border-black/10 text-black/80 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center">
                            <i class="ri-git-branch-line mr-1"></i> {project.forks}
                        </span>
                    </div>

                    <div class="flex justify-end">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-[#0033ff] hover:underline flex items-center text-sm sm:text-base">
                            View on GitHub <i class="ri-external-link-line ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/each}
        </div>

        {#if totalPages > 1}
        <div class="flex justify-center mt-6 sm:mt-8 md:mt-10 px-4">
            <div class="flex flex-wrap justify-center gap-2">
                <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1} class="cursor-pointer px-2 sm:px-3 py-1 border border-black/10 bg-white {currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" aria-label="Previous page">
                    <i class="ri-arrow-left-s-line"></i>
                </button>

                {#each Array(totalPages) as _, i}
                <button on:click={() => goToPage(i + 1)} class="cursor-pointer px-2 sm:px-3 py-1 border {currentPage === i + 1 ? 'bg-[#0033ff] text-white border-[#0033ff]' : 'border-black/10 bg-white'} text-xs sm:text-sm">
                    {i + 1}
                </button>
                {/each}

                <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} class="cursor-pointer px-2 sm:px-3 py-1 border border-black/10 bg-white {currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" aria-label="Next page">
                    <i class="ri-arrow-right-s-line"></i>
                </button>
            </div>
        </div>
        {/if}
        {/if}

        <div class="text-center mt-10 sm:mt-12 md:mt-16 px-4">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-black/90 mb-3 sm:mb-4 md:mb-6">Contribute to Our Projects</h2>
            <p class="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-black/60 mb-4 sm:mb-6 md:mb-8">
                Join our community of developers and help us build the future of technology. Your contributions make a difference.
            </p>
            <a href="https://github.com/pimatis" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#0033ff] text-white py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm hover:bg-[#0022cc] transition-colors duration-200">
                Join Us on GitHub
            </a>
        </div>
    </section>

    <Footer />
</div>
