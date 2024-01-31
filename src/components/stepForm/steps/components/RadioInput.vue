<script setup lang="ts">
import {useMouseInElement} from "@vueuse/core";
import {computed, ref} from "vue";
import {useStore} from "../../../base/styleStore.ts";

const storeCss = useStore();

const props = defineProps<{
  name: string
  value: string
  modelValue: string | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const target = ref(null)

const isChecked = computed(() => {
  return props.value === props.modelValue
})

const {elementX, elementY} = useMouseInElement(target)

const style = computed(() => {
  if (!isChecked.value) return null
  return {
    '--mouse-x': `${elementX.value}px`,
    '--mouse-y': `${elementY.value}px`,
  }
})
</script>

<template>
  <label class="step-radio" ref="target" :style="style">
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
      <rect width="240" height="220" x="30" y="15" fill="none" :stroke="storeCss.background" class="step-radio__border1"
            stroke-width="2" filter="url(#sofGlow)"/>
      <rect width="250" height="210" x="25" y="20" fill="none" :stroke="storeCss.background" class="step-radio__border2"
            stroke-width="2"/>
    </svg>

    <span class="step-radio__foreground">
      <span class="step-radio__icon">
        <slot name="icon"/>
      </span>

      <span class="step-radio__description">
        <slot name="description"/>
      </span>
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
  width: fit-content;
  height: fit-content;

  &__background, &__foreground {
    grid-area: 1/-1;
  }

  &__foreground {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    gap: 0.8rem;
  }


  &:has(:checked) {
    // draw the border
    .step-radio__border1 {
      stroke-dashoffset: 0;
    }
  }

  &__input {
    display: none;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(calc(var(--mouse-x) * 0.04), calc(var(--mouse-y) * 0.04));
    transition: transform 0.1s ease-out;

    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__description {
    transform: translate(calc(var(--mouse-x) * 0.05), calc(var(--mouse-y) * 0.05));
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
  }
}
</style>
