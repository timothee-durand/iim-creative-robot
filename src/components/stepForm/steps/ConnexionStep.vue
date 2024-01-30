<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";
const store = useFormStepStore()
</script>

<template>
  <StepWrapper>
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