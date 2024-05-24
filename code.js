var msgPlayer = document.getElementById("msgDisplay");
var msgComp = document.getElementById("compDisplay");
var resultPrint = document.getElementById("result");
var compMove = ""
var compResult = ""

function playerPick(playerMove){
playerChoice="You clicked "+playerMove+"!";
msgPlayer.innerText = playerChoice
var compResult = compPick()

if (playerMove === "Rock"){
    if (compMove === "Rock"){
    result = "It's a tie!"
    resultPrint.innerText = result
 }
 else if (compMove === "Paper"){
    result = "You lose!"
    resultPrint.innerText = result
 }
 else if (compMove === "Scissors"){
    result = "You win!"
    resultPrint.innerText = result
 }
;}

if (playerMove === "Paper"){
    if (compMove === "Paper"){
    result = "It's a tie!"
    resultPrint.innerText = result
 }
 else if (compMove === "Scissors"){
    result = "You lose!"
    resultPrint.innerText = result
 }
 else if (compMove === "Rock"){
    result = "You win!"
    resultPrint.innerText = result
 }
;}

if (playerMove === "Scissors"){
    if (compMove === "Scissors"){
    result = "It's a tie!"
    resultPrint.innerText = result
 }
 else if (compMove === "Rock"){
    result = "You lose!"
    resultPrint.innerText = result
 }
 else if (compMove === "Paper"){
    result = "You win!"
    resultPrint.innerText = result
 }
;}
;}

function compPick(){
const compChoice = Math.random()
console.log(compChoice)

if (compChoice >= 0 && compChoice <= 0.33){
console.log("Computer picked rock")
compMove = "Rock"
compResult="Computer clicked "+compMove
msgComp.innerText = compResult;}

else if (compChoice >= 0.34 && compChoice <= 0.66){
console.log("Computer picked paper")
compMove = "Paper"
compResult="Computer clicked "+compMove
msgComp.innerText = compResult;}

else if (compChoice >= 0.67 && compChoice <= 1){
console.log("Computer picked scissors")
compMove = "Scissors"
compResult="Computer clicked "+compMove
msgComp.innerText = compResult;}
;
return compMove;}