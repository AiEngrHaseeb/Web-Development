var randomNumber1 = Math.floor((Math.random()*6)+1); //genrate no 1-6
var diceImgSet = "images/dice"+randomNumber1+".png"; //select img dice1 - dice6
var leftimg = document.querySelectorAll("img")[0]; // selecting img by using img
leftimg.setAttribute("src", diceImgSet);// set Attribute to change img of dice
var randomNumber2 = Math.floor((Math.random()*6)+1); //genrate no 1-6
var diceImgSet = "images/dice"+randomNumber2+".png"; //select img dice1 - dice6
var rightImg = document.querySelectorAll("img")[1]; // selecting img by using img
rightImg.setAttribute("src", diceImgSet);// set Attribute to change img of dice

//************************************************************************************
//{ we have Another way by function calling for changing dice imgs}
//************************************************************************************
// function changingImg(){
//   var randomNumber = Math.floor((Math.random()*6)+1); //genrate no 1-6
//   var diceImgSet = "images/dice"+randomNumber+".png"; //select img dice1 - dice6
//   return diceImgSet;
// }
// var leftimg = document.querySelectorAll("img")[0]; // selecting img by using img
// leftimg.setAttribute("src", changingImg());// set Attribute to change img of dice
// var rightImg = document.querySelectorAll("img")[1]; // selecting img by using img
// rightImg.setAttribute("src", changingImg());// set Attribute to change img of dice
//************************************************************************************

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML= "Player 1 Wins!🚩";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else
{
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
