<script setup lang="ts">
import { computed, ref} from "vue";
import {formSteps} from "./formSteps.ts";
import {useFormStepStore} from "./formStore.ts";
import StepButton from "./StepButton.vue";

const currentStepIndex = ref<number>(0);
const mode = ref<"next" | "previous">("next");

const store = useFormStepStore()

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

const isFalling = ref(false)
const animHeart = () => {
  isFalling.value = true;
}

defineEmits<{
  (event: "submit"): void
}>()
</script>

<template>
<div class="step-form" :class="[`step-form--${mode}`]">
  <div class="step-form__steps">
    <transition name="step" mode="out-in">
      <component :is="currentStep"/>
    </transition>
  </div>
  <div class="step-form__actions">
    <StepButton type="button" @click="goToPreviousStep" :disabled="!hasPreviousStep">Back</StepButton>
    <StepButton type="button" @click="goToNextStep" v-if="hasNextStep" variant="solid">Next</StepButton>
    <StepButton type="button" @click="$emit('submit')" v-else :disabled="!store.isValid" variant="solid">Submit</StepButton>
  </div>
  <div class="svg-container" :class="{ 'falling': isFalling }">
    <img src="../../assets/heart.svg" />
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;


  &__steps {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem 6rem;
  }
}
</style>
