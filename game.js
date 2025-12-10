import { platform } from "./platform.js";
import { Snowman } from './character.js';

let Snowman;
let platforms = [];
let groundY = 500;

function setup() {
    createCanvas(800, 600);

Snowman = new Snowman(
200, //x
groundY, //y
50, //width
50, //height
1, //fallspeed
10 //jumpDistance
);

//First platform
platforms.push(new platform(200, groundY + 50, 100, 20));
}

function draw() {
    background(170, 260, 280);
  
    let x = 300;
    let y = 500;

    character.draw(x, y);
}

Snowmman.applyGravity();

// Prevent snowman from falling below ground
if (Snowman.y < groundY) {
    Snowman.y = groundY;
    Snowman.jumpDistance = 0;
}

Snowman.draw();

// Update and draw platforms
for (let o of platforms) {
    o.update();
    o.draw();
}

//Generate new platforms
if (platforms[platforms.length - 1].x < 300) {
    obstacles.push(new platform(800, groundY + 30, 40, 30, 4));
}

function keyPressed() {
    if (key === ' ') {
        Snowman.jump();
    }
}

