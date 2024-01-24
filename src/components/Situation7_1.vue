<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Choose a Vibrant City with Cultural Attractions'"
        :explanationA="'Opting for a vibrant city with cultural attractions, you suggest a destination that offers a mix of entertainment, exploration, and opportunities to create lasting memories. This option aims to provide a dynamic and enjoyable backdrop for your first meeting.'"
        :leftImage="'/src/assets/images/Sit7_1A.png'"

        :middleExplanation="'As the anticipation for the first in-person meetup builds, you and Samantha contemplate the ideal destination. The choice of where to meet becomes a crucial decision in shaping the experience of this significant moment.'"

        :titleB="'Option B: Decide on a Quiet and Secluded Getaway'"
        :explanationB="'Preferring a more intimate setting, you suggest a quiet and secluded getaway for your first meet-up. This option aims to create a serene and private environment, allowing you and Samantha to focus solely on each other.'"
        :rightImage="'/src/assets/images/Sit7_1B.png'"
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