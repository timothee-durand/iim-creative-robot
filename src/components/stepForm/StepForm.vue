<script setup lang="ts">
import { computed, ref} from "vue";
import {formSteps} from "./formSteps.ts";

const currentStepIndex = ref<number>(0);
const mode = ref<"next" | "previous">("next");

const hasPreviousStep = computed(() => {
  return currentStepIndex.value > 0;
});

const hasNextStep = computed(() => {
  return currentStepIndex.value < formSteps.length - 1;
});

function goToNextStep() {
  if (hasNextStep.value) {
    currentStepIndex.value = currentStepIndex.value + 1;
    mode.value = "next";
  }
}

function goToPreviousStep() {
  if (hasPreviousStep.value) {
    currentStepIndex.value = currentStepIndex.value - 1;
    mode.value = "previous";
  }
}

const currentStep = computed(() => {
  return formSteps[currentStepIndex.value];
});
</script>

<template>
<div class="step-form" :class="[`step-form--${mode}`]">
  <div class="step-form__steps">
    <transition name="step" mode="out-in">
      <component :is="currentStep"/>
    </transition>
  </div>
  <div class="step-form__actions">
    <button type="button" @click="goToPreviousStep" :disabled="!hasPreviousStep">Previous</button>
    <button type="button" @click="goToNextStep" :disabled="!hasNextStep">Next</button>
  </div>
</div>
</template>

<style scoped lang="scss">
.step-enter-active,
.step-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.step-enter-from,
.step-leave-to {
  opacity: 0;
}

.step-form--next {
  .step-enter-from {
    transform: translateY(100vh);
  }
  .step-leave-to {
    transform: translateY(-100vh);
  }
}

.step-form--previous {
  .step-enter-from {
    transform: translateY(-100vh);
  }
  .step-leave-to {
    transform: translateY(100vh);
  }
}

.step-form {
  min-height: 70vh;
  display: flex;
  flex-direction: column;

  &__steps {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}
</style>