import {defineStore} from "pinia";

interface FormState {
    type: "ia" | "human" | "cyborg" | null
    connexion: "wifi" | "jack" | "bluetooth" | null
}

export const useFormStepStore = defineStore('form', {
    state: (): FormState => ({
        type: null,
        connexion: null
    }),
    getters: {
        isValid(state) {
            return state.type !== null && state.connexion !== null
        }
    },
    actions: {},
})