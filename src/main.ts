import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Vue3TouchEvents from 'vue3-touch-events';

createApp(App)
    .use(Vue3TouchEvents)
    .mount('#app');
