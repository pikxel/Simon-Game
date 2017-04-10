var power="off"
var strictMode=false;
var combination=[];
var randomNum=0;
var functionIsRunning=false;
var k=0;
var toChange="";
var color="";
var colorBack="";
var clearit="";
var clearit1="";
var userBlocked=false;
var userArray=[];
var compareNum=0;
var level=0;
var audio="";
var startWasDown=false;
var vibrateNum=0;
var vibrateIsRunning=false;
function turnOn(){
    if(power==="off")
    {
        power="on";
        $("#displayText").css("color"," #ff0000");
    }
    else{
       power="off";
       $("#displayText").css("color","gray");
       strictMode=false;
       var userBlocked=false;
       var functionIsRunning=false;
       $(".strict").css("background-color","yellow");
       clearInterval(clearit);
       clearInterval(clearit1);
       combination=[];
       userArray=[];
       compareNum=0;
       document.getElementById("displayText").innerHTML="--";
       level=0;
       $("#green").css("background-color","#097203");
       $("#red").css("background-color","#840303");
       $("#blue").css("background-color","#103166");
       $("#yellow").css("background-color","#e9ff00");
        startWasDown=false;
       vibrateNum=0;
       vibrateIsRunning=false;
       
       k=0;

    }
}
function strict(){
    if(power==="on")
    {
    if(strictMode===false)
    {
        strictMode=true;
        $(".strict").css("background-color","red");
    }
    else {
        strictMode=false;
        $(".strict").css("background-color","yellow");
    }
  }
}
function startGame(){
      if(power==="on" ){
      level++;
      setLevel();
      userBlocked=true;
      randomNum=Math.floor(Math.random()*4)+1;
      combination.push(randomNum);
      functionIsRunning=false;
      run();
      k=0;
    }
    
}
function run()
{
   setLevel();
   clearit=setInterval(function(){show(combination[k]);},500);
   clearit1=setInterval(changeBack,1000);
}

function show(a){
    if(power==="off")
    {
      clearInterval(clearit);
      k=0;
      functionIsRunning=false;
      return;
    }
    if(k===combination.length)
    {
        clearInterval(clearit);
        return;
    }
    if(functionIsRunning===false)
    {
    console.log("A showba");
    k++;
    functionIsRunning=true;
    toChange="";
    color="";
    colorBack="";
    console.log("A showba es az a"+a);
    switch(a){
        case a=1 :
        {
            toChange="green";
            color="#3bdb32";
            colorBack="#097203"
            music="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
            break;
        }
        case a=2:
        {
            toChange="red";
            color="#ff8282";
            colorBack="#840303";
            music="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
            break;
        }
        case a=3:
        {
            toChange="blue";
            colorBack="#103166";
            color="#6492db";
            music="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
            break;
        }
        case a=4:
        {
            toChange="yellow";
            colorBack="#e9ff00";
            color="#edf783";
            music="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
            break;
        }

    }
    console.log(toChange);
    console.log(color);
    console.log("Megyek0");
    audio=new Audio(music);
    audio.play();

    $("#"+toChange).css("background-color",color);
    }
}
  function changeBack()
    {
     $("#"+toChange).css("background-color",colorBack);
     functionIsRunning=false;
     console.log("Megyek1");
     if(k===combination.length)
     {
         clearInterval(clearit1);
         userBlocked=false;
     }
}
//functions of Green
function sendGreen(){
    if(userBlocked===false)
    {
    userArray.push(1);
    checkUser();
    }
}
function green(){
    if(userBlocked===false)
    {
       $("#green").css("background-color","#3bdb32");
         audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
         audio.play();
    }
}
function clearGreen(){
    $("#green").css("background-color","#097203");
    audio.stop();
    
}
//functions of Red
function sendRed(){
     if(userBlocked===false)
    {
    userArray.push(2);
    checkUser();
    }
}
function red(){
    if(userBlocked===false)
    {
        $("#red").css("background-color","#ff8282");
        audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
        audio.play();
    }
}
function clearRed(){
    $("#red").css("background-color","#840303");
    audio.stop();
   
}
//functions of Blue
function sendBlue(){
     if(userBlocked===false)
    {
    userArray.push(3);
    checkUser();
    }
}
function blue(){
    if(userBlocked===false){
        $("#blue").css("background-color","#6492db");
        audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
        audio.play();
    }
}
function clearBlue(){
    $("#blue").css("background-color","#103166");
    audio.stop();
}
//function of Yellow
function sendYellow(){
     if(userBlocked===false)
    {
    userArray.push(4);
    checkUser();
    }
}
function yellow(){
    if(userBlocked===false){
        $("#yellow").css("background-color","#edf783");
        audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
        audio.play();
    }
}
function clearYellow(){
    $("#yellow").css("background-color","#e9ff00");
    audio.stop();
  
}
function checkUser(){
    if(combination[compareNum]===userArray[compareNum])
    {
      
      compareNum++;
     if(combination.length===userArray.length)  {
        console.log("BENNNT VAN SIMON");
        compareNum=0;
        userArray=[];
        if(20===level)
        {
            document.getElementById("displayText").innerHTML="##";
            vibrate();
            return;
        }
        setTimeout(startGame,1000);
    }
    }
    else
       {
      if(strictMode===false)
      {
       replay();
      }
      else {
          replayStrict();
      }
  }
     
}
function replay(){
     if(power==="on"){
      audio=new Audio("http://www.heyrocker.com/moo/buzz.wav");
      audio.play();
      document.getElementById("displayText").innerHTML="!!";
      compareNum=0;
      userArray=[];
      userBlocked=true;
      vibrateNum=0;
       vibrateIsRunning=false;
      functionIsRunning=false;
      clearInterval(clearit);
      clearInterval(clearit1);
      setTimeout(run,1000);
      k=0;
     }
}
function setLevel(){
    if(level<9)
    {
        document.getElementById("displayText").innerHTML="0"+level;
    }
    else{
        document.getElementById("displayText").innerHTML=level;
    }
}
function  replayStrict(){
     audio=new Audio("http://www.heyrocker.com/moo/buzz.wav");
     audio.play();
     document.getElementById("displayText").innerHTML="!!";
      userBlocked=true;
     clearInterval(clearit);
     clearInterval(clearit1);
     combination=[];
     userArray=[];
     compareNum=0;
     level=0;
     $("#green").css("background-color","#097203");
     $("#red").css("background-color","#840303");
     $("#blue").css("background-color","#103166");
     $("#yellow").css("background-color","#e9ff00");
     k=0;
     vibrateNum=0;
     vibrateIsRunning=false;
     setTimeout(startGame,1000);
}
function startGame1(){
      if(power==="on" && startWasDown===false ){
      startWasDown=true;
      level++;
      setLevel();
      userBlocked=true;
      randomNum=Math.floor(Math.random()*4)+1;
      combination.push(randomNum);
      functionIsRunning=false;
      vibrateNum=0;
       vibrateIsRunning=false;
      run();
      k=0;
}
}
function vibrate(){
   clearit=setInterval(vibrate1,100);
   clearit1=setInterval(vibrate2,150);
}
function vibrate1(){
    if(vibrateIsRunning===false)
    {
    vibrateIsRunning=true;
    $("#green").css("background-color","#004d00");
    audio=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
     audio.play();
     $("#red").css("background-color","#ff8282");
     $("#blue").css("background-color","#6492db");
     $("#yellow").css("background-color","#edf783");
    
    }
}
function vibrate2(){
    vibrateIsRunning=false;
    $("#green").css("background-color","#00b300");
    $("#red").css("background-color","#840303");
    $("#blue").css("background-color","#103166");
     $("#yellow").css("background-color","#e9ff00");
    vibrateNum++;
    if(vibrateNum===10)
    {
        clearInterval(clearit);
        clearInterval(clearit1);
        audio.pause();
        audio1.pause();
        return;
    }
}
