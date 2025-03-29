<script>
    let year = new Date().getFullYear();

    const footerLinks = [
      {
        title: 'Company',
        links: [
          { name: 'About', url: '/about' },
          { name: 'Team', url: '/team' },
          { name: 'Contact', url: '/contact' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'GitHub', url: 'https://github.com/pimatis' }
        ]
      }
    ];

    const socialLinks = [
      { icon: 'ri-github-fill', url: 'https://github.com/pimatis' },
      { icon: 'ri-twitter-x-fill', url: 'https://x.com/pimatis' },
      { icon: 'ri-linkedin-fill', url: 'https://linkedin.com/company/pimatis' },
    ];
</script>

<footer class="w-full">
    <div class="px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="col-span-1 sm:col-span-2 lg:col-span-1">
                <h2 class="text-xl font-bold text-gray-900">Pimatis</h2>
                <p class="mt-2 text-sm text-gray-500">Building the future of digital solutions together through open source collaboration.</p>

                <div class="mt-4 flex space-x-4">
                {#each socialLinks as social}
                    <a href={social.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#0033ff] transition-colors duration-200" aria-label={`Follow us on ${social.icon.split('-')[1]}`}>
                        <i class="{social.icon} text-xl"></i>
                    </a>
                {/each}
                </div>
            </div>

            <div class="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {#each footerLinks as section, i}
                <div class="col-span-1 sm:justify-self-start lg:justify-self-end">
                    <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase">{section.title}</h3>
                    <ul class="mt-4 space-y-2">
                        {#each section.links as link}
                        <li>
                            <a href={link.url} class="text-sm text-gray-500 hover:text-[#0033ff] transition-colors duration-200">
                                {link.name}
                            </a>
                        </li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
            <p class="text-center text-sm text-gray-500">
                © {year} Pimatis. All rights reserved.
            </p>
        </div>
    </div>
</footer>
