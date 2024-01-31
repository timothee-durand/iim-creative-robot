<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";
import {useStore} from "../../../base/styleStore.ts";
import TitleNeon from "../../../base/TitleNeon.vue";

const store = useFormStepStore()
const storeCss = useStore();
const NAME = 'type'

const options = [
  { value: 'human', label: 'Humanoïde', icon: 'src/components/stepForm/steps/type/human.png' },
  { value: 'ia', label: 'IA', icon: 'src/components/stepForm/steps/type/robot.png' },
  { value: 'cyborg', label: 'Cyborg', icon: 'src/components/stepForm/steps/type/cyborg.png' }
];

const updateFont = (font) => {
  storeCss.setFont(font);
};
</script>

<template>
  <StepWrapper>
    <template #question>
      <TitleNeon tag="h3" text="Preference" />
    </template>
    <template #description>
      Choose the preferred <b>body organism type</b> for optimal functionality. Specify the materials, forms, and aesthetic
      features that align with your preferences. This selection will not only enhance your <b>physical compatibility</b> but
      also contribute to refining the algorithm's ability to <b>identify suitable matches</b>.
    </template>
    <RadioInput v-for="option in options" :key="option.value" :name="NAME" v-model="store.type" :value="option.value" @change="updateFont(option.value)">
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
  max-width: 120px;
}
</style>
