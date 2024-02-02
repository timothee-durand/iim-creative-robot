<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import RadioInput from "../components/RadioInput.vue";
import TitleNeon from "../../../base/TitleNeon.vue";
import {useStore} from "../../../base/styleStore.ts";

import WifiImg from './wifi.svg'
import BluetoothImg from './bluetooth.svg'
import CableImg from './cable.svg'

const store = useFormStepStore()
const storeCss = useStore();
const NAME = 'connexion'

const options = [
  {
    value: 'wifi',
    label: 'Wifi',
    icon: WifiImg,
    subText: 'For a stable long-term connection'
  },
  {
    value: 'bluetooth',
    label: 'Bluetooth',
    icon: BluetoothImg,
    subText: 'For an unsecure short-term connection'
  },
  {
    value: 'wired',
    label: 'Wired',
    icon: CableImg,
    subText: 'Watch out for the virus'
  }
];

const updateColor = (type:string) => {
  storeCss.setBackground(type);
};
</script>

<template>
  <StepWrapper>
    <template #question>
      <TitleNeon tag="h3" text="Connexion"/>
    </template>
    <template #description>
      Choose the preferred <b>body organism</b> type for optimal functionality. Specify the materials, forms, and
      aesthetic
      features that align with your preferences. This selection will not only enhance your physical compatibility but
      also contribute to refining the algorithm's ability to identify suitable matches.
    </template>
    <RadioInput v-for="option in options" :key="option.value" :name="NAME" v-model="store.connexion" @change="updateColor(option.value)"
                :value="option.value">
      <template #icon>
        <img :src="option.icon">
      </template>
      <template #description>
        {{ option.label }}
        <br>
        <span class="subText">{{ option.subText }}</span>
      </template>
    </RadioInput>
  </StepWrapper>
</template>

<style scoped>
img {
  max-width: 60px;
}
.subText {
  font-size: 0.9rem;
}
</style>
