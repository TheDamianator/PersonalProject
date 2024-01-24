<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Suggest a Casual Video Call'"
        :explanationA="'Eager to connect with Samantha, you propose a casual video call to get to know each other better. This option aims to initiate a comfortable and virtual introduction.'"
        :leftImage="'/src/assets/images/Sit1A.png'"

        :middleExplanation="'You find yourself swiping through Tinder, and you come across Samanthas profile Intrigued by her interests and the witty bio, you decide to swipe right. To your delight, its a match!'"

        :titleB="'Option B: Immediately Suggest Meeting In-Person'"
        :explanationB="'Feeling a strong connection, you suggest meeting Samantha in-person right away. This option would be a surprising twist and could lead to a fun game of “who can surprise who the most”'"
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