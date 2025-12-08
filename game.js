//import  character  from "./character.js";
import Platform from "./platform.js";

// //let character;

function setup() {
  createCanvas(500, 700);

  //Create the player
  //character = new Character();

  //Create test platform
}

// //let x = 100;
// //let y = 100;
let platform = new Platform(200, 200, "normal");

function draw() {
  background(100, 100, 100);

  //Draw platform
  platform.update();
  platform.draw();
}

// //Move platform left to right
// //platform.x -= 2;
// //if (platform.x + platform.w < 0) {
// //platform.x = width;
// //}

// //character.draw();

// //createPlatform(200);

// //platform.draw();

// //platform.x -= 10;
// //if(platform.x + platform.w < 0){
// //platform.x = 500;
// //}

// //if(character.y + character.h < 300){
// //character.y += 10;
// //}

// // Floor
// //line(0, 300, 400, 300);
// //}

// //function keyPressed(){
// //if(character.y + character.h === 300){
// //character.y -= 80;
// //}
// //}
