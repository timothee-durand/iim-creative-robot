<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";

const store = useFormStepStore()
const NAME = 'type'
</script>

<template>
  <StepWrapper>
    <template #question>
      Preference
    </template>
    <template #description>
      Choose the preferred body organism type for optimal functionality. Specify the materials, forms, and aesthetic
      features that align with your preferences. This selection will not only enhance your physical compatibility but
      also contribute to refining the algorithm's ability to identify suitable matches.
    </template>
    <RadioInput :name="NAME" v-model="store.type" value="human">
      <template #icon>
        <img src="./human.png">
      </template>
      <template #description>
        Humanoïde
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.type" value="ia">
      <template #icon>
        <img src="./robot.png">
      </template>
      <template #description>
        IA
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.type" value="cyborg">
      <template #icon>
        <img src="./cyborg.png">
      </template>
      <template #description>
        Cyborg
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>

</style>