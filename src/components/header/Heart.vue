<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "../base/styleStore.ts";

const cssStore = useStore()
const styles = computed(() => ({
      '--heart-color': cssStore.background,
    })
)
</script>

<template>
    <svg width="60" height="70" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg" :style="styles">
        <path fill-rule="evenodd" stroke="var(--heart-color)" clip-rule="evenodd" d="M35 11.7807C28.8021 4.55802 18.4452 2.32589 10.6796 8.93972C2.9139 15.5536 1.82059 26.6115 7.91902 34.4338C12.9895 40.9372 28.3343 54.6541 33.3636 59.0937C33.926 59.5904 34.2075 59.8387 34.5357 59.9362C34.8219 60.0213 35.1354 60.0213 35.422 59.9362C35.7502 59.8387 36.0313 59.5904 36.5941 59.0937C41.6234 54.6541 56.968 40.9372 62.0386 34.4338C68.137 26.6115 67.177 15.484 59.2779 8.93972C51.3787 2.39546 41.198 4.55802 35 11.7807Z" filter="url(#sofGlow)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Color in the glows -->
        <filter id="sofGlow" height="200%" width="200%" x="-75%" y="-75%">
            <!-- Thicken out the original shape -->
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken"/>

            <!-- Use a gaussian blur to create the soft blurriness of the glow -->
            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred"/>

            <!-- Change the colour -->
            <feFlood flood-color="var(--heart-color)" result="glowColor"/>

            <!-- Color in the glows -->
            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored"/>

            <!--	Layer the effects together -->
            <feMerge>
            <feMergeNode in="softGlow_colored"/>
            <feMergeNode in="SourceGraphic"/>
            </feMerge>

        </filter>
</svg>
</template>

<style scoped>
svg {
  --heart-color: #CC33CA;
  transform: rotate(-135deg);
  overflow: visible;
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