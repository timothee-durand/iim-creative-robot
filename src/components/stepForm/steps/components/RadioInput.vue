<script setup lang="ts">
defineProps<{
  name: string
  value: string
  modelValue: string | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="step-radio">
    <svg width="300" height="300" viewBox="0 0 300 300">
      <defs>

        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <!-- Thicken out the original shape -->
          <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />

          <!-- Use a gaussian blur to create the soft blurriness of the glow -->
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />

          <!-- Change the colour -->
          <feFlood flood-color="var(--color)" result="glowColor" />

          <!-- Color in the glows -->
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />

          <!--	Layer the effects together -->
          <feMerge>
            <feMergeNode in="softGlow_colored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>

        </filter>

      </defs>
      <!-- rectangle borders -->
      <rect width="240" height="230" x="30" y="20" fill="none" stroke="var(--color)" class="step-radio__border1" stroke-width="2" filter="url(#sofGlow)" />
      <rect width="250" height="220" x="25" y="25" fill="none" stroke="var(--color)" class="step-radio__border2" stroke-width="2" />
      <foreignObject class="step-radio__icon" width="100" height="100" x="100" y="50">
        <slot name="icon"/>
      </foreignObject>
      <text class="step-radio__description" x="150" y="150" text-anchor="middle" dominant-baseline="middle" fill="white">
        <slot name="description"/>
      </text>
    </svg>

    <input
        class="step-radio__input"
        type="radio"
        name="connexion"
        value="wifi"
        :checked="value === modelValue"
        @change="$emit('update:modelValue', value)"
    />
  </label>
</template>

<style scoped lang="scss">
.step-radio {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  --color: #CC33CA;


  &:has(:checked) {
    // draw the border
    .step-radio__border1 {
      stroke-dashoffset: 0;
    }
  }

  &__input {
    display: none;
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