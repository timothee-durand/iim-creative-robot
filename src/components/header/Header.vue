<script setup lang="ts">
import Heart from '../../assets/heart.svg';
</script>


<template>
    <div class="header">
        <div class="header__logo">
            CyberSpark
        </div>
        <div class="header__center">
        </div>
        <div class="header__icon">
            <div class="header__icon-semi-circle">
                <img class="heart" src="../../assets/heart.svg">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

@mixin web {
    border: 1px solid white;
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    &__logo {
        border: 1px solid white;
        padding: 24px 32px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__center {
        border-bottom: 1px solid white;
        width: 90%;
    }
    &__icon {
        border-radius: 50%;
        width: 170px;
        margin-right: 50px;
        display: flex;
        align-items: flex-end;
        &-semi-circle {
            position: relative;
            @include web;
            border-right-color: black;
            border-bottom-color: black;
            transform: rotate(135deg);
            height: 100px;
            width: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:before {
                content: "";
                position: absolute;
                top: 0;
                width: 1px;
                height: 100%;
                background: white;
                transform: rotate(-135deg) translateY(-100px);
            }
            .heart {
                transform: rotate(-135deg);
            }
        }
    }
}

</style>