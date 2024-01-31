<script>
import { useStore } from './styleStore.ts';
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
  setup(){
    const store = useStore();
    return {store}
  }
}
</script>

<template>
  <div class="container-title">
    <component class="title font-hybrid" :is="tag">{{text}}</component>
    <span class="title-back font-hybrid" :style="{'text-shadow' : `0 0 25px ${store.background}, 0 0 25px ${store.background}, 0 0 25px ${store.background}`, '-webkit-text-stroke-color': store.background}">{{text}}</span>
  </div>
</template>

<style scoped lang="scss">
.container-title {
  position: relative;
  height: 7rem;
  text-transform: uppercase;
  h1, h2{
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
    top: 0.9rem;
    left: 1.45rem;
    position: absolute;
    color: #000;
    -webkit-text-stroke-width: 3px;
  }
}

</style>
