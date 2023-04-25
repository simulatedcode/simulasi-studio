<script setup lang="ts">
import Logo from "../components/Logo.vue"
import RegisterIcons from "../components/RegisterIcons.vue"
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink } from "vue-router"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="relative">
    <nav class="overflow-x-auto place-items-baseline">
      <div class="mx-auto max-w-7xl">
        <div class="py-6 grid grid-cols-12 gap-4">
          <div class="col-span-4 dark:text-neutral-50">
            <div class="inline-flex">
              <router-link to="/">
                <Logo />
              </router-link>
            </div>
          </div>
          <div class="col-span-2">
            <div class="inline-grid gap-2">
              <button class="inline-flex items-center" @click="toggleDark()">
                <span class="font-display leading-8 text-gray-400 hover:text-gray-500 hover:dark:text-gray-300">{{
                  isDark ?
                  '◉ Exposing Mode' :
                  '◎ Studio Mode'
                }}
                </span>
              </button>

            </div>
          </div>
          <div class="col-start-11 col-span-2">
            <div class="flex items-center justify-between">
              <RouterLink to="/about">
                <h1 class="leading-relaxed hover:text-gray-400">About</h1>
              </RouterLink>
              <RegisterIcons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
