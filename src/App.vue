<template>
  <DarkModeBtn />

  <div class="flex w-full  justify-center items-center">

    <Card>
      <template #title>
        <h1 class="text-pink-700 dark:text-pink-300">Plantilla base</h1>
      </template>
      <template #content>
        <p class="m-0">
          Rust + Vue 3 (primevue, route) + TypeScript + Tailwind CSS
        </p>
      </template>
    </Card>

  </div>
</template>
<script setup lang="ts">
import 'transition-style';
import DarkModeBtn from './components/commons/DarkModeBtn.vue';

</script>
