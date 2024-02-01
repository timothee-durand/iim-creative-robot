<script setup lang="ts">
import SwipeCard from './components/cards/SwipeCard.vue';
import StepForm from "./components/stepForm/StepForm.vue";
import Header from "./components/header/Header.vue";
import HeroHeader from "./components/heroHeader/heroHeader.vue";
import {onMounted, ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

const hasSubmitted = ref(false)
function onSubmit() {
  hasSubmitted.value = true
}


const target = ref(null)
const targetIsVisible = ref(false)


onMounted(() => {
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'})
})

useIntersectionObserver(
    target,
    ([{ intersectionRatio }]) => {
      if(!targetIsVisible.value && intersectionRatio >= 1) {
        targetIsVisible.value = true
      }
    },
    {
      threshold: 1
    }
)

</script>

<template>
  <div :class="{'lock-scroll': targetIsVisible}">
    <Header class="hide" />
    <HeroHeader class="hide"/>
    <div class="step-form-placeholder" ref="target">
      <div class="step-form-placement">
        <transition name="fade" mode="out-in">
          <StepForm v-if="!hasSubmitted" @submit="onSubmit" />
          <div v-else>
            <SwipeCard/>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<style scoped>
html{
  background-color: black !important;
}

.lock-scroll {
  overflow: hidden;
  height: 100vh;

  .hide {
    display: none;
  }
}

.step-form-placeholder {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.step-form-placement {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
