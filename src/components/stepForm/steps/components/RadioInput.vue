<script setup lang="ts">
import {useMouseInElement} from "@vueuse/core";
import {computed, ref, watchEffect} from "vue";

const props = defineProps<{
  name: string
  value: string
  modelValue: string | null
}>()

const circlePos = ref({x: 0, y: 0})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const wrapper = ref(null)
const background = ref(null)

const isChecked = computed(() => {
  return props.value === props.modelValue
})

const {elementX, elementY} = useMouseInElement(wrapper)
const {elementX : bgElementX, elementY: bgElementY} = useMouseInElement(background)

watchEffect(() => {
  if (!isChecked.value) {
    circlePos.value = {x: bgElementX.value, y: bgElementY.value}
  }
})


const style = computed(() => {
  return  {
    '--circle-pos-x': `${circlePos.value.x}px`,
    '--circle-pos-y': `${circlePos.value.y}px`,
    '--mouse-x': `${elementX.value}px`,
    '--mouse-y': `${elementY.value}px`,
  }
})
</script>

<template>
  <label class="step-radio" ref="wrapper" :style="style">
    <svg width="300" height="250" viewBox="0 0 300 250" class="step-radio__foreground">
      <defs>

        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <!-- Thicken out the original shape -->
          <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken"/>

          <!-- Use a gaussian blur to create the soft blurriness of the glow -->
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred"/>

          <!-- Change the colour -->
          <feFlood flood-color="var(--color)" result="glowColor"/>

          <!-- Color in the glows -->
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored"/>

          <!--	Layer the effects together -->
          <feMerge>
            <feMergeNode in="softGlow_colored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>

        </filter>

      </defs>
      <!-- rectangle borders -->
      <rect width="240" height="220" x="30" y="15" fill="none" stroke="var(--color)" class="step-radio__border1"
            stroke-width="2" filter="url(#sofGlow)"/>
      <rect width="250" height="210" x="25" y="20" fill="none" stroke="var(--color)" class="step-radio__border2"
            stroke-width="2"/>
    </svg>

    <span class="step-radio__foreground">
      <span class="step-radio__icon">
        <slot name="icon"/>
      </span>

      <span class="step-radio__description">
        <slot name="description"/>
      </span>
      <span class="step-radio__foreground__background" ref="background"></span>
    </span>


    <input
        class="step-radio__input"
        type="radio"
        name="connexion"
        value="wifi"
        :checked="isChecked"
        @change="$emit('update:modelValue', value)"
    />
  </label>
</template>

<style scoped lang="scss">
.step-radio {
  text-align: center;
  display: grid;
  cursor: pointer;
  --color: #CC33CA;
  width: fit-content;
  height: fit-content;
  position: relative;


  &__background, &__foreground {
    grid-area: 1/-1;
  }

  &__foreground {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    gap: 0.8rem;

    &__background{
      position: absolute;
      top: 20px;
      left: 30px;
      width: 240px;
      height: 210px;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: color-mix(in srgb, var(--color), black 70%);
        clip-path: circle(0% at var(--circle-pos-x) var(--circle-pos-y));
        transition: clip-path ease-out 300ms;
      }
    }
  }


  &:has(:checked) {
    // draw the border
    .step-radio__border1 {
      stroke-dashoffset: 0;
    }

    .step-radio__foreground__background::before {
      clip-path: circle(200% at var(--circle-pos-x) var(--circle-pos-y) );
    }

    .step-radio__icon {
      transform: translate3d(calc(var(--mouse-x) * 0.04), calc(var(--mouse-y) * 0.04), 0);
    }

    .step-radio__description {
      transform: translate3d(calc(var(--mouse-x) * 0.05), calc(var(--mouse-y) * 0.05), 0);
    }
  }

  &__input {
    display: none;
  }

  &__icon, &__description {
    position: relative;
    z-index: 1;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out;

    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__description {
    transition: transform 0.1s ease-out;
    max-width: 200px;
  }

  &__border1 {
    stroke-dasharray: calc(300 * 4);
    stroke-dashoffset: calc(300 * 4);
    transition: stroke-dashoffset 0.3s ease-out;
  }


  &:hover {
    .step-radio__border1 {
      stroke-dashoffset: 0;
    }

    &:not(:has(:checked)) .step-radio__foreground__background::before {
      clip-path: circle(5% at var(--circle-pos-x) var(--circle-pos-y));
      transition-duration: 150ms;
    }
  }
}
</style>