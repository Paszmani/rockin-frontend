<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const languages = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

const switchLang = (newLang: string) => {
  if (locale.value == newLang) return;
  locale.value = newLang;
  localStorage.setItem("default-lang", newLang);
};

onMounted(() => {
  const defaultLocale = localStorage.getItem("default-lang");
  if (defaultLocale) locale.value = defaultLocale;
});
</script>

<template>
  <nav class="flex gap-4 items-center">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="switchLang(lang.code)"
      class="px-3 py-1 text-sm font-medium uppercase rounded-md transition-all duration-200"
      :class="
        locale === lang.code
          ? 'bg-yellow-300 text-black shadow-md'
          : 'text-gray-400 hover:text-yellow-300 hover:bg-gray-800'
      "
    >
      {{ lang.label }}
    </button>
  </nav>
</template>
