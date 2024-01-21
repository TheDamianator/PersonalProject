<script>

</script>

<template>

<div class="navbar">
    <img class="logonavbar" src="/src/assets/Icon.svg" alt="">
    <p class="title">Long Distance Project</p>
</div>

<div class="mainscreen">

    <div class="leftscreen">

        <p class="situationtitle" > Option A: Suggest a Casual Video Call</p>
        <p class="situationexplanation">Eager to connect with Samantha, you propose a casual video call to get to know each other better. This option aims to initiate a comfortable and virtual introduction.</p>
        <button class="optionAbutton">
            <p class="buttontext">Choose this option</p>
        </button>

    </div>

        <div class="middlescreen">
            <img class="logomiddlescreen" src="/src/assets/Icon.svg" alt="">
            <p class="situationtitle" > Situation</p>
             <p class="situationexplanation">DUMMTEXT <br> You find yourself swiping through Tinder, and you come across Samantha's profile. Intrigued by her interests and the witty bio, you decide to swipe right. To your delight, it's a match!</p>
        </div>

    <div class="rightscreen">

        <p class="situationtitle" > Option A: Suggest a Casual Video Call</p>
        <p class="situationexplanation">Eager to connect with Samantha, you propose a casual video call to get to know each other better. This option aims to initiate a comfortable and virtual introduction.</p>
        <button class="optionBbutton">
            <p class="buttontext">Choose this option</p>
        </button>

    </div>

</div>

</template>

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
.optionAbutton{
    width: 170px;
    height: 40px;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
}

.buttontext{
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
.situationexplanation{
   
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