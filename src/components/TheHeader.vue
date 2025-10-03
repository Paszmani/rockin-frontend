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
      class="bg-[#3D4350] text-sm shadow-inner text-gray-100 dark:bg-[#2e313a]"
    >
      <div class="max-w-7xl mx-auto px-4 py-2 flex gap-8 overflow-x-auto">
        <RouterLink
          v-for="(link, index) in props.nav"
          :key="index"
          :to="link.path"
          class="pb-1 border-b-2 transition-all duration-300 whitespace-nowrap font-medium"
          :class="{
            'text-yellow-400 border-yellow-400': route.path === link.path,
            'text-gray-100 hover:text-yellow-300 hover:border-yellow-300':
              route.path !== link.path,
          }"
        >
          {{ $t(link.key) }}
        </RouterLink>
      </div>
    </nav>

    <div
      class="h-3 w-full bg-gradient-to-b from-[#3D4350] to-[#4a5161] dark:from-[#111827] dark:to-[#1f2937]"
    ></div>
  </header>
</template>
