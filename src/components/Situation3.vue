<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: a Virtual Movie Night with Synchronized Viewing'"
        :explanationA="'Considering the distance, you suggest having a virtual movie night with synchronized viewing, allowing both of you to watch the movie simultaneously and share the experience despite being in different locations.'"
        :leftImage="'/src/assets/images/Sit3A.png'"

        :middleExplanation="'Impressed by the virtual movie night idea, you and Samantha eagerly plan the details of the movie night, also considering the distance between America and London.'"

        :titleB="'Option B: a Risky Surprise Visit to London'"
        :explanationB="'Overwhelmed by excitement, you visit to London for the movie night. This option would add a sense of surprise and magic into the relationship.'"
        :rightImage="'/src/assets/images/Sit3B.png'"
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