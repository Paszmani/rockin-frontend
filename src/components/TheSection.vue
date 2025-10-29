<script setup lang="ts">
import type { SectionsData } from "../tyoes/interfaces";

const props = defineProps<{
  section: SectionsData;
}>();
const emit = defineEmits({
  showModal: Number,
});

const handleClick = (index: number) => emit("showModal", index);
</script>

<template>
  <div>
    <h1>{{ props.section.name }}</h1>
    <div>
      <div
        v-for="show in props.section.data"
        :key="show.id"
        @click="handleClick(show.id)"
      >
        <div
          class="h-screen bg-cover bg-center"
          style="background-image: url(show.images[0].url)"
        >
          <h3>{{ show.band?.name }}</h3>
        </div>
        <div>
          <h2>{{ show.title }}</h2>
          <p>{{ show.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
