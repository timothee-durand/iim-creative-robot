// store/index.ts
import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        selectedColor: 'background-love' // Couleur par défaut
    }),
    actions: {
        setSelectedColor(color: string) {
            this.selectedColor = color;
        }
    }
});
