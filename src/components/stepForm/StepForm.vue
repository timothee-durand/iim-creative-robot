<script setup lang="ts">
import {computed, ref} from "vue";
import {formSteps, Step} from "./formSteps.ts";

const currentStepIndex = ref<number>(0);

function goToNextStep() {
  if (currentStepIndex.value < formSteps.length - 1) {
    currentStepIndex.value = currentStepIndex.value + 1;
  }
}

function goToPreviousStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value = currentStepIndex.value - 1;
  }
}

const currentStep = computed(() => {
  return formSteps[currentStepIndex.value];
});
</script>

<template>
<div class="step-form">
  <div class="step-form__steps">
    <div class="step-form__step">
      <div class="step-form__step__question">{{ currentStep.question }}</div>
      <div class="step-form__step__answer">
        <component :is="currentStep.component" />
      </div>
    </div>
  </div>
  <div class="step-form__actions">
    <button type="button" @click="goToPreviousStep">Previous</button>
    <button type="button" @click="goToNextStep">Next</button>
  </div>
</div>
</template>

<style scoped>

</style>