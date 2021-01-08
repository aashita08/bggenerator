//import { without } from 'lodash';			//dont uncomment
//run ->npm run build. this will open the file in browser
var _=require('lodash');

var array=[1,2,3,4,5,6]
console.log(_.without(array,3));
console.log("In Command Prompt - npm run build")
var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.querySelector(".randomcolor")

function setGradient(){
	body.style.background=
	"linear-gradient(to right, "
	+color1.value+", "
	+color2.value+")";

	h3.textContent=body.style.background ;
}

function generateColor(){
	return Math.floor(
		Math.random()*16777215).
		toString(16);
}

function generateRandomColors(){
	var randomcolor1 = generateColor();
	var randomcolor2 = generateColor();
	
	body.style.background=
	"linear-gradient(to right, #"
	+randomcolor1+", #"
	+randomcolor2+")";

	h3.textContent=body.style.background ;
}

setGradient();

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",generateRandomColors);