<template>
  <DarkModeBtn />

  <div class="flex w-full  justify-center items-center">

    <Card class="w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <template #title>
        <h1 class="text-pink-700 dark:text-pink-400 text-center">Plantilla base</h1>
      </template>
      <template #content>
        <p class="m-0 mb-5">
          Rust + Vue 3 (primevue, route) + TypeScript + Tailwind CSS
        </p>
        <p class="m-0 mb-5">
          {{ greetingJs }}
        </p>
        <p class="m-0 mb-5">
          {{ info }}
        </p>

      </template>
    </Card>

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import 'transition-style';
import DarkModeBtn from './components/commons/DarkModeBtn.vue';
import { invoke } from '@tauri-apps/api/core';

const greetingJs = ref('Cargando/Loading...');
const info = ref('Cargando/Loading...');
invoke('greet', { name: 'World' }).then((greeting: string) => {
  greetingJs.value = greeting;
});

invoke('info').then((data: string) => {
  info.value = data;
});

</script>
