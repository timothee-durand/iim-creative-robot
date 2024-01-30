import {Component} from "vue";
import TypeStep from "./steps/TypeStep.vue";
import ConnexionStep from "./steps/ConnexionStep.vue";
import ProcesseurStep from "./steps/ProcesseurStep.vue";
import AutonomyStep from "./steps/AutonomyStep.vue";

export const formSteps: Component[] = [
    TypeStep,
    ConnexionStep,
    ProcesseurStep,
    AutonomyStep
]