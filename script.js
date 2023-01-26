const numCircles = 30; // there will be 30 circles altogether
let circles = []; // this will store the 30 circles
let xCenter = 250
let yCenter = 250
let radius = 100
let angle = 0
let speed = 0.04
let direction = 1
//these values are used to create the circle pattern

function changeShape() {
        if (id = "circle"){
ellipse = ellipse 
        }
         if (id = "square"){
ellipse = rect         
         }

}

function changeSpeed(){
  let speedInput = document.getElementById("Speed").value;
  speed = parseFloat(speedInput)
}

function counterclockwise(){
  direction = -1  
}
function clockwise(){
  direction = 1 
}
  //switching the directions by multiple the angle by a positive or a negative        
function setup() {
  createCanvas(500, 500);
  for (let index = 0; index < numCircles; index++) { // makes 30 circles 
    let circle = {
      xValue: 5 * index, 
      yValue: height / 2,
      radius: index / 2,
      diameter: index,
      speed: 3,
      colour: {
        r: 250,
        g: 45,
        b: 250,
      }
    }
    circles.push(circle); // puts the circle into the array
  }
  noStroke();
  
}

function draw() {
  background(0); // the black background
  for (let circle of circles) { // goes through each of the 30 circles
    fill(circle.colour.r, circle.colour.g, circle.colour.b, circle.colour.t);
    circle.xValue = xCenter + radius * Math.cos(angle) 
     circle.yValue = yCenter + radius * Math.sin(angle) 
    
    ellipse(circle.xValue, circle.yValue, circle.diameter, circle.diameter);
    
   
    angle += speed * direction
  text("By Muaaz Shafiq", width* .7, height * .9);
  }
    // this makes the circles travel in a circle also determins speed/direction
}
  



