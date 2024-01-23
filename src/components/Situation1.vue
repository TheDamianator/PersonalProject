<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Your Title'"
        :explanationA="'Your Option A Explanation'"
        :leftImage="'/src/assets/images/Sit1A.png'"

        :middleExplanation="'Your Middle Explanation'"

        :titleB="'Option B: Your Title'"
        :explanationB="'Your Option B Explanation'"
        :rightImage="'/src/assets/images/Sit1B.png'"
      />
      
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