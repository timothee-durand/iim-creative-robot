<template>
  <h1>Test couleurs</h1>

  <div class="card">
    <div v-for="option in options" :key="option.id">
      <input type="radio" :value="option.class" v-model="selectedClass" @change="updateBodyClass">
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, label: 'Rose', class: 'background-sexe'},
        { id: 2, label: 'Bleu', class: 'background-friend' },
        { id: 3, label: 'Vert', class: 'background-love' }
      ],
      selectedClass: '' // Classe par défaut
    };
  },
  methods: {
    updateBodyClass() {
      document.body.className = this.selectedClass;
    }
  }
};
</script>
