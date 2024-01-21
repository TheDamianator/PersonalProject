<template>

<div class="navbar">
      <img class="logonavbar" src="/src/assets/Icon.svg" alt="">
      <p class="title">Long Distance Project</p>
    </div>

    <div class="mainscreen">
      <div :style="{ backgroundImage: 'url(' + leftImage + ')' }" class="leftscreen">
        <p class="situationtitle">{{ titleA }}</p>
        <p class="situationexplanation">{{ explanationA }}</p>
        <button class="optionAbutton">
          <p class="buttontext">Choose this option</p>
        </button>
      </div>
  
      <div class="middlescreen">
        <img class="logomiddlescreen" src="/src/assets/icon.svg" alt="Middle Image">
        <p class="situationtitle">Situation</p>
        <p class="situationexplanation">{{ middleExplanation }}</p>
      </div>
  
      <div :style="{ backgroundImage: 'url(' + rightImage + ')' }" class="rightscreen">
        <p class="situationtitle">{{ titleB }}</p>
        <p class="situationexplanation">{{ explanationB }}</p>
        <button class="optionBbutton">
          <p class="buttontext">Choose this option</p>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titleA: String,
      explanationA: String,
      leftImage: String,
      logo: String,
      middleExplanation: String,
      titleB: String,
      explanationB: String,
      rightImage: String,
    },
  };
  </script>

<style>

/* //Navbar styles */

.navbar{
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
}

.logonavbar{
    height: 60%;
}

.title{
    color: black;
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* //Mainscreen styles */
.mainscreen{
    width: 100%;
    height: 89.5vh;
    display: flex;
    align-items: center;
}

.leftscreen{
    background-color: blue;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content:flex-end;
    gap: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 100px;
}

.situationtitleA{
    font-weight: bold;
    font-size: 1.3rem;
}

.optionAbutton{
    width: 170px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
}

.buttontextA{
    font-weight: 600;
}

.middlescreen{
    width: 20%;
    height: 100%;
    display: flex;
    gap: 50px;
    flex-direction:column;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

}
.logomiddlescreen{
    height: 12%;
}

.situationtitle{
    font-weight: bold;
    font-size: 1.3rem;
}

.rightscreen{
    background-color: green;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content:flex-end;
    gap: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 100px;
}

.situationtitleB{
    font-weight: bold;
    font-size: 1.3rem;
}

.buttontextB{
    font-weight: 600;
}

.optionBbutton{
    width: 170px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
}

</style>