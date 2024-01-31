<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="step">
      <div class="step__question">
        <slot name="question"/>
      </div>
      <div class="step__description">
        <slot name="description"/>
      </div>
      <div class="step__input">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 0 2rem;
}
.step {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: 1060px;

  &__question {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &__input {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 -25px ;
  }
}
</style>