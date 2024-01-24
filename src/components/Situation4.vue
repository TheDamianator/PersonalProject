<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Propose a Neutral Meeting Destination'"
        :explanationA="'Considering the distance and making the first meetup comfortable, you suggest a neutral meeting destination, perhaps a city that is easily accessible for both of you. This option aims to create a relaxed and enjoyable atmosphere for the initial face-to-face encounter.'"
        :leftImage="'/src/assets/images/Sit4A.png'"

        :middleExplanation="'After the delightful virtual movie night, the bond between you and Samantha deepens, and the idea of meeting in person becomes a shared desire. Planning the first in-person meetup becomes a significant step in your long-distance relationship.'"

        :titleB="'Option B: Express Hesitation About Meeting In-Person'"
        :explanationB="'Feeling unsure or hesitant about the idea of meeting in person, you express your concerns to Samantha. This option would make sure you guys are honest to each other.'"
        :rightImage="'/src/assets/images/Sit4B.png'"
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