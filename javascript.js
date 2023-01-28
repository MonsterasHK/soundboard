
// init sounds
var mal1 = new Audio("sounds/mal_82nd.mp3");
var mal2 = new Audio("sounds/mal_canelloi.mp3");
var mal3 = new Audio("sounds/mal_Dream_on_the_dance.mp3");
var mal4 = new Audio("sounds/mal_everytime.mp3");
var mal5 = new Audio("sounds/mal_Genom_eld_och_vatten.mp3");
var mal6 = new Audio("sounds/mal_giv_mig.mp3");
var mal7 = new Audio("sounds/mal_Hey_B.mp3");
var mal8 = new Audio("sounds/mal_highway_to_hell.mp3");
var mal9 = new Audio("sounds/mal_Ladioo.mp3");
var mal10 = new Audio("sounds/mal_levels.mp3");
var mal11 = new Audio("sounds/mal_nu_kommer_aldrig.mp3");
var mal12 = new Audio("sounds/mal_oslagbara.mp3");
var mal13 = new Audio("sounds/mal_Sammy_forever_young.mp3");
var mal14 = new Audio("sounds/mal_Spectre.mp3");
var mal15 = new Audio("sounds/mal_Stamp.mp3");
var mal16 = new Audio("sounds/mal_The_Nights.mp3");
var mal17 = new Audio("sounds/mal_thunder.mp3");
var mal18 = new Audio("sounds/mal_TNT.mp3");
var mal19 = new Audio("sounds/mal_tomorrow_never.mp3");
var mal20 = new Audio("sounds/mal_Wake_me_up.mp3");
var raddning = new Audio("sounds/raddning_another_one_bites.mp3");
var straff1 = new Audio("sounds/straff_For_a_few.mp3");
var straff2 = new Audio("sounds/straff_The_good_The_bad.mp3");
var timeout = new Audio("sounds/time_out_da_som_nu.mp3");
var utvisning = new Audio("sounds/utvisning_emil.mp3");

// Setting all sounds to 00:00
mal1.currentTime = 0;
mal2.currentTime = 0;
mal3.currentTime = 0;
mal4.currentTime = 0;
mal5.currentTime = 0;
mal6.currentTime = 0;
mal7.currentTime = 0;
mal8.currentTime = 0;
mal9.currentTime = 0;
mal10.currentTime = 0;
mal11.currentTime = 0;
mal12.currentTime = 0;
mal13.currentTime = 0;
mal14.currentTime = 0;
mal15.currentTime = 0;
mal16.currentTime = 0;
mal17.currentTime = 0;
mal18.currentTime = 0;
mal19.currentTime = 0;
mal20.currentTime = 0;
raddning.currentTime = 0;
straff1.currentTime = 0;
straff2.currentTime = 0;
timeout.currentTime = 0;
utvisning.currentTime = 0;

// Adding functions so that when a button is pressed, corresponding sound is played and the 'Currently Playing' is updated
function mal1func() {
    mal1.play();
    
    //document.getElementById("currplay").textContent = "‎ Mål: 82nd";
}
function mal2func() {
    mal2.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Canelloi";
}
function mal3func() {
    mal3.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Dream on the Dance";
}
function mal4func() {
    mal4.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Everytime";
}
function mal5func() {
    mal5.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Genom eld och vatten";
}
function mal6func() {
    mal6.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Giv mig";
}
function mal7func() {
    mal7.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Hey B";
}
function mal8func() {
    mal8.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Highway to Hell";
}
function mal9func() {
    mal9.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Ladioo";
}
function mal10func() {
    mal10.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Levels";
}
function mal11func() {
    mal11.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Nu kommer aldrig";
}
function mal12func() {
    mal12.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Oslagbara";
}
function mal13func() {
    mal13.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Forever Young";
}
function mal14func() {
    mal14.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Spectre";
}
function mal15func() {
    mal15.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Stamp";
}
function mal16func() {
    mal16.play();
    //document.getElementById("currplay").textContent = "‎ Mål: The Nights";
}
function mal17func() {
    mal17.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Thunder";
}
function mal18func() {
    mal18.play();
    //document.getElementById("currplay").textContent = "‎ Mål: TNT";
}
function mal19func() {
    mal19.play();
   // document.getElementById("currplay").textContent = "‎ Mål: Tomorrow Never";
}
function mal20func() {
    mal20.play();
    //document.getElementById("currplay").textContent = "‎ Mål: Wake me up";
}
function raddningfunc() {
    raddning.play();
    //document.getElementById("currplay").textContent = "‎ Räddning: Another one";
}
function straff1func() {
    straff1.play();
   // document.getElementById("currplay").textContent = "‎ Straff: For a few";
}
function straff2func() {
    straff2.play();
    //document.getElementById("currplay").textContent = "‎ Straff: The Good The Bad";
}
function timeoutfunc() {
    timeout.play();
   // document.getElementById("currplay").textContent = "‎ Timeout: Då som nu";
}
function utvisningfunc() {
    utvisning.play();
   // document.getElementById("currplay").textContent = "‎ Utvisning: EEEEMIL!";
}

// function for the stop button, pauses all sounds and also sets all sounds to 00:00
function stopfunc() {
    mal1.pause();
    mal2.pause();
    mal3.pause();
    mal4.pause();
    mal5.pause();
    mal6.pause();
    mal7.pause();
    mal8.pause();
    mal9.pause();
    mal10.pause();
    mal11.pause();
    mal12.pause();
    mal13.pause();
    mal14.pause();
    mal15.pause();
    mal16.pause();
    mal17.pause();
    mal18.pause();
    mal19.pause();
    mal20.pause();
    raddning.pause();
    straff1.pause();
    straff2.pause();
    timeout.pause();
    utvisning.pause();

    mal1.currentTime = 0;
    mal2.currentTime = 0;
    mal3.currentTime = 0;
    mal4.currentTime = 0;
    mal5.currentTime = 0;
    mal6.currentTime = 0;
    mal7.currentTime = 0;
    mal8.currentTime = 0;
    mal9.currentTime = 0;
    mal10.currentTime = 0;
    mal11.currentTime = 0;
    mal12.currentTime = 0;
    mal13.currentTime = 0;
    mal14.currentTime = 0;
    mal15.currentTime = 0;
    mal16.currentTime = 0;
    mal17.currentTime = 0;
    mal18.currentTime = 0;
    mal19.currentTime = 0;
    mal20.currentTime = 0;
    raddning.currentTime = 0;
    straff1.currentTime = 0;
    straff2.currentTime = 0;
    timeout.currentTime = 0;
    utvisning.currentTime = 0;

    // Empties out the 'Currently Playing' tab
    //document.getElementById("currplay").textContent = " ";

}
