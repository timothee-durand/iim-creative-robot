<script lang="ts">
export default {
  props: {
    animatePath: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<template>
<svg width="1152" height="347" viewBox="0 0 1152 347" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1151.5" y1="2.18557e-08" x2="1151.5" y2="112" stroke="white"/>
<line x1="1151.35" y1="111.354" x2="915.353" y2="346.354" stroke="white"/>
<line x1="915" y1="346.5" x2="698" y2="346.5" stroke="white"/>
<line x1="323" y1="345.5" y2="345.5" stroke="white"/>
<line x1="697.999" y1="346.5" x2="322.999" y2="345.497" stroke="white"/>
<path :class="{ 'animated-path': animatePath }" id="anim" d="M 1151.5 0 V 112 L 915.353 346.354 H 698 L 322.999 345.497 H 0" stroke="white" stroke-width="4"/>


</svg>
</template>

<style scoped>
.animated-path {
  animation: path 2s linear infinite;
}
#anim {
  stroke-dasharray: 160px;
  stroke-linecap: round;
  stroke-dashoffset: -100px;
}

@keyframes path {
  0% {
    stroke-dashoffset: -100px;
  }

  100% {
    stroke-dashoffset: -400px;
  }
}

</style>