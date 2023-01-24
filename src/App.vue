<script setup>
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
</script>

<template>
  <FirstLayer />
  <div class="snap-mandatory h-screen w-screen overflow-scroll">
    <div class="snap-start h-screen w-screen backdrop-blur-[2px]">
      <div class="flex p-8 gap-32">
        <RegisterTL />
        <div><h1>screen printing studio & services</h1></div>
        <RegisterTR />
      </div>

      <RegisterBR />
      <RegisterBL class="px-8" />
      <div class="flex justify-center">
        <div class="fixed">
          <img
            src="./Assets/layer2.png"
            alt="layer"
            class="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    class="snap-end h-screen w-screen bg-purple-100 backdrop-blur-md backdrop-brightness-200"
  >
    <NavBar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
