<template>
  <h1>Test couleurs</h1>

  <div class="card" :class="selectedColor">
    <div v-for="option in options" :key="option.id">
      <input type="radio" :value="option.class" v-model="selectedColor" @change="updateSelectedColor">
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
import { useStore } from './styleStore.js';

export default {
  setup() {
    const store = useStore();

    const options = [
      { id: 1, label: 'Rose', class: 'background-sexe' },
      { id: 2, label: 'Bleu', class: 'background-friend' },
      { id: 3, label: 'Vert', class: 'background-love'}
      // Ajoutez d'autres options de couleur au besoin
    ];

    const selectedColor = store.selectedColor;

    const updateSelectedColor = (color) => {
      store.setSelectedColor(color);
    };

    return { options, selectedColor, updateSelectedColor };
  }
};
</script>
