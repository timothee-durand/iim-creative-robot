<script setup lang="ts">
import StepForm from "./components/stepForm/StepForm.vue";
import {useFormStepStore} from "./components/stepForm/formStore.ts";

const store = useFormStepStore()
function onSubmit() {
  console.log('submit', store.$state)
}
</script>

<template>
  <StepForm  @submit="onSubmit"/>
</template>

<style scoped>
</style>
