<script setup lang="ts">
import {useStore} from "../base/styleStore.ts";
import {ref, watch} from "vue";

withDefaults(defineProps<{
  disabled?: boolean
  variant?: 'outline' | 'solid'
}>(), {variant: 'outline'})
defineEmits<{
  (e: 'submit'): void
}>()
const storeCss = useStore();
const animationLevel = ref<'bad' | 'middle' | 'good'>('good')

watch(storeCss, () => {
  switch (storeCss.animation) {
    case 'hyperthread':
      animationLevel.value = 'good'
      break
    case 'virtusync':
      animationLevel.value = 'middle'
      break
    case 'ecologic':
      animationLevel.value = 'bad'
      break
  }
}, {immediate: true})
</script>

<template>
<button type="button" class="step-button" :class="[`step-button--${variant}`, `step-button--${animationLevel}`]" :style="{'--button-color' : storeCss.background, 'font-size': storeCss.size }" :disabled="disabled">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <slot/>
</button>
</template>

<style scoped lang="scss">
.step-button {
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

  &--bad {
    transition-delay: 2000ms !important;
    transition-duration: 600ms;
    &:hover:not(:disabled) {

      span {
        &:nth-child(1) {
          left: 100%;
          transition: 5000ms;
        }

        &:nth-child(3) {
          right: 100%;
          transition: 4000ms;
          transition-delay: 2000ms;
        }

        &:nth-child(2) {
          top: 100%;
          transition: 4000ms;
          transition-delay: 1000ms;
        }

        &:nth-child(4) {
          bottom: 100%;
          transition: 4000ms;
          transition-delay: 1500ms;
        }
      }
    }


  }

  &--middle {
    transition-delay: 1000ms !important;
    transition-duration: 1000ms;
    &:hover:not(:disabled) {

      span {
        &:nth-child(1) {
          left: 100%;
          transition: 2000ms;
        }

        &:nth-child(3) {
          right: 100%;
          transition: 1000ms;
          transition-delay: 200ms;
        }

        &:nth-child(2) {
          top: 100%;
          transition: 1000ms;
          transition-delay: 100ms;
        }

        &:nth-child(4) {
          bottom: 100%;
          transition: 1000ms;
          transition-delay: 150ms;
        }
      }
    }
  }



}
</style>
