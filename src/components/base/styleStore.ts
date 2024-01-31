// store/index.ts
import {defineStore} from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        background: 'var(--background-color-wired)', // Couleurs de fond
        size: 'var(--size-usb)',
        animation: 'hyperthread',
        opacity: 1,
        font: 'font-cyborg',
    }),
    actions: {
        setBackground(type: string) {
            this.background = `var(--background-color-${type}`;
        },
        setSize(type: string) {
            this.size = `var(--size-${type})`;
        },
        setOpacity(opacity: number) {
            this.opacity = opacity;
        },
        setAnimation(type: string) {
            this.animation = type;
        },
        setFont(font: string) {
            this.font = `font-${font}`;
        }
    }
});
