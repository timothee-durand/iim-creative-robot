<template>
    <div class="hero-header">
        <div class="hero-header__wrapper">
            <div class="hero-header__web">
                <div class="hero-header__web__clip"></div>
            </div>
            <span class="hero-header__date"></span>
            <h1 class="hero-header__title"></h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero-header {
    &__wrapper {
        height: 650px;
    }
    &__web {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 65% 100%);
        border: 1px solid white;
        height: 100%;
        &__clip {
            position: absolute;
            top: 2px; 
            left: 2px;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 65% 100%);
        }
    }
}
</style>