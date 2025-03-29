<script>
    let featuresArray = [
      {
        title: 'Community First',
        description: 'Our vibrant community is the heart of everything we do, driving innovation through diverse perspectives.',
        icon: 'ri-community-line'
      },
      {
        title: 'Open Source',
        description: 'We\'re committed to the open-source philosophy, making technology accessible to everyone.',
        icon: 'ri-open-source-line'
      },
      {
        title: 'Collaborative Environment',
        description: 'We foster a collaborative environment where developers can connect, share ideas, and build innovative solutions.',
        icon: 'ri-team-line'
      },
      {
        title: 'Innovation Driven',
        description: 'We encourage innovation and experimentation, pushing the boundaries of what\'s possible.',
        icon: 'ri-brain-line'
      },
    ]
</script>

<section class="w-auto py-6 sm:py-8 md:py-12 lg:py-15">
    <div class="text-center px-4 sm:px-6 lg:w-3/4 mx-auto">
        <span class="text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">Why Choose Pimatis</span>
        <p class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our mission is to empower through collaboration</p>
        <p class="text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base">We believe in creating a platform where developers can connect, collaborate, and build innovative solutions that address real-world challenges.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
            {#each featuresArray as feature}
                <div class="border border-black/15 bg-white p-4 sm:p-6 transition-all duration-200 relative overflow-hidden hover:border-[#0033ff]/30">
                    <div class="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <i class="{feature.icon} text-[#0033ff] text-xl sm:text-2xl"></i>
                    </div>
                    <div class="bg-[#0033ff]/5 w-12 sm:w-16 h-12 sm:h-16 rounded-full absolute -left-6 sm:-left-8 -bottom-6 sm:-bottom-8 opacity-30"></div>
                    <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{feature.title}</h3>
                    <p class="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
            {/each}
        </div>

        <div class="mt-8 sm:mt-10 md:mt-12">
            <a href="/about" class="text-[#0033ff] font-medium hover:underline text-sm sm:text-base">Learn more about our mission <i class="ri-arrow-right-line align-middle ml-1"></i></a>
        </div>
    </div>
</section>
