<script setup lang="ts">
import SwipeCard from './components/cards/SwipeCard.vue';
</script>

<template>
  <div>
    <SwipeCard/>
  </div>
</template>

<style scoped>
html{
  background-color: black !important;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
