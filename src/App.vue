<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LoadingPage from './components/Loading.vue';
import { RouterView } from "vue-router";

const isLoading = ref(true);
const isConnected = ref(false);

onMounted(() => {
  const start = Date.now();

  // Replace this with your actual connection logic
  setTimeout(() => {
    const end = Date.now();
    const elapsed = end - start;

    if (Math.random() < 0.5) {
      isConnected.value = true;
      console.log(`Connected in ${elapsed} ms`);
    } else {
      console.log(`Connection failed after ${elapsed} ms`);
    }

    isLoading.value = false;
  }, 3000);
});

</script>

<template>
  <LoadingPage v-if="isLoading" />
  <div v-else class="relative h-screen dark:bg-neutral-800 dark:text-white">
    <RouterView />
  </div>
</template>

