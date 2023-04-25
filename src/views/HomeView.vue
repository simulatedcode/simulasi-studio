<script setup lang="ts">
import NavBar from '../components/NavBar.vue';

</script>

<template>
  <div class="relative dark:bg-neutral-800 h-screen dark:text-neutral-50">
    <NavBar />
    <div class="max-w-7xl mx-auto pt-28">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-start-5 col-span-6">
          <h1 class="text-4xl font-semibold">Nothing is real
            <p class="mt-1">
              Everything is Simulated
            </p>
          </h1>
          <div class="mt-4">
            <h2 class="font-bold text-6xl"><span class="underline decoration-indigo-400">Tricky.</span> Surprising</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
