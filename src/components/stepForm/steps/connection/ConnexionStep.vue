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
    <RadioInput :name="NAME" v-model="store.connexion" value="wifi">
      <template #icon>
        <img src="./wifi.svg">
      </template>
      <template #description>
        Wifi<br/>
        For a stable
        long-term connection
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.connexion" value="bluetooth">
      <template #icon>
        <img src="./bluetooth.svg">
      </template>
      <template #description>
        Bluetooth<br/>
        For an unsecure
        short-term connection
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.connexion" value="wired">
      <template #icon>
        <img src="./cable.svg">
      </template>
      <template #description>
        Wired<br/>
        Watch out for
        the virus
      </template>
    </RadioInput>

  </StepWrapper>
</template>

<style scoped>
img {
  max-width: 60px;
}
</style>