<script lang="ts">
    import { slide, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let menuOpen = false;
    let isMobile = false;
    let menuRef: HTMLElement;
    let buttonRef: HTMLElement;

    function toggleMobileMenu() {
        menuOpen = !menuOpen;
    }

    function closeMobileMenu() {
        menuOpen = false;
    }

    function handleClickOutside(event: MouseEvent) {
        if (menuOpen &&
            menuRef &&
            !menuRef.contains(event.target as Node) &&
            buttonRef &&
            !buttonRef.contains(event.target as Node)) {
            menuOpen = false;
        }
    }

    onMount(() => {
        const checkWindowSize = () => {
            isMobile = window.innerWidth < 768;
            if (!isMobile) menuOpen = false;
        };

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
            document.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<div class="mx-auto w-auto h-16 flex justify-between items-center px-5 relative">
    <div>
        <h1 class="text-lg">Pimatis</h1>
        <p class="text-xs">Building the future of digital solutions together.</p>
    </div>

    <div class="hidden md:flex items-center">
        <a href="/" class="text-sm opacity-50 hover:opacity-100 transition-all duration-200">Home</a>
        <span class="mx-2 opacity-30">|</span>
        <a href="/about" class="text-sm opacity-50 hover:opacity-100 transition-all duration-200">About</a>
        <span class="mx-2 opacity-30">|</span>
        <a href="/projects" class="text-sm opacity-50 hover:opacity-100 transition-all duration-200">Projects</a>
        <span class="mx-2 opacity-30">|</span>
        <a href="/contact" class="text-sm opacity-50 hover:opacity-100 transition-all duration-200">Contact</a>
    </div>

    <button bind:this={buttonRef} class="md:hidden text-[#0033ff] focus:outline-none" aria-label="Toggle menu" on:click|stopPropagation={toggleMobileMenu}>
        {#if menuOpen}
        <i class="ri-close-line text-2xl"></i>
        {:else}
        <i class="ri-menu-line text-2xl"></i>
        {/if}
    </button>
</div>

{#if menuOpen}
<div class="fixed inset-0 border border-black/10 bg-black/50 z-40" transition:fade={{ duration: 200 }} on:click={closeMobileMenu}></div>

<div bind:this={menuRef} class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50" transition:slide={{ duration: 300, axis: 'y' }} on:click|stopPropagation on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()} role="dialog" aria-modal="true">
    <div class="flex flex-col p-5 space-y-4">
        <a href="/" class="opacity-70 hover:opacity-100 hover:text-[#0033ff] transition-all duration-200">
            <i class="ri-home-line text-[#0033ff]"></i>
            Home
        </a>
        <a href="/about" class="opacity-70 hover:opacity-100 hover:text-[#0033ff] transition-all duration-200">
            <i class="ri-user-line text-[#0033ff]"></i>
            About
        </a>
        <a href="/projects" class="opacity-70 hover:opacity-100 hover:text-[#0033ff] transition-all duration-200">
            <i class="ri-folder-line text-[#0033ff]"></i>
            Projects
        </a>
        <a href="/contact" class="opacity-70 hover:opacity-100 hover:text-[#0033ff] transition-all duration-200">
            <i class="ri-mail-line text-[#0033ff]"></i>
            Contact
        </a>
    </div>
</div>
{/if}
