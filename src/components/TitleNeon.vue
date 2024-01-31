<script>
import {useStore} from './styleStore.ts';
import { ref } from 'vue';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
  },
  setup() {
    const store = useStore();
    const isBlinking = ref(false);

    // Déclencher le clignotement
    setInterval(() => {
      setInterval(() => {
        isBlinking.value = !isBlinking.value;
      }, 100);
    }, 3000);

    return { store, isBlinking };
  }
}
</script>

<template>
  <div class="container-title">
    <component class="title font-hybrid" :is="tag">{{ text }}</component>
    <span :class="`title-back font-hybrid ${ isBlinking ? 'blinking' : '' }`"
          :style="{'text-shadow' : `0 0 25px ${store.background}, 0 0 25px ${store.background}, 0 0 25px ${store.background}`, '-webkit-text-stroke-color': store.background}">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.container-title {
  position: relative;
  height: 7rem;
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
    font-size: 3rem;
    & + span {
      font-size: 3rem;
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
    color: #000;
    -webkit-text-stroke-width: 3px;
  }
}

/* Animation pour le clignotement */
.blinking {
  animation: blink 1s linear infinite;
}

@keyframes blink {
0%{ opacity: 0; }
1%{ opacity: 1; }
}

</style>
