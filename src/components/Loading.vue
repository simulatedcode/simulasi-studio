<template>
  <div class="loading min-h-screen bg-indigo-400 dark:bg-neutral-800">
    <Logo class="animate-pulse delay-100" />
  </div>
</template>

<script setup lang="ts">
import Logo from "../components/Logo.vue"
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
