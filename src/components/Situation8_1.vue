<template>
    <div>
      <Situation
        :situationTitleTop="'Situation'"

        :titleA="'Option A: Sailing Into the Sunset on a Boat Together'"
        :explanationA="'Enamored by the idea of endless horizons, you and Samantha decide to embark on a symbolic journey together, sailing into the sunset on a boat. This choice represents a commitment to navigate lifes seas side by side, embracing the unknown with a sense of shared adventure and love.'"
        :leftImage="'/src/assets/images/Sit8_1A.png'"

        :middleExplanation="'After the tranquil days in the secluded getaway, you and Samantha find yourselves at a crossroads, contemplating the next chapter of your relationship. The journey has been filled with adventures, laughter, and moments that define the depth of your connection.'"

        :titleB="'Option B: Caravaning Through Europe in a Cozy Journey'"
        :explanationB="'Drawn to the allure of exploration and discovery, you and Samantha choose to continue your journey through Europe in a cozy caravan. This option signifies an ongoing adventure, with each new destination offering the promise of shared experiences and continued growth'"
        :rightImage="'/src/assets/images/Sit8_1B.png'"
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