var numberSquares=6;
var colors=generateRandomColors(numberSquares);
var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numberSquares=3;
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent= pickedColor;

for(var i=0; i<squares.length; i++){
	if(colors[i]){
	squares[i].style.background=colors[i];
  }
  else{
  	squares[i].style.display= "none";
  }
}
});

hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numberSquares=6;
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent= pickedColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
  
  	squares[i].style.display= "block";
}
});



resetButton.addEventListener("click", function(){
colors=generateRandomColors(numberSquares);
pickedColor= pickColor();
colorDisplay.textContent= pickedColor;
this.textContent="NEW COLORS";

messageDisplay.textContent="";

for(var i=0; i<squares.length; i++){
	squares[i].style.background= colors[i];
}

h1.style.background= "steelblue";
});

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++){
squares[i].style.background= colors[i];

squares[i].addEventListener("click", function(){
var clickedColor=this.style.background;

if(clickedColor===pickedColor){
	messageDisplay.textContent= "Correct";
	resetButton.textContent="Play Again?";
	changeColors(clickedColor);
	h1.style.background=clickedColor;

}
else{
	this.style.background="#232323";
	messageDisplay.textContent= "Try Again";
}
	
});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background= color;
	}
}

function pickColor(){
	var random= Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor())

	}


	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}