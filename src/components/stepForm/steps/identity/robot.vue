<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "../../../base/styleStore.ts";

const cssStore = useStore()
const styles = computed(() => ({
      '--robot-color': cssStore.background,
    })
)
</script>

<template>
  <svg width="692" height="221" viewBox="0 0 692 221" fill="none" xmlns="http://www.w3.org/2000/svg" :style="styles">
    <g filter="url(#sofGlow)">
      <circle cx="634" cy="42" r="4" fill="var(--robot-color)"/>
      <circle cx="650" cy="42" r="4" fill="var(--robot-color)"/>
      <path
          d="M666.11 27.87C665.06 26.15 663.16 25 661 25H617V68C617 68.34 617.04 68.67 617.09 69H617C617 72.31 619.69 75 623 75H661C663.17 75 665.06 73.85 666.11 72.13C666.66 71.59 667 70.83 667 70V30C667 29.17 666.66 28.42 666.11 27.87ZM661 69H623V31H661V69Z"
          fill="var(--robot-color)"/>
    </g>
    <line x1="0.5" y1="76" x2="0.500002" y2="26" stroke="white"/>
    <path
        d="M0 47.5H592H593C593.268 21.4968 614.433 1 640.5 1C666.734 1 688 22.2665 688 48.5C688 74.5667 667.503 95.2318 641.5 95.5L641.5 96.0091L640.5 151.009L2.05216 218.497"
        stroke="white"/>
    <path class="animated-path"
          d="M0 47.5H592H593C593.268 21.4968 614.433 1 640.5 1C666.734 1 688 22.2665 688 48.5C688 74.5667 667.503 95.2318 641.5 95.5L641.5 96.0091L640.5 151.009L2.05216 218.497"
          stroke="white" stroke-width="3"/>
    <defs>

      <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
        <!-- Thicken out the original shape -->
        <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken"/>

        <!-- Use a gaussian blur to create the soft blurriness of the glow -->
        <feGaussianBlur in="thicken" stdDeviation="10" result="blurred"/>

        <!-- Change the colour -->
        <feFlood flood-color="var(--robot-color)" result="glowColor"/>

        <!-- Color in the glows -->
        <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored"/>

        <!--	Layer the effects together -->
        <feMerge>
          <feMergeNode in="softGlow_colored"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>

      </filter>

    </defs>
  </svg>
</template>
<style scoped>
svg {
  --robot-color: #CC33CA;
}

.animated-path {
  animation: path 6s linear infinite;
  stroke-dasharray: 80px;
  stroke-linecap: round;
}

@keyframes path {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -160px;
  }
}

</style>