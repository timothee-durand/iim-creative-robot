<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";
import TitleNeon from "../../../base/TitleNeon.vue";
import {useStore} from "../../../base/styleStore.ts";

const store = useFormStepStore()
const storeCss = useStore()
const NAME = 'processeur'

const options = [
  { value: 'ecologic', label: 'Eco-Logic', icon: 'src/components/stepForm/steps/hardware/ecologic.jpg' },
  { value: 'virtusync', label: 'VirtuSync PentaCore 360', icon: 'src/components/stepForm/steps/hardware/virtusync.jpg' },
  { value: 'hyperthread', label: 'HyperThread Titan XJ-3', icon: 'src/components/stepForm/steps/hardware/hyperthread.jpg' }
];

const updateAnim = (type:string) => {
  storeCss.setAnimation(type)
}
</script>

<template>
  <StepWrapper>
    <template #question>
      <TitleNeon text="Hardware" tag="h3" />
    </template>
    <template #description>
      Specify the compatibility requirements for <b>data exchange</b> and <b>connection interfaces</b>. Input your preferences
      regarding the port type that best aligns with your technical specifications. This selection is vital for
      establishing a robust and efficient <b>linkage</b> between you and your partner. Your input in defining the port type
      ensures a smooth and effective connection, facilitating <b>optimal data sharing</b> and collaborative functioning within
      the algorithm's framework.
    </template>
    <RadioInput v-for="option in options" :key="option.value" :name="NAME" v-model="store.processeur" :value="option.value" @change="updateAnim(option.value)">
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
