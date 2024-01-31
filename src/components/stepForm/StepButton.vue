<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
  variant?: 'outline' | 'solid'
}>(), {variant: 'outline'})
defineEmits<{
  (e: 'submit'): void
}>()
</script>

<template>
<button type="button" class="step-button" :class="[`step-button--${variant}`]" :disabled="disabled">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <slot/>
</button>
</template>

<style scoped lang="scss">



.step-button {
  --button-color: #CC33CA;
  --hover-background-color: transparent;
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: white;
  overflow: hidden;
  transition: 0.2s ease-out;
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid transparent;


  &--solid {
    --hover-background-color: var(--button-color);
    border: 1px solid var(--button-color);
  }

  &:disabled {
    opacity: 0.6;
  }

  span {
    position: absolute;
    display: block;

    &:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--button-color));
    }

    &:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, var(--button-color));
    }

    &:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, var(--button-color));
    }

    &:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, var(--button-color));
    }
  }

  &:hover:not(:disabled) {
    background: var(--hover-background-color);
    border-radius: 3px;
    box-shadow: 0 0 10px var(--button-color), 0 0 40px var(--button-color), 0 0 80px var(--button-color);
    transition-delay: 300ms;

    span {
      &:nth-child(1) {
        left: 100%;
        transition: 200ms;
      }

      &:nth-child(3) {
        right: 100%;
        transition: 250ms;
        transition-delay: 200ms;
      }

      &:nth-child(2) {
        top: 100%;
        transition: 250ms;
        transition-delay: 100ms;
      }

      &:nth-child(4) {
        bottom: 100%;
        transition: 250ms;
        transition-delay: 150ms;
      }
    }
  }


}
</style>