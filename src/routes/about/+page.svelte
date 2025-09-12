<script lang="ts">
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import { onMount } from 'svelte';
    import { githubProjects } from '$lib/projects';

    const missionStatements = [
      {
        title: "Our Mission",
        description: "At Pimatis, we're dedicated to building the future of digital solutions through open source collaboration. We aim to create high-quality, accessible technology that empowers developers around the world."
      },
      {
        title: "Our Vision",
        description: "We envision a world where technology is accessible to all, where innovation is driven by collaboration rather than competition, and where open source principles enable global technological advancement."
      },
      {
        title: "Our Values",
        description: "Our core values include transparency, inclusivity, innovation, and community. We believe in creating an environment where diverse perspectives are welcomed and everyone's contribution is valued."
      },
      {
        title: "Our Goals",
        description: "Our goals are to foster sustainable development in open source projects, promote education and skill-building among developers, and drive positive change through technology that benefits society as a whole."
      }
    ];

    let achievements = [
      { figure: "2025", description: "Year Founded" },
      { figure: "0", description: "Open Source Projects" },
      { figure: "0", description: "GitHub Stars" },
      { figure: "0", description: "Project Forks" }
    ];

    let loading = true;

    onMount(async () => {
      try {
        const projects = await githubProjects;
        const totalProjects = projects.length;
        const totalStars = projects.reduce((acc: number, project: { stargazers_count: number }) => acc + project.stargazers_count, 0);
        const totalForks = projects.reduce((acc: number, project: { forks_count: number }) => acc + project.forks_count, 0);

        achievements = [
          { figure: "2025", description: "Year Founded" },
          { figure: totalProjects.toString(), description: "Open Source Projects" },
          { figure: totalStars.toString(), description: "GitHub Stars" },
          { figure: totalForks.toString(), description: "Contributors Worldwide" }
        ];

        loading = false;
      } catch (error) {
        console.error('Failed to fetch project statistics:', error);
        loading = false;
      }
    });
</script>

<div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-5">
    <Navbar />

    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
            <span class="text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">About Pimatis</span>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Building Technology Together</h1>
            <p class="w-full max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
                Pimatis is an open source community that believes in the power of collaboration to create innovative digital solutions.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
            {#each missionStatements as statement}
                <div class="bg-white p-6 sm:p-8 border border-black/10 hover:border-[#0033ff]/30 transition-all duration-200 h-full">
                    <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{statement.title}</h2>
                    <p class="text-gray-600 text-sm sm:text-base">{statement.description}</p>
                </div>
            {/each}
        </div>

        <div class="mb-12 sm:mb-16 lg:mb-20">
            <div class="bg-white border border-black/10 hover:border-[#0033ff]/30 transition-all duration-200 p-6 sm:p-8 lg:p-10">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Our Story</h2>
                <div class="w-full max-w-4xl mx-auto">
                    <p class="mb-4 text-sm sm:text-base">
                        Pimatis was born from a simple idea: technology should be built together. Founded in 2025 by a group of passionate developers who believed in the power of open source, our community has grown into a global network of innovators.
                    </p>
                    <p class="mb-0 sm:mb-4 text-sm sm:text-base">
                        What sets us apart is our commitment to quality and collaboration. Every project we undertake adheres to the highest standards of code quality, security, and accessibility. We believe that the best solutions emerge when passionate people work together toward a common goal.
                    </p>
                </div>
            </div>
        </div>

        {#if loading}
            <div class="flex justify-center items-center h-32 sm:h-40 mb-12 sm:mb-16 lg:mb-20">
                <i class="ri-loader-3-line animate-spin text-[#0033ff] text-2xl sm:text-3xl"></i>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
                {#each achievements as achievement}
                    <div class="bg-white text-center p-4 sm:p-6 border border-black/10 hover:border-[#0033ff]/30 transition-all duration-200 h-full">
                        <p class="text-2xl sm:text-3xl font-bold text-[#0033ff] mb-2">{achievement.figure}</p>
                        <p class="text-gray-600 text-sm sm:text-base">{achievement.description}</p>
                    </div>
                {/each}
            </div>
        {/if}

        <div class="text-center">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Join Our Community</h2>
            <p class="w-full max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">We're always looking for passionate individuals to join our community. Whether you're a developer, designer, writer, or enthusiast, there's a place for you at Pimatis.</p>
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/pimatis" class="w-full sm:w-auto bg-[#0033ff] text-white py-2.5 px-6 hover:bg-[#0022cc] transition-colors duration-200 text-center text-xs sm:text-sm">
                    Join on GitHub
                </a>
                <a href="/contact" class="w-full sm:w-auto border border-[#0033ff] text-[#0033ff] py-2.5 px-6 hover:bg-[#0033ff] hover:text-white transition-colors duration-200 text-center text-xs sm:text-sm">
                    Contact Us
                </a>
            </div>
        </div>
    </section>

    <Footer />
</div>
