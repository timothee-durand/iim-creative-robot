<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {useFormStepStore} from "../formStore.ts";

const store = useFormStepStore()

</script>

<template>
  <StepWrapper>
    <label>
      Humanoïde
      <input type="radio" name="type" value="human"  v-model="store.type"/>
    </label>
    <label>
      IA
      <input type="radio" name="type" value="ia" v-model="store.type" />
    </label>
    <label>
      Cybord
      <input type="radio" name="type" value="cyborg"  v-model="store.type"/>
    </label>
  </StepWrapper>
</template>

<style scoped>

</style>