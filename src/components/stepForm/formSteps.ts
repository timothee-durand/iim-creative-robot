import {Component} from "vue";
import TypeStep from "./steps/type/TypeStep.vue";
import ConnexionStep from "./steps/connection/ConnexionStep.vue";
import ProcesseurStep from "./steps/hardware/ProcesseurStep.vue";
import AutonomyStep from "./steps/autonomy/AutonomyStep.vue";
import PortStep from "./steps/port/PortStep.vue";

export const formSteps: Component[] = [
    TypeStep,
    ConnexionStep,
    PortStep,
    ProcesseurStep,
    AutonomyStep
]