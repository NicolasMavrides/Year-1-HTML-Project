// Canvas JavaScript, written by Nicolas Mavrides with the help of 
//Steve Maddock's week 7 examples and various tutorials on http://www.w3schools.com/

//declare global variables and constants to be used
	var canvas = document.getElementById("canvas");
	const WIDTH = canvas.width;
	const HEIGHT = canvas.height;
	var context;
	var x=Math.random()*WIDTH;
	var y=Math.random()*HEIGHT;
	var dx=4;
	var dy=2;

//render the canvas frames 
function render() { 
	context = canvas.getContext("2d");
	setInterval(drawball,20);
	drawball();
	$('#canvas').click(changeColor);
}

//define the ball properties
function ball() {
	context.beginPath();
    context.arc(x, y, 20, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
}

//draw the ball
function drawball() {
	context.clearRect(0,0,WIDTH,HEIGHT); //clears canvas after each frame
	ball();
    movement();
    bounce();
}

//update the ball's coordinates at each frame to induce a movement animation
function movement() {
 	x+=dx;
	y+=dy;
}

//reverse the change of coordinates if the ball hits a wall of the canvas
function bounce() {
if( x<0 || x>550 )
	dx=-dx;
if( y<0 || y>400 )
	dy=-dy;
}

//change the colour of the ball on click
function changeColor() {
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
    context.fillStyle = "rgb("+r+","+b+","+b+")";
}

//execute the main function
render();