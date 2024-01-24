<template>
    <div>
      <Situation
        :linkToNextSituation="'/situation1'"
        :situationTitleTop="'The Story Begins..'"

        :titleA="'Alex'"
        :explanationA="'Meet Alex, a lively and outgoing individual hailing from the sunny shores of California. With an adventurous spirit and a passion for forging connections, Alex is ready to navigate the challenges and joys of a long-distance relationship.'"
        :leftImage="'/src/assets/images/Alex.png'"

        :middleExplanation="'You are playing as Alex, You recently found someone on Tindr called Samantha.'"

        :titleB="'Samantha'"
        :explanationB="'Meet Samantha, a reserved and shy soul residing in the heart of London. Navigating the intricacies of love from a distance, Samantha brings a unique perspective to the story.'"
        :rightImage="'/src/assets/images/Samantha.png'"
      />
     
    </div>
  </template>
  
  <script>
  import Situation from "@/components/Situation.vue";
  import Situation1 from "@/components/Situation1.vue";

  export default {
    components: {
      Situation,
    },
  };
  </script>