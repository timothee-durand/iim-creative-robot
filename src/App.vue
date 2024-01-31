<script setup lang="ts">
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
  <Header />
  <StepForm  @submit="onSubmit"/>
</template>

<style scoped>
</style>
