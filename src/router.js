// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import StartScreen from './components/Startscreen.vue';
import MeetAlex from './components/MeetAlex.vue';

const routes = [
{ path: '/', redirect: '/start-screen' },
{ path: '/start-screen', component: StartScreen },
{ path: '/meet-alex', component: MeetAlex },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
