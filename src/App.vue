<script setup>
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
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
  <div class="snap-y h-screen w-screen overflow-scroll">
    <div class="snap-start h-screen w-screen backdrop-blur-[2px]">
      <div class="flex p-8 gap-20">
        <RegisterTL />
        <div><h1>Layer2.pdf</h1></div>
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
    class="snap-end h-screen w-screen flex justify-center bg-zinc-50 backdrop-blur-md backdrop-brightness-200"
  >
    <div class="max-w-5xl mx-auto flex justify-center items-center">
      <div class="shadow-xl">
        <img src="./Assets/sesat_part_2.png" />
      </div>
    </div>
  </div>

  <div
    class="snap-end w-screen bg-white backdrop-blur-md backdrop-brightness-200"
  >
    <div class="p-2 flex justify-center items-center">
      <span class="text-sm text-gray-600">Terima Kasih</span>
    </div>
  </div>
</template>
