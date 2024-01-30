<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";
import RadioInput from "./components/RadioInput.vue";

const store = useFormStepStore()
const NAME = 'type'
</script>

<template>
  <StepWrapper>
    <template #question>
      Quel type de robot êtes-vous ?
    </template>
    <RadioInput :name="NAME" v-model="store.type" value="human">
      <template #icon>
        <img src="./vue.svg">
      </template>
      <template #description>
        Humanoïde
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.type" value="ia">
      <template #icon>
        <img src="./vue.svg">
      </template>
      <template #description>
        IA
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.type" value="cyborg">
      <template #icon>
        <img src="./vue.svg">
      </template>
      <template #description>
        Cyborg
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>

</style>