<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {formSteps} from "./formSteps.ts";
import {useFormStepStore} from "./formStore.ts";
import StepButton from "./StepButton.vue";
import {useStore} from "../base/styleStore.ts";

const currentStepIndex = ref<number>(0);
const mode = ref<"next" | "previous">("next");

const store = useFormStepStore()
const storeCss = useStore()

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
    startAnimation()
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

// Fonction pour démarrer l'animation
const imageCount = computed(() => {
  if (storeCss.animation === 'hyperthread') return 40
  if (storeCss.animation === 'ecologic') return 5
  return 20
});


function startAnimation() {
  const images = Array.from(document.querySelectorAll('.step-form .svg-container .heart')) as HTMLElement[];
  images.forEach((image) => {
    const delay = Math.random() * 1500;
    const size = ref(Math.random() * 100 + 50)
    if (storeCss.size === 'var(--size-jack)') size.value = Math.random() * 50
    if (storeCss.size === 'var(--size-rj45)') size.value = Math.random() * 500 + 50
    const leftPosition = Math.random() * window.innerWidth;
    setTimeout(() => {
      image.style.transform = `rotate(${Math.random() * 360}deg)`;
      image.style.filter = `brightness(${Math.random() * 200}%)`;
      image.style.width = `${size.value}px`;
      image.style.left = `${leftPosition}px`;
      image.classList.add('falling');
    }, delay);
  });

  // Réinitialiser la position initiale après un certain délai
  setTimeout(() => {
    images.forEach((image) => {
      image.style.transform = 'rotate(0deg)';
      image.style.filter = 'brightness(100%)';
      image.style.width = 'auto';
      image.style.left = 'auto';
      image.classList.remove('falling');
    });
  }, 3000);
}

defineEmits<{
  (event: "submit"): void
}>()

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
})


</script>

<template>
  <div class="step-form" :class="[`step-form--${mode}`, `step-form--${animationLevel}`]">
    <div class="step-form__steps">
      <transition name="step" mode="out-in">
        <component :is="currentStep"/>
      </transition>
    </div>
    <div class="step-form__actions">
      <StepButton type="button" @click="goToPreviousStep" :disabled="!hasPreviousStep">Back</StepButton>
      <StepButton type="button" @click="goToNextStep" v-if="hasNextStep" variant="solid">Next</StepButton>
      <StepButton type="button" @click="$emit('submit')" v-else :disabled="!store.isValid" variant="solid">Submit
      </StepButton>
    </div>
    <div class="svg-container">
      <svg v-for="index in imageCount" class="heart" :key="index" viewBox="0 0 70 64" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M35 11.7807C28.8021 4.55802 18.4452 2.32589 10.6796 8.93972C2.9139 15.5536 1.82059 26.6115 7.91902 34.4338C12.9895 40.9372 28.3343 54.6541 33.3636 59.0937C33.926 59.5904 34.2075 59.8387 34.5357 59.9362C34.8219 60.0213 35.1354 60.0213 35.422 59.9362C35.7502 59.8387 36.0313 59.5904 36.5941 59.0937C41.6234 54.6541 56.968 40.9372 62.0386 34.4338C68.137 26.6115 67.177 15.484 59.2779 8.93972C51.3787 2.39546 41.198 4.55802 35 11.7807Z"
              :stroke="storeCss.background" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-enter-active,
.step-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.step-form--bad {
  .step-enter-active,
  .step-leave-active {
    transition: transform 1.5s ease, opacity 1.5s ease;
  }
}
.step-form--middle {
  .step-enter-active,
  .step-leave-active {
    transition: transform 0.8s ease, opacity 0.8s ease;
  }
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
// Animation
.svg-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  pointer-events: none;
  .heart {
    visibility: hidden;
    top: -25%;
    position: absolute;
  }
}
.falling {
  animation: fall 2s forwards;
}
@keyframes fall {
  0% {
    visibility: visible;
    top: -25%;
  }
  90% {
    visibility: visible;
    top: 100%;
  }
  100% {
    top: 100%;
    visibility: hidden;
  }
}


</style>
