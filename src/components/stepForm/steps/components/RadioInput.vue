<script setup lang="ts">
defineProps<{
  name: string
  value: string
  modelValue: string | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="step-radio">
    <span class="step-radio__icon">
      <slot name="icon"/>
    </span>
    <span class="step-radio__description">
      <slot name="description"/>
    </span>
    <input
        class="step-radio__input"
        type="radio"
        name="connexion"
        value="wifi"
        :checked="value === modelValue"
        @change="$emit('update:modelValue', value)"
    />
  </label>
</template>

<style scoped lang="scss">
.step-radio {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:has(:checked) {
    background-color: red;
  }

  &__input {
    display: none;
  }
}
</style>