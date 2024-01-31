<template>
  <TitleNeon text="Profil"  tag="h2"/>

  <div class="questions-container" :style="{ 'background-color': store.background }">
    <div v-for="option in options" :key="option.id">
      <input type="radio" :value="option.value" v-model="selectedColor" @change="updateSelectedColor(option.value)">
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
import { useStore } from './styleStore.ts';
import TitleNeon from "./TitleNeon.vue";

export default {
  components: {TitleNeon},
  setup() {
    const store = useStore();

    const options = [
      { id: 1, label: 'Rose', value: 'var(--background-color-wifi)' },
      { id: 2, label: 'Bleu', value: 'var(--background-color-jack)' },
      { id: 3, label: 'Vert', value: 'var(--background-color-bluetooth)'}
    ];

    let selectedColor = store.background;

    const updateSelectedColor = (color) => {
      selectedColor = color;
      store.setBackground(color);
    };

    return { options, store, selectedColor, updateSelectedColor };
  }
};
</script>
