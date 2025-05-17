<template>
  <header class="bg-white border-b shadow-sm">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <NuxtLink to="/" class="text-xl font-semibold text-primary">
        نشست
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="hidden md:flex gap-6 mx-auto">
        <NuxtLink to="/" class="hover:text-primary transition">خانه</NuxtLink>
        <NuxtLink to="/events" class="hover:text-primary transition">رویداد ها</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary transition">درباره ما</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary transition">ارتباط</NuxtLink>
      </div>

      <div class="hidden md:flex gap-6">
            <Button>ثبتنام</Button>
	    <Button variant="outline">ورود</Button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t px-4 pb-4">
      <NuxtLink to="/" class="block py-2 hover:text-primary">Home</NuxtLink>
      <NuxtLink to="/about" class="block py-2 hover:text-primary">About</NuxtLink>
      <NuxtLink to="/contact" class="block py-2 hover:text-primary">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
</script>

<style scoped>

</style>
