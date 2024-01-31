<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";

const store = useFormStepStore()
const NAME = 'processeur'
</script>

<template>
  <StepWrapper>
    <template #question>
      PORT
    </template>
    <template #description>
      Specify the compatibility requirements for <b>data exchange</b> and <b>connection interfaces</b>. Input your preferences
      regarding the port type that best aligns with your technical specifications. This selection is vital for
      establishing a robust and efficient <b>linkage</b> between you and your partner. Your input in defining the port type
      ensures a smooth and effective connection, facilitating <b>optimal data sharing</b> and collaborative functioning within
      the algorithm's framework.
    </template>
    <RadioInput :name="NAME" v-model="store.processeur" value="eco-logic">
      <template #icon>
        <img src="./ecologic.jpg">
      </template>
      <template #description>
        RJ45
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.processeur" value="virtu-sync">
      <template #icon>
        <img src="./virtusync.jpg">
      </template>
      <template #description>
        VirtuSync PentaCore 360
      </template>
    </RadioInput>
    <RadioInput :name="NAME" v-model="store.processeur" value="hyper-thread">
      <template #icon>
        <img src="./hyperthread.jpg">
      </template>
      <template #description>
        HyperThread Titan XJ-3
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>
img {
  max-width: 120px;
}
</style>