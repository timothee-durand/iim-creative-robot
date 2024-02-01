
<script lang="ts">
import Flux from './flux.vue';

export default {
    
    components:{
        Flux
    },

    data() {
        return {
        isAnimating: false,
        currentCardIndex: 0,
        cards: [
            { title: 'IDTA-734965', description: 'Description 1', imageSrc: 'imgCard1.png', showDetails: false, showImage: true, type: 'Robotic', processor: 'EcoLogic Processor Z3',connection:'Wi-Fi', connectionSrc: 'wifi.svg', port : 'USB', energyAutonomy: '48h', isShrinking: false, isExpanding: false},
            { title: 'RXTA-827391', description: 'Description 2', imageSrc: 'face2.png', showDetails: false, showImage: true, type: 'Cyborg', processor: 'HyperThread Titan XJ-3', connection:'Wi-Fi',connectionSrc: 'bluetooth.svg', port : 'JACK', energyAutonomy: '12h', isShrinking: false, isExpanding: false},
            { title: 'JNDA-502748', description: 'Description 3', imageSrc: 'face6.avif', showDetails: false, showImage: true, type: 'AI', processor: 'VirtuSync PentaCore 360 ',connection:'Wi-Fi' ,connectionSrc: 'wired.svg', port : 'RJ45', energyAutonomy: '24h', isShrinking: false, isExpanding: false},
            { title: 'QLZA-416830', description: 'Description 4', imageSrc: 'face4.jpg', showDetails: false, showImage: true, type: 'Cyborg', processor: 'EcoLogic Processor Z3',connection:'Wi-Fi' ,connectionSrc: 'bluetooth.svg', port : 'RJ45', energyAutonomy: '8h', isShrinking: false, isExpanding: false},

        ],
        };
    },

    methods: {
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
            if (this.currentCardIndex > 0) {
                const currentCardSelector = `.card:nth-child(${this.currentCardIndex + 1})`;
                const currentCard = this.$el.querySelector(currentCardSelector) as HTMLElement;
                currentCard.classList.add('rotate-left');
                setTimeout(() => {
                    currentCard.classList.remove('rotate-left');
                    this.currentCardIndex--;
                }, 2000); // timeout should match transition duration
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
    <div>
        <Flux :animatePath="isAnimating"/>
        <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" v-touch:tap="tapHandler" class="card-container">
            <div v-for="(card, index) in cards" :key="index" class="card" :class="{ 'shrink-to-line': card.isShrinking, 'line-to-shrink': card.isExpanding }" v-show="index === currentCardIndex">
            <div class="card-content">
                <img :src="card.imageSrc" alt="Card Image" />
                <div class="card-text">
                    <div class="flex">
                        <div class="flex-text">
                            <h3>{{ card.title }}</h3>
                            
                            <img :src="card.connectionSrc" alt="" class="svgConn">
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
                        <!-- Add more details here as needed -->
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  </template>

<style scoped>
    .card-container {
        margin-top: -255px !important;
        width: 360px;
        margin: 0 auto;
    }

    .card {
        text-align: left;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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


    

    .card-text{
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

    .d-none{
        display: none;
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }
    .svgRight{
        max-width: 83px;
    }
    .flex-text{
        position: relative;
        display: flex;
        align-items: center;
    }
    .svgConn{
        position: absolute;
        width: 38px !important;
        right: -131px;
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
    50%{
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
    

    

</style>
