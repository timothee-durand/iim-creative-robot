<script setup lang="ts">
import {useStore} from "../../components/base/styleStore.ts";
import {ref} from "vue";

const store = useStore();
const isBlinking = ref(false);
</script>

<template>
    <div class="hero-header">
        <div class="hero-header__wrapper">
            <div class="hero-header__web">
                <div class="hero-header__web__clip">
                    <img src="../../assets/robot-header.png" class="hero-header__img" alt="robot lady">
                </div>
            </div>
            <span class="hero-header__date">/2050</span>
            <h1 :class="`hero-header__title title-back ${store.font} ${ isBlinking ? 'blinking' : '' }`"
          :style="{'text-shadow' : `0 0 25px ${store.background}, 0 0 25px ${store.background}, 0 0 25px ${store.background}`, '-webkit-text-stroke-color': store.background, opacity: store.animation === 'ecologic' ? 0 : 1}">Cyber <br><span class="hero-header__title-float">Spark</span></h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero-header {
    &__wrapper {
        position: relative;
        height: 650px;
        margin: 0 110px 0 20vw;
    }
    &__web {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 55% 100%);
        background: white;
        height: 100%;
        width:100%;
        position: relative;
        &__clip {
            position: absolute;
            top: 0px; 
            left: 1px;
            width: calc(100% - 2px);
            height: calc(100% - 1px);
            background: black;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 55% 100%);
        }
    }
    &__date {
        position: absolute;
        top: 70px;
    }
    &__title {
        position: absolute;
        top: 80px;
        font-size: 120px;
        &-float {
            margin-left: 60px;
        }
    }
    &__img {
        position: absolute;
        bottom: -10px;
        left: 50%;
    }
}
</style>