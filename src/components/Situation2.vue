<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Plan a Movie Night With Samantha'"
        :explanationA="'Building on the enjoyable virtual game night, you propose planning a virtual movie night. This option aims to create a cozy atmosphere and provides an opportunity to share your favorite films, enhancing the connection.'"
        :leftImage="'/src/assets/images/Sit2A.png'"

        :middleExplanation="'Excited about the virtual connection, you suggest a virtual game night to add a fun and interactive element to your conversations with Samantha.'"

        :titleB="'Option B: Overwhelm Samantha with a Spontaneous Virtual Wedding'"
        :explanationB="'In an impulsive move, you suggest a spontaneous virtual wedding scenario, attempting to inject humour which would lead to a very easy going relationship filled with fun and humour.'"
        :rightImage="'/src/assets/images/Sit2B.png'"
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