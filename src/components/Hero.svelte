<script lang="ts">
    import { onMount } from 'svelte';
    import { githubProjects } from '../lib/projects';

    let stats = {
      totalProjects: 0,
      totalStars: 0,
      totalForks: 0
    };

    let loading = true;

    onMount(async () => {
      try {
        const projects = await githubProjects;

        stats = projects.reduce((acc: any, project: any) => {
          return {
            totalProjects: acc.totalProjects + 1,
            totalStars: acc.totalStars + project.stargazers_count,
            totalForks: acc.totalForks + project.forks_count
          };
        }, {
          totalProjects: 0,
          totalStars: 0,
          totalForks: 0
        });

        loading = false;
      } catch (error) {
        console.error('Failed to fetch project statistics:', error);
        loading = false;
      }
    });
</script>

<section class="w-full py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center">
    <div class="text-center w-full px-4 sm:w-5/6 md:w-4/5 lg:w-3/4">
        <span class="text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">Collaborate • Innovate • Share</span>
        <p class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Building the future of digital solutions together.</p>
        <p class="text-gray-600 mb-6 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base">Join our community in developing and supporting open-source projects that empower developers and businesses to innovate freely in a collaborative ecosystem.</p>
        <div class="mt-5 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://github.com/pimatis" class="bg-[#0033ff] text-white py-2 px-5 sm:py-2.5 sm:px-6 cursor-pointer transition-all duration-200 hover:bg-[#0022cc] font-medium text-sm sm:text-base inline-block">
                Contribute Now
            </a>
            <a href="/projects" class="border border-[#0033ff] text-[#0033ff] hover:bg-[#0033ff] hover:text-white py-2 px-5 sm:py-2.5 sm:px-6 cursor-pointer transition-all duration-200 font-medium text-sm sm:text-base inline-block">
                Explore Projects
            </a>
        </div>
        {#if loading}
        <div class="flex justify-center items-center py-10 sm:py-16 md:py-20">
            <i class="ri-loader-3-line animate-spin text-[#0033ff] text-3xl"></i>
        </div>
        {:else}
        <div class="flex justify-center flex-wrap mt-8 sm:mt-10">
            <div class="flex items-center mx-2 my-2 sm:my-1">
                <i class="ri-folder-line text-[#0033ff] w-5 h-5 mr-2 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm"><strong>{stats.totalProjects}</strong> Open Source Projects</span>
            </div>
            <div class="flex items-center mx-2 my-2 sm:my-1">
                <i class="ri-star-line text-[#0033ff] w-5 h-5 mr-2 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm"><strong>{stats.totalStars}</strong> GitHub Stars</span>
            </div>
            <div class="flex items-center mx-2 my-2 sm:my-1">
                <i class="ri-git-branch-line text-[#0033ff] w-5 h-5 mr-2 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm"><strong>{stats.totalForks}</strong> Project Forks</span>
            </div>
        </div>
        {/if}
    </div>
</section>
