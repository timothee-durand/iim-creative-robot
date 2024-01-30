import {Component} from "vue";
import TypeStep from "./steps/TypeStep.vue";
import ConnexionStep from "./steps/ConnexionStep.vue";

export interface Step {
    question: string;
    component: Component
}


export const formSteps: Step[] = [
    {
        question: "Quel est ton type ?",
        component: TypeStep
    },
    {
        question: "Quel type de connexion recherches-tu ?",
        component: ConnexionStep
    }
]