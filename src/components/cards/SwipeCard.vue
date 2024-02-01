<script lang="ts">
import Flux from './flux.vue';
import TitleNeon from "../base/TitleNeon.vue";
import {useStore} from "../base/styleStore";

export default {
  components: {
    TitleNeon,
    Flux
  },
  computed: {
    // Fonction pour démarrer l'animation
    imageCount() {
      if (this.storeCss.animation === 'hyperthread') return 40
      if (this.storeCss.animation === 'ecologic') return 5
      return 20
    }
  },
  data() {
    return {
      isAnimating: false,
      currentCardIndex: 0,
      storeCss: useStore(),
      cards: [
        {
          title: 'IDTA-734965',
          description: 'Description 1',
          imageSrc: 'imgCard1.png',
          showDetails: false,
          showImage: true,
          type: 'Robotic',
          processor: 'EcoLogic Processor Z3',
          connection: 'Wi-Fi',
          connectionSrc: 'wifi.svg',
          port: 'USB',
          energyAutonomy: '48h',
          isShrinking: false,
          isExpanding: false,
          top: "0px",
        },
        {
          title: 'RXTA-827391',
          description: 'Description 2',
          imageSrc: 'face2.png',
          showDetails: false,
          showImage: true,
          type: 'Cyborg',
          processor: 'HyperThread Titan XJ-3',
          connection: 'Bluetooth',
          connectionSrc: 'bluetooth.svg',
          port: 'JACK',
          energyAutonomy: '12h',
          isShrinking: false,
          isExpanding: false,
          top: '-2Opx',
        },
        {
          title: 'JNDA-502748',
          description: 'Description 3',
          imageSrc: 'face6.avif',
          showDetails: false,
          showImage: true,
          type: 'AI',
          processor: 'VirtuSync PentaCore 360 ',
          connection: 'Wired',
          connectionSrc: 'wired.svg',
          port: 'RJ45',
          energyAutonomy: '24h',
          isShrinking: false,
          isExpanding: false,
          top: "-10px",
        },
        {
          title: 'QLZA-416830',
          description: 'Description 4',
          imageSrc: 'face4.jpg',
          showDetails: false,
          showImage: true,
          type: 'Cyborg',
          processor: 'EcoLogic Processor Z3',
          connection: 'Wi-Fi',
          connectionSrc: 'wifi.svg',
          port: 'RJ45',
          energyAutonomy: '8h',
          isShrinking: false,
          isExpanding: false,
          top: "0px",
        },
      ],
    };
  },

  methods: {
    startAnimation() {
      const images = document.querySelectorAll('.card-container-all .svg-container .heart');
      images.forEach((image) => {
        const delay = Math.random() * 1500;
        let size = Math.random() * 100 + 50
        if (this.storeCss.size === 'var(--size-jack)') size = Math.random() * 50
        if (this.storeCss.size === 'var(--size-rj45)') size = Math.random() * 500 + 50
        const leftPosition = Math.random() * window.innerWidth;
        setTimeout(() => {
          image.style.transform = `rotate(${Math.random() * 360}deg)`;
          image.style.filter = `brightness(${Math.random() * 200}%)`;
          image.style.width = `${size}px`;
          image.style.left = `${leftPosition}px`;
          image.classList.add('falling');
        }, delay);
      });

      // Réinitialiser la position initiale après un certain délai
      setTimeout(() => {
        images.forEach((image) => {
          image.style.transform = 'rotate(0deg)';
          image.style.filter = 'brightness(100%)';
          image.style.width = 'auto';
          image.style.left = 'auto';
          image.classList.remove('falling');
        });
      }, 3000);
    },
    anim() {
      const heart = document.getElementById('like');
      const container = document.getElementById('heart-container');
      const text = document.getElementById('match-text');
      heart.classList.add('grow');
      setTimeout(() => {
        text.classList.add('anim');
        setTimeout(() => {
          this.startAnimation();
          setTimeout(() => {
            container.classList.add('fadeDiv');
            setTimeout(() => {
              heart.classList.remove('grow');
              text.classList.remove('anim');
              container.classList.remove('fadeDiv');
            }, 5000)
          }, 1000)
        }, 2000)
      }, 2000)
    },
    swipeLeftHandler() {
      if (this.currentCardIndex < this.cards.length - 1) {
        // Start animation for the current card
        this.cards[this.currentCardIndex].isShrinking = true;

        // Set isAnimating to true after the duration of the forward animation
        setTimeout(() => {
          this.isAnimating = true;
        }, 500); // Duration of the forward animation
        setTimeout(() => {
          this.isAnimating = false;
        }, 2000); // Duration of the forward animation

        setTimeout(() => {
          // End animation for the current card and increment index
          this.cards[this.currentCardIndex].isShrinking = false;
          this.currentCardIndex++;

          // Start reverse animation for the next card
          if (this.currentCardIndex < this.cards.length) {
            this.cards[this.currentCardIndex].isExpanding = true;

            setTimeout(() => {
              // End reverse animation for the next card
              this.cards[this.currentCardIndex].isExpanding = false;
            }, 1000); // Duration of the reverse animation
          }
        }, 2000); // Duration of the forward animation
      }
    },
    swipeRightHandler() {
      this.anim()
      if (this.currentCardIndex < this.cards.length - 1) {
        // Start animation for the current card
        this.cards[this.currentCardIndex].isShrinking = true;

        // Set isAnimating to true after the duration of the forward animation
        setTimeout(() => {
          this.isAnimating = true;
        }, 500); // Duration of the forward animation
        setTimeout(() => {
          this.isAnimating = false;
        }, 2000); // Duration of the forward animation

        setTimeout(() => {
          // End animation for the current card and increment index
          this.cards[this.currentCardIndex].isShrinking = false;
          this.currentCardIndex++;

          // Start reverse animation for the next card
          if (this.currentCardIndex < this.cards.length) {
            this.cards[this.currentCardIndex].isExpanding = true;

            setTimeout(() => {
              // End reverse animation for the next card
              this.cards[this.currentCardIndex].isExpanding = false;
            }, 1000); // Duration of the reverse animation
          }
        }, 2000); // Duration of the forward animation
      }
    },
    tapHandler() {
      const currentCard = this.cards[this.currentCardIndex];
      currentCard.showDetails = !currentCard.showDetails;
      currentCard.showImage = !currentCard.showImage; // Toggle image visibility
    },
  }
};


</script>

<template>
  <div class="card-container-all">
    <div class="svg-container">
      <svg v-for="index in imageCount" class="heart" :key="index" viewBox="0 0 70 64" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M35 11.7807C28.8021 4.55802 18.4452 2.32589 10.6796 8.93972C2.9139 15.5536 1.82059 26.6115 7.91902 34.4338C12.9895 40.9372 28.3343 54.6541 33.3636 59.0937C33.926 59.5904 34.2075 59.8387 34.5357 59.9362C34.8219 60.0213 35.1354 60.0213 35.422 59.9362C35.7502 59.8387 36.0313 59.5904 36.5941 59.0937C41.6234 54.6541 56.968 40.9372 62.0386 34.4338C68.137 26.6115 67.177 15.484 59.2779 8.93972C51.3787 2.39546 41.198 4.55802 35 11.7807Z"
              :stroke="storeCss.background" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <Flux :animatePath="isAnimating"/>
    <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" v-touch:tap="tapHandler"
         class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card"
           :class="{ 'shrink-to-line': card.isShrinking, 'line-to-shrink': card.isExpanding, 'special-animation': index === 2 }"
           v-show="index === currentCardIndex">
        <div class="card-content">
          <img :src="card.imageSrc" alt="Card Image"/>
          <div class="card-text">
            <div class="flex">
              <div class="flex-text">
                <h3>{{ card.title }}</h3>
                <img :src="card.connectionSrc" alt="" class="svgConn" :style="{'margin-top': card.top}">
              </div>
              <img src="/leftAcces2.svg" alt="" class="svgRight">
            </div>
            <div v-if="card.showDetails">
              <div class="detail-item">
                <span class="detail">
                    Connection: {{ card.connection }}
                </span>
              </div>
              <div class="detail-item">
                <span class="detail">
                    <p>CPU: {{ card.processor }}</p>
                </span>
              </div>
              <div class="detail-item">
                <span class="detail">
                    <p>Port: {{ card.port }}</p>
                </span>
              </div>
              <p>Energy Autonomy: {{ card.energyAutonomy }}</p>
            </div>
          </div>
          <div v-if="index === 2" class="heart"></div>
        </div>
      </div>
    </div>
    <div id="heart-container">
      <svg id="like" width="70" height="64" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M35 11.7807C28.8021 4.55802 18.4452 2.32589 10.6796 8.93972C2.9139 15.5536 1.82059 26.6115 7.91902 34.4338C12.9895 40.9372 28.3343 54.6541 33.3636 59.0937C33.926 59.5904 34.2075 59.8387 34.5357 59.9362C34.8219 60.0213 35.1354 60.0213 35.422 59.9362C35.7502 59.8387 36.0313 59.5904 36.5941 59.0937C41.6234 54.6541 56.968 40.9372 62.0386 34.4338C68.137 26.6115 67.177 15.484 59.2779 8.93972C51.3787 2.39546 41.198 4.55802 35 11.7807Z"
              :stroke="storeCss.background" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <TitleNeon tag="h2" text="It's a match" id="match-text"/>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 360px;
  margin: -255px auto 0;
}

