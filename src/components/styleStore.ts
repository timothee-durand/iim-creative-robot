// store/index.ts
import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        background: 'var(--background-color-wifi)', // Couleurs de fond
        size : '',
        animation: '',
        britness: '',
    }),
    actions: {
        setBackground(color: string) {
            this.background = color;
        },
        setSize(text: string) {
            this.size = text;
        },
        setAnimation(speed: string) {
            this.background = speed;
        },
        setBritness(brit: number) {
            this.background = brit;
        },
    }
});
