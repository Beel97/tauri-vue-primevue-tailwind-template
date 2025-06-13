<template>
  <Button :icon="icon" severity="contrast" variant="text" @click="toggleDarkMode()" />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const isDarkMode = ref(document.documentElement.classList.contains('dark-mode-selector'));

const icon = computed(() => {
  return isDarkMode.value ? 'pi pi-moon' : 'pi pi-sun';
});

watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark-mode-selector');
  } else {
    document.documentElement.classList.remove('dark-mode-selector');
  }
});

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
}
</script>
