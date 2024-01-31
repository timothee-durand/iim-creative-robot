<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";

const store = useFormStepStore()
const NAME = 'connexion'
</script>

<template>
  <StepWrapper>
    <template #question>
      CONNECTION
    </template>
    <template #description>
      Choose the preferred <b>body organism</b> type for optimal functionality. Specify the materials, forms, and aesthetic
      features that align with your preferences. This selection will not only enhance your physical compatibility but
      also contribute to refining the algorithm's ability to identify suitable matches.
    </template>
    <RadioInput :name="NAME" v-model="store.port" value="rj45">
      <template #icon>
        <img src="./rj45.svg">
      </template>
      <template #description>
        RJ45
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.port" value="jack">
      <template #icon>
        <img src="./jack.svg">
      </template>
      <template #description>
        Jack
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.port" value="usb">
      <template #icon>
        <img src="./usb.svg">
      </template>
      <template #description>
        Usb
      </template>
    </RadioInput>

  </StepWrapper>
</template>

<style scoped>
img {
  max-height: 100px;
}
</style>