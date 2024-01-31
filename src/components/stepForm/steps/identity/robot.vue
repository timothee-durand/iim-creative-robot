<template>
<svg width="692" height="221" viewBox="0 0 692 221" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#neon)">
  <rect x="661" y="27" width="6" height="46" rx="3" fill="var(--robot-color)"/>
  <path d="M617 25H661C664.314 25 667 27.6863 667 31V31H617V25Z" fill="var(--robot-color)"/>
  <path d="M617 25H623V74V74C619.686 74 617 71.3137 617 68V25Z" fill="var(--robot-color)"/>
  <path d="M617 69H667V69C667 72.3137 664.314 75 661 75H623C619.686 75 617 72.3137 617 69V69Z" fill="var(--robot-color)"/>
</g>
<g filter="url(#neon)">
  <circle cx="634" cy="42" r="4" fill="var(--robot-color)"/>
</g>
<g filter="url(#neon)">
  <circle cx="650" cy="42" r="4" fill="var(--robot-color)"/>
</g>
<line x1="0.5" y1="76" x2="0.500002" y2="26" stroke="white"/>
<path d="M0 47.5H592H593C593.268 21.4968 614.433 1 640.5 1C666.734 1 688 22.2665 688 48.5C688 74.5667 667.503 95.2318 641.5 95.5L641.5 96.0091L640.5 151.009L2.05216 218.497" stroke="white"/>
<path class="animated-path" d="M0 47.5H592H593C593.268 21.4968 614.433 1 640.5 1C666.734 1 688 22.2665 688 48.5C688 74.5667 667.503 95.2318 641.5 95.5L641.5 96.0091L640.5 151.009L2.05216 218.497" stroke="white" stroke-width="3"/>
<defs>
  <filter id="neon" x="592" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="7.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.2 0 0 0 0 0.792157 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_47"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="7.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.2 0 0 0 0 0.792157 0 0 0 1 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_93_47" result="effect2_dropShadow_93_47"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="12.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.2 0 0 0 0 0.792157 0 0 0 1 0"/>
    <feBlend mode="normal" in2="effect2_dropShadow_93_47" result="effect3_dropShadow_93_47"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_93_47" result="shape"/>
  </filter>
</defs>
</svg>
</template>
<style scoped>
svg {
  --robot-color: #CC33CA;
}
.animated-path {
  animation: path 6s linear infinite;
  stroke-dasharray: 80px;
  stroke-linecap: round;
}

@keyframes path {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -160px;
  }
}

</style>