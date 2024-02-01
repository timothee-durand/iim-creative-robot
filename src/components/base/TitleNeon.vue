<script setup>
import {useStore} from "./styleStore.ts";
import {ref, watch, watchEffect} from 'vue';

const store = useStore();
const isBlinking = ref(false);

defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
})

// Déclencher le clignotement
const interval = ref()
const blinking = () => {
  if (store.animation !== 'hyperthread') {
    interval.value = setInterval(() => {
      isBlinking.value = !isBlinking.value;
    });
  } else {
    clearInterval(interval.value)
    isBlinking.value = false
  }
}

blinking();

watch(store, () => {
  blinking();
});

</script>

<template>
  <div :class="`container-title ${store.font} `" :style="{'height' : (tag === 'h1' || tag === 'h2') ? '7rem' : '5rem'}">
    <component class="title" :is="tag">{{ text }}</component>
    <span :class="`title-back ${ isBlinking ? 'blinking' : '' }`"
          :style="{'text-shadow' : `0 0 25px ${store.background}, 0 0 25px ${store.background}, 0 0 25px ${store.background}`, '-webkit-text-stroke-color': store.background, opacity: store.animation === 'ecologic' ? 0 : 1}">{{
        text
      }}</span>
  </div>
</template>

<style scoped lang="scss">
.container-title {
  position: relative;
  text-transform: uppercase;
  h1, h2 {
    margin: 0;
    font-size: 6rem;
    & + span {
      font-size: 6rem;
    }
  }
  h3 {
    margin: 0;
    font-size: 4rem;
    & + span {
      font-size: 4rem;
    }
  }
  .title {
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    color: #FFF;
  }
  .title-back {
    z-index: 5;
    top: 0.5rem;
    left: 1rem;
    position: absolute;
    color: var(--background-black);
    -webkit-text-stroke-width: 3px;
  }
}
/* Animation pour le clignotement */
.blinking {
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
}
</style>
