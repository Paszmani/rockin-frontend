<script setup lang="ts">
import TheSection from "../components/TheSection.vue";
import data from "../assets/data.js";
</script>

<template>
  <div v-for="section in data" :key="section.id">
    <TheSection :section="section" />
  </div>
</template>
