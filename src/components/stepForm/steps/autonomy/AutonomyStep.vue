<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import {computed, onMounted, ref} from "vue";

const store = useFormStepStore()
const slider = ref<HTMLInputElement | null>(null)
const fillPercentage = ref(0)

function onInput() {
  if (!slider.value) return;
  fillPercentage.value = (100 * (slider.value.value - slider.value.min)) / (slider.value.max - slider.value.min);
}

const inputStyle = computed(() => {
  return {
    '--fill-percentage': `${fillPercentage.value}%`,
  }
})
onMounted(onInput)
</script>

<template>
  <StepWrapper>
    <template #question>
      AUTONOMY
    </template>
    <template #description>
      Define your collaborative dynamics by selecting the <b>desired level of autonomy</b> for your partner. Specify autonomy
      preferences, outlining the extent to which your partner can <b>operate independently</b>. Your meticulous selection of
      autonomy levels ensures a balanced and efficient partnership, optimizing the collaborative experience within the
      algorithm's parameters. Tailoring this setting guarantees a <b>synchronized and effective</b> collaboration tailored to
      your unique requirements.
    </template>
    <input @input="onInput" :style="inputStyle" ref="slider" type="range" min="0" max="100"
           v-model.number="store.autonomy">
  </StepWrapper>
</template>

<style scoped lang="scss">
$color-primary: var(--range-color);
$track-color: transparent !default;
$thumb-color: $color-primary !default;

$thumb-radius: 20px !default;
$thumb-height: 40px !default;
$thumb-width: 40px !default;

$track-width: 330px !default;
$track-height: 10px !default;
$track-shadow-color: rgba(0, 0, 0, .2) !default;
$track-border-width: 5px !default;
$track-border-color: $color-primary !default;

$track-radius: 25px !default;

@mixin track {
  cursor: pointer;
  height: $track-height;
  transition: all .2s ease;
  width: $track-width;
}

@mixin thumb {
  background: $thumb-color;
  border-radius: $thumb-radius;
  cursor: grab;
  height: $thumb-height;
  width: $thumb-width;
}

[type='range'] {
  --range-color: #CC33CA;
  -webkit-appearance: none;
  margin: calc($thumb-height / 2) 0;
  border-radius: 10px;
  width: $track-width;
  color: transparent;
  background: linear-gradient(90deg, color-mix(in srgb, $color-primary, transparent min(70%, calc(100% - var(--fill-percentage)))) var(--fill-percentage), transparent calc(var(--fill-percentage) + 0.1%));
  box-shadow: 0 0 10px $color-primary, 0 0 40px $color-primary;
  margin: 20px auto 0 auto;

  &:focus {
    outline: 0;

    &::-webkit-slider-runnable-track {
      background: $track-color;
    }

    &::-ms-fill-lower {
      background: $track-color;
    }

    &::-ms-fill-upper {
      background: $track-color;
    }
  }

  &::-webkit-slider-runnable-track {
    @include track;

  }

  &::-webkit-slider-thumb {
    @include thumb;
    -webkit-appearance: none;
    margin-top: -15px;
    box-shadow: 0 0 10px $color-primary, 0 0 40px $color-primary;

  }

  &::-moz-range-track {
    @include track;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;

  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &::-ms-track {
    @include track;
    background: transparent;
    border-color: transparent;
    border-width: ($thumb-height / 2) 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-fill-upper {
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius * 2;
  }

  &::-ms-thumb {
    @include thumb;
    margin-top: 0;
  }
}
</style>