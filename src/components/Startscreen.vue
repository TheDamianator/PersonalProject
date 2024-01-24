<template>

<div class="navbarIntro">
      <img class="logonavbarIntro" src="/src/assets/Icon.svg" alt="">
      <p class="title">Long Distance Project</p>
</div>

<div class="mainscreenIntro">
    
        <div class="leftcontainerIntro">
            <p class="situationtitleIntro">Welcome to the Long Distance project</p>
            <img class="logointroscreen" src="/src/assets/icon.svg" alt="Middle Image">
        </div>
    
     <div class="intro-flex">
        <p class="introtext">
            Welcome to the “Long Distance Project”, where you control the narrative. As Alex, you'll make decisions that influence the course of a long-distance relationship with Samantha. 
            <br> <br>
            Navigate the story by choosing options at critical moments, shaping the destiny of their connection. 
            <br> <br>
            Get ready for an engaging and personalized journey that unfolds based on your choices. The adventure is in your hands!
        </p>

        <router-link to="/meet-alex">
            <button class="startButton">
                <p class="startButtonText">Begin story</p>
            </button>
        </router-link>

       

    </div> 
</div>


</template>


<style scoped>

.startButtonText{
    font-weight: 600;

}
.startButton{
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    color: white;
    margin-top: 20%;
}

.navbarIntro{
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
}

.logointroscreen{
    width: 50%;
}

.logonavbarIntro{
    height: 60%;
}

.leftcontainerIntro{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.situationtitleIntro{
    font-weight: bold;
    font-size: 1.3rem;
    text-align: left;
    width: 250px;
}

.mainscreenIntro{
    width: 100%;
    height: 89.5vh;
    display: flex;
   
    justify-content: center;
    padding: 150px;
}

.introtext{
    font-weight: 500;
    font-size: 1.1rem;
    text-align: left;
    width: 400px;
}
.introflex{
    display: flex;
    flex-direction: column;
   
}
</style>
