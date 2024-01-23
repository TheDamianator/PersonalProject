<script setup>
import { ref, computed } from 'vue';
import Situation1 from './components/Situation1.vue';
import Startscreen from './components/Startscreen.vue';
import MeetAlex from './components/MeetAlex.vue';


const routes = {
  '/': Situation1,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => routes[currentPath.value.slice(1) || '/'] || NotFound);
</script>

<template>
  <div>
    <MeetAlex/>
  
    <!-- <component :is="currentView" /> -->
  </div>
</template>
