import './assets/main.css'

// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

createApp(App).use(router).mount('#app');
