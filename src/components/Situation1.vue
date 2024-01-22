<template>
    <div>
      <Situation
        :titleA="'Option A: Your Title'"
        :explanationA="'Your Option A Explanation'"
        :leftImage="'/src/assets/images/Sit1A.png'"

        :middleExplanation="'Your Middle Explanation'"

        :titleB="'Option B: Your Title'"
        :explanationB="'Your Option B Explanation'"
        :rightImage="'/src/assets/images/Sit1B.png'"
      />
      
      <!-- Repeat for other instances of Situation with different content and images -->
    </div>
  </template>
  
  <script>
  import Situation from "@/components/Situation.vue";
  
  export default {
    components: {
      Situation,
    },
  };
  </script>