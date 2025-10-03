<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const nav = [
  { path: "/", key: "Inicio" },
  { path: "/markeds", key: "Favoritos" },
  { path: "/blog", key: "Blog" },
];
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <TheHeader header="RockIN" :nav="nav" />

    <main class="max-w-6xl mx-auto px-4 py-6">
      <RouterView class="w-full" />
    </main>

    <!-- <footer class="bg-gray-300 dark:bg-gray-950 text-center py-4">
      <p class="text-sm text-gray-900 dark:text-gray-400">
        &copy; Footer
      </p>
    </footer> -->
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
</style>
