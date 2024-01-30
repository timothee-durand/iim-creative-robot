<script setup lang="ts">

</script>

<template>
  <div class="step">
    <div class="step__question">
      <slot name="question"/>
    </div>
    <div class="step__input">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>