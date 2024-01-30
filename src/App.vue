<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import StepForm from "./components/stepForm/StepForm.vue";
import {useFormStepStore} from "./components/stepForm/formStore.ts";

const store = useFormStepStore()
function onSubmit() {
  console.log('submit', store.$state)
}
</script>

<template>
  <HelloWorld />
  <StepForm  @submit="onSubmit"/>
</template>

<style scoped>
</style>
