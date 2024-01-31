<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
const store = useFormStepStore()
</script>

<template>
  <StepWrapper>
    <template #question>
      Quel est ton niveau d’autonomie de batterie ?
    </template>
    <input type="range" min="0" max="100" v-model.number="store.autonomy">
  </StepWrapper>
</template>

<style scoped>

</style>