<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import TheThemeToggle from "./TheThemeToggle.vue";

const props = defineProps<{
  header: string;
  nav: Array<{ path: string; key: string }>;
}>();
const route = useRoute();
console.log(route);
</script>

<template>
  <header class="w-full bg-white dark:bg-[#0d0d0d] shadow-md z-50">
    <div
      class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center"
    >
      <h1
        class="text-3xl font-extrabold text-black dark:text-white tracking-tight"
      >
        {{ props.header }}
      </h1>
      <div class="flex items-center gap-5">
        <TheThemeToggle />
      </div>
    </div>

    <nav
      class="bg-gray-200 text-sm shadow-inner dark:bg-[#14171c] flex justify-center"
    >
      <div class="max-w-7xl mx-auto px-4 py-2 flex gap-8 overflow-x-auto">
        <RouterLink
          v-for="(link, index) in props.nav"
          :key="index"
          :to="link.path"
          class="pb-1 border-b-2 transition-all duration-300 whitespace-nowrap font-medium"
          :class="{
            'dark:text-red-400 dark:border-red-400': route.path === link.path,
            'dark:text-gray-100 dark:hover:text-red-300 dark:hover:border-red-300':
              route.path !== link.path,
            'text-red-700 border-red-700': route.path === link.path,
            'text-gray-700 hover:text-red-500 hover:border-red-500':
              route.path !== link.path,
          }"
        >
          {{ $t(link.key) }}
        </RouterLink>
      </div>
    </nav>

    <div
      class="h-1 w-full bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 dark:from-indigo-600 dark:via-pink-500 dark:to-red-500 animate-gradient-x"
    ></div>
  </header>
</template>
