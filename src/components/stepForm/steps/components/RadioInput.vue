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
  <label>
    <slot name="description" />
    <input type="radio" name="connexion" value="wifi" @change="$emit('update:modelValue', value)"/>
  </label>
</template>

<style scoped>

</style>