<script setup lang="ts">
import SwipeCard from './components/cards/SwipeCard.vue';
import StepForm from "./components/stepForm/StepForm.vue";
import Header from "./components/header/Header.vue";
import {useFormStepStore} from "./components/stepForm/formStore.ts";
import {useStore} from "./components/base/styleStore.ts";
const store = useFormStepStore()
const storeCss = useStore()
function onSubmit() {
  console.log('submit', store.$state)
}
</script>

<template>
  <div>
    <Header />
    <StepForm  @submit="onSubmit"/>
    <div>
      <SwipeCard/>
    </div>
  </div>
</template>

<style scoped>
html{
  background-color: black !important;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


</style>
