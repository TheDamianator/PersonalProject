<template>

<div class="navbarIntro">
      <img class="logonavbarIntro" src="/src/assets/Icon.svg" alt="">
      <p class="title">Long Distance Project</p>
</div>

<div class="mainscreenIntro">

    <div class="leftscreenIntro">
        <p class="situationtitleIntro">Welcome to the Long Distance project</p>
        <img class="logomiddlescreenIntro" src="/src/assets/icon.svg" alt="Middle Image">
    </div>

     <div class="rightscreenIntro">
hello
    </div>


</div>

</template>


<style scoped>
.navbarIntro{
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
}

.logonavbarIntro{
    height: 60%;
}

/* Leftscreen */


.situationtitleIntro{
    font-weight: bold;
    font-size: 1.3rem;
    text-align: left;
}

/* Mainscreen */

.mainscreenIntro{
    background-color: red;
    width: 100%;
    height: 89.5vh;
    display: flex;
    align-items: center;
}

.leftscreenIntro{
    background-color: blue;
    width: 45%;
    height: 89.5vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.rightscreenIntro{
    background-color: green;
    width: 55%;
    height: 89.5vh;
    display: flex;
    align-items: center;
}
</style>
