<script setup lang="ts">
import StepWrapper from "./components/StepWrapper.vue";
import {ref} from "vue";

const value = ref<string | null>(null);

</script>

<template>
  <StepWrapper>
    <label>
      Humanoïde
      <input type="radio" name="type" value="human"  v-model="value"/>
    </label>
    <label>
      IA
      <input type="radio" name="type" value="ia" v-model="value" />
    </label>
    <label>
      Cybord
      <input type="radio" name="type" value="cyborg"  v-model="value"/>
    </label>
  </StepWrapper>
</template>

<style scoped>

</style>