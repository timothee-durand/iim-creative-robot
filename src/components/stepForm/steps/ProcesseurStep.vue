<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";
import RadioInput from "./components/RadioInput.vue";
const store = useFormStepStore()
const NAME = 'processeur'
</script>

<template>
  <StepWrapper>
    <template #question>
      Quel type de connexion avez-vous ?
    </template>
    <RadioInput :name="NAME" v-model="store.processeur" value="eco-logic">
      <template #icon>
        <img src="./components/vue.svg">
      </template>
      <template #description>
        EcoLogic Processor Z3
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.processeur" value="virtu-sync">
      <template #icon>
        <img src="./components/vue.svg">
      </template>
      <template #description>
        VirtuSync PentaCore 360
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.processeur" value="hyper-thread">
      <template #icon>
        <img src="./components/vue.svg">
      </template>
      <template #description>
        HyperThread Titan XJ-3
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>

</style>