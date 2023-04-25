<script setup lang="ts">
import NavBar from "../components/NavBar.vue"
</script>
<template>
  <div>
    <NavBar />
    <!--Hero-->
    <div class="py-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-12 gap-4">
          <span class="col-span-2">
            <h1 class="text-7xl font-semibold">About.</h1>
          </span>
          <span class="col-start-5 col-span-8">
            <p class="text-1xl text-gray-700 dark:text-neutral-50 leading-relaxed">
              Simulasi Studio is a screen printing studio located in Yogyakarta, Indonesia. The studio specializes in
              screen printing for posters. Simulasi Studio also collaborates with
              local artists to create limited edition prints that showcase the talent and creativity of the Yogyakarta art
              scene. The studio is committed to using environmentally friendly practices in their printing process,
              including
              water-based inks and eco-friendly waste disposal. They also offer workshops and classes on screen printing
              to
              teach participants the basics of the process.
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
