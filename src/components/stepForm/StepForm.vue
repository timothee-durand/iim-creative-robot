<script setup lang="ts">
import {computed, ref} from "vue";
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
  if(storeCss.animation === 'hyperthread') return 40
  if(storeCss.animation === 'ecologic') return 5
  return 20
});


function startAnimation() {
  const images = document.querySelectorAll('.svg-container .heart');
  images.forEach((image) => {
    const delay = Math.random() * 1500;
    const size = ref(Math.random() * 100 + 50)
    if(storeCss.size === 'var(--size-jack)') size.value = Math.random() * 50
    if(storeCss.size === 'var(--size-rj45)') size.value = Math.random() * 500 + 50
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
      <StepButton type="button" @click="$emit('submit')" v-else :disabled="!store.isValid" variant="solid">Submit
      </StepButton>
    </div>
    <div class="svg-container">
      <svg v-for="index in imageCount" class="heart" :key="index" viewBox="0 0 59 54" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M53.2509 29.6083L53.2522 29.6069L56.9992 17.7758L57.9992 17.7785C57.9992 17.7781 57.9992 17.7776 57.9992 17.7772C58.0112 13.3164 56.3399 9.11199 53.2755 5.94461C50.2102 2.77625 46.1394 1.03616 41.7949 1.03616C37.4491 1.03616 33.367 2.78916 30.3025 5.95666L29.5171 6.76848L28.7084 5.93256C25.6447 2.76592 21.5513 1 17.2044 1C12.8705 1 8.78833 2.75288 5.7354 5.90845C2.67236 9.07447 0.988047 13.2783 1.00006 17.741C1.00041 22.2044 2.6975 26.3946 5.75872 29.5587L27.6558 52.1919C28.1427 52.6952 28.8082 52.9787 29.4821 52.9787C30.1365 52.9787 30.8081 52.7212 31.3085 52.204L53.2509 29.6083ZM9.39803 9.61487L9.39981 9.61304C11.4891 7.45347 14.263 6.26603 17.2044 6.26603C20.1583 6.26603 22.9436 7.45408 25.044 9.62509L27.6791 12.3488C28.6901 13.3938 30.3325 13.3938 31.3435 12.3488L33.9553 9.64919C36.0561 7.4778 38.8415 6.29013 41.7832 6.29013C44.7236 6.29013 47.4982 7.47693 49.6001 9.63782C51.7002 11.8089 52.8511 14.6909 52.8511 17.7758L52.8511 17.7793C52.8618 20.8593 51.7018 23.7411 49.5998 25.914C49.5997 25.9141 49.5996 25.9143 49.5995 25.9144L29.4836 46.6251L9.41147 25.8782C7.30929 23.7054 6.1482 20.8224 6.1482 17.7396C6.1482 14.6539 7.29955 11.7728 9.39803 9.61487Z"
            :fill="storeCss.background" :stroke="storeCss.background" stroke-width="2"/>
      </svg>
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
// Animation
.svg-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
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
