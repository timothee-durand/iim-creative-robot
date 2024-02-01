<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";
import TitleNeon from "../../../base/TitleNeon.vue";
import {useStore} from "../../../base/styleStore.ts";

const store = useFormStepStore()
const storeCss = useStore()
const NAME = 'connexion'

const options = [
  { value: 'rj45', label: 'RJ45', icon: 'src/components/stepForm/steps/port/rj45.svg' },
  { value: 'jack', label: 'Jack', icon: 'src/components/stepForm/steps/port/jack.svg' },
  { value: 'usb', label: 'USB', icon: 'src/components/stepForm/steps/port/usb.svg' }
];

const updatePort = (port : string) => {
  storeCss.setSize(port)
}
</script>

<template>
  <StepWrapper>
    <template #question>
      <TitleNeon text="Port" tag="h3" />
    </template>
    <template #description>
      Choose the preferred <b>body organism</b> type for optimal functionality. Specify the materials, forms, and aesthetic
      features that align with your preferences. This selection will not only enhance your physical compatibility but
      also contribute to refining the algorithm's ability to identify suitable matches.
    </template>
    <RadioInput v-for="option in options" :key="option.value" :name="NAME" v-model="store.port" :value="option.value" @change="updatePort(option.value)">
      <template #icon>
        <img :src="option.icon">
      </template>
      <template #description>
        {{ option.label }}
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>
img {
  max-height: 100px;
}
</style>
