<script setup lang="ts">
import StepForm from "./components/stepForm/StepForm.vue";
import Header from "./components/header/Header.vue";
import HeroHeader from "./components/heroHeader/heroHeader.vue";
import {useFormStepStore} from "./components/stepForm/formStore.ts";

const store = useFormStepStore()
function onSubmit() {
  console.log('submit', store.$state)
}
</script>

<template>
  <Header />
  <HeroHeader />
  <StepForm  @submit="onSubmit"/>
</template>

<style scoped>
</style>