.card {
  text-align: left;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 23px; /* Adjust padding as needed */
  user-select: none;
  background: url('border.svg') no-repeat center center; /* Path to your SVG */
  background-size: 100% 100%; /* Make the SVG fit the container */
}

.detail-item {
  position: relative;
  margin-bottom: 10px; /* Space between items */
}

.detail-item::after {
  content: '■';
  position: absolute;
  left: -10px;
  bottom: -8px;
  font-size: 12px;
  color: #FFFFFF;
}

.detail {
  border-bottom: 2px dashed #FFFFFF;
  display: inline-block;
  padding-bottom: 13px;
  width: 250px;
}


.card-text {
  padding: 0px 16px 16px;
  background-color: rgba(204, 51, 202, 0.3);
}

.card img {
  width: 100%;
  object-fit: cover;
  max-height: 300px;
  pointer-events: none;
}

.card h3 {
  margin: 0;
  padding-top: 19px;
}

.rotate-left {
  transform: rotate(30deg);
  transition: 1s;
  margin-left: 400px;
  cursor: e-resize;
  opacity: 0;
  z-index: 10;
}

.rotate-right {
  transform: rotate(-30deg);
  transition: 1s;
  opacity: 0;
  margin-left: -400px;
  cursor: w-resize;
  z-index: 10;
}

.d-none {
  display: none;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.svgRight {
  max-width: 83px;
}

.flex-text {
  position: relative;
  display: flex;
  align-items: center;
}

.svgConn {
  position: absolute;
  width: 38px !important;
  right: -101px;
  top: 52px;
}

.dashed-line {
  border-left: 2px dashed #FFFFFF; /* Adjust color as needed */
  position: relative;
  padding-left: 20px; /* Adjust spacing as needed */
}

.dashed-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 10px; /* Adjust size as needed */
  height: 10px; /* Adjust size as needed */
  background: url('cube.svg') no-repeat center center; /* Path to your cube SVG */
  background-size: cover; /* Adjust as needed */
}

@keyframes shrinkToLineAndMoveUp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(0.5);
    opacity: 1;
  }
  100% {
    transform: scaleY(0) scaleX(0.5); /* Move the line to the top */
    opacity: 0;
  }
}

@keyframes shrinktoline {
  0% {
    transform: scaleY(0) scaleX(0.5);
    opacity: 0;
  }
  50% {
    transform: scaleX(0.5); /* Shrink height to almost a line */
    opacity: 1;
  }
  100% {

    transform: scale(1);
    opacity: 1;
  }
}

.shrink-to-line {
  animation: shrinkToLineAndMoveUp 0.5s forwards;
}

.line-to-shrink {
  animation: shrinktoline 0.5s forwards;
}


.svg-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  pointer-events: none;

  .heart {
    visibility: hidden;
    top: -25%;
    position: absolute;
  }
}

.falling {
  animation: fall 2s forwards;
}

@keyframes fall {
  0% {
    visibility: visible;
    top: -25%;
  }
  90% {
    visibility: visible;
    top: 100%;
  }
  100% {
    top: 100%;
    visibility: hidden;
  }
}

@keyframes growHeart {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(20);
    opacity: 1;
  }
}

@keyframes fadeInText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeAnim {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fadeDiv {
  animation: fadeAnim 0.5s ease forwards;
}

#match-text {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 75%;
  opacity: 0;
  font-size: 3rem;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 100;

  &.anim {
    animation: fadeInText 1s ease forwards;
  }
}

#heart-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 45%;
  pointer-events: none;
}

#like {
  z-index: 100;
  opacity: 0;
  transform-origin: center;
}

#like.grow {
  animation: growHeart 2s ease forwards;
}

</style>
