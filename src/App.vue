<script setup lang="ts">
import StepForm from "./components/stepForm/StepForm.vue";
import {useFormStepStore} from "./components/stepForm/formStore.ts";
import {useStore} from "./components/base/styleStore.ts";

const store = useFormStepStore()
const storeCss = useStore()
function onSubmit() {
  console.log('submit', store.$state)
}
</script>

<template>
  <StepForm :style="{'font-size': storeCss.size, opacity: storeCss.opacity}" @submit="onSubmit"/>
</template>

<style scoped>
</style>
