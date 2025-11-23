<script lang="ts">
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';

    const teamMembers = [
        {
            name: "Fatih Yılmaz",
            role: "Founder & Lead Developer",
            bio: "Fatih is a front-end developer with over 7+ years of experience in building scalable applications. He founded Pimatis with a vision to create accessible open-source solutions.",
            image: "https://avatars.githubusercontent.com/u/60826916?v=4",
            socialLinks: [
                { platform: "github", url: "https://github.com/queaxtra", icon: "ri-github-fill" },
                { platform: "linkedin", url: "https://linkedin.com/in/queaxtra", icon: "ri-linkedin-fill" },
                { platform: "twitter", url: "https://x.com/queaxtra", icon: "ri-twitter-x-fill" }
            ]
        },
        {
            name: "LeakWire",
            role: "Cybersecurity Analyst",
            bio: "A cybersecurity professional with expertise in SOC analysis and cryptography, actively working in security research and penetration testing. They operate across two distinct disciplines, combining analytical defense skills with offensive security capabilities.",
            image: "https://avatars.githubusercontent.com/u/29897401?v=4",
            socialLinks: [
                { platform: "github", url: "https://github.com/leakwire", icon: "ri-github-fill" }
            ]
        }
    ];
</script>

<div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-5">
    <Navbar />

    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
            <span class="text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">Our Team</span>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Meet the People Behind Pimatis</h1>
            <p class="w-full max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
                Our diverse team of talented individuals is dedicated to creating innovative open-source solutions. Together, we're building the future of technology.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {#each teamMembers as member}
                <div class="bg-white border border-black/10 hover:border-[#0033ff]/30 transition-all duration-200 overflow-hidden">
                    <div class="aspect-square overflow-hidden">
                        <img src={member.image} alt={member.name} class="w-full h-full object-cover" />
                    </div>
                    <div class="p-4 sm:p-6">
                        <h2 class="text-xl font-bold text-gray-900">{member.name}</h2>
                        <p class="text-[#0033ff] text-sm mb-3">{member.role}</p>
                        <p class="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <div class="flex space-x-3">
                            {#each member.socialLinks as link}
                                <a href={link.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#0033ff] transition-colors duration-200" aria-label={`${member.name}'s ${link.platform}`}>
                                    <i class={link.icon}></i>
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="text-center">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Join Our Team</h2>
            <p class="w-full max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We're always looking for talented individuals who are passionate about open source and innovation. If you're interested in joining our team, reach out to us!
            </p>
            <a href="/contact" class="inline-block bg-[#0033ff] text-white py-2.5 px-6 hover:bg-[#0022cc] transition-colors duration-200 text-xs sm:text-sm">
                Contact Us
            </a>
        </div>
    </section>

    <Footer />
</div>
