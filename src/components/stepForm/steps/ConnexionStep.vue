<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";
const store = useFormStepStore()
</script>

<template>
  <StepWrapper>
    <template #question>
      Quel type de connexion avez-vous ?
    </template>
    <label>
      Wifi
      <input type="radio" name="connexion" value="wifi"  v-model="store.connexion"/>
    </label>
    <label>
      Jack
      <input type="radio" name="connexion" value="jack" v-model="store.connexion" />
    </label>
    <label>
      Bluetooth
      <input type="radio" name="connexion" value="bluetooth"  v-model="store.connexion"/>
    </label>
  </StepWrapper>
</template>

<style scoped>

</style>