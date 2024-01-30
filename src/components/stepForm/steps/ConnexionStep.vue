<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";
import RadioInput from "./components/RadioInput.vue";
const store = useFormStepStore()
const NAME = 'connexion'
</script>

<template>
  <StepWrapper>
    <template #question>
      Quel type de connexion avez-vous ?
    </template>
    <RadioInput :name="NAME" v-model="store.connexion" value="wifi">
      <template #description>
        Wifi
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.connexion" value="jack">
      <template #description>
        Jack
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.connexion" value="bluetooth">
      <template #description>
        Bluetooth
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>

</style>