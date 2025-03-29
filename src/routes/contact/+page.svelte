<script lang="ts">
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
</script>

<div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-5">
    <Navbar />

    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
            <span class="text-sm font-medium text-[#0033ff] uppercase tracking-wider mb-2 inline-block">Contact Us</span>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h1>
            <p class="w-full max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
                Have questions or want to collaborate? We're here to help. Reach out to us using any of the methods below.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto">
            <div class="border border-black/15 bg-white p-4 sm:p-6 transition-all duration-200 relative overflow-hidden hover:border-[#0033ff]/30">
                <div class="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <i class="ri-discord-fill text-[#0033ff] text-xl sm:text-2xl"></i>
                </div>
                <div class="bg-[#0033ff]/5 w-12 sm:w-16 h-12 sm:h-16 rounded-full absolute -left-6 sm:-left-8 -bottom-6 sm:-bottom-8 opacity-30"></div>
                <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Discord</h3>
                <p class="text-gray-600 leading-relaxed text-sm sm:text-base">Join our Discord server for real-time support and community discussions.</p>
                <a href="https://discord.gg/7NVJhhqCVB" class="text-[#0033ff] font-medium hover:underline flex items-center mt-4">
                    Join Discord
                    <i class="ri-external-link-line ml-1"></i>
                </a>
            </div>

            <div class="border border-black/15 bg-white p-4 sm:p-6 transition-all duration-200 relative overflow-hidden hover:border-[#0033ff]/30">
                <div class="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <i class="ri-telegram-fill text-[#0033ff] text-xl sm:text-2xl"></i>
                </div>
                <div class="bg-[#0033ff]/5 w-12 sm:w-16 h-12 sm:h-16 rounded-full absolute -left-6 sm:-left-8 -bottom-6 sm:-bottom-8 opacity-30"></div>
                <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Telegram</h3>
                <p class="text-gray-600 leading-relaxed text-sm sm:text-base">Join our Telegram community to stay updated on the latest news and events.</p>
                <a href="https://t.me/pimatis" target="_blank" rel="noopener noreferrer" class="text-[#0033ff] font-medium hover:underline flex items-center mt-4">
                    @pimatis
                    <i class="ri-external-link-line ml-1"></i>
                </a>
            </div>
        </div>
    </section>

    <Footer />
</div>
