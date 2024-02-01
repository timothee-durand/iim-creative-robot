import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Vue3TouchEvents from 'vue3-touch-events';
import {createPinia} from "pinia";
const pinia = createPinia();

createApp(App)
    .use(Vue3TouchEvents)
    .use(pinia)
    .mount('#app');
