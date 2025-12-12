import Snowman from "./character.js";

let character;

function setup() {
    createCanvas(800, 600);

    character = new Snowman(
        300, 500,   // x, y
        40, 60,     // width, height
        4,          // fall speed
        50          // jump height
    );
}

function draw() {
    background(170, 260, 280);

    character.fall();
    character.draw();
}

character.applyGravity();

// Prevent snowman from falling below ground
if (Snowman.y < groundY) {
    Snowman.y = groundY;
    Snowman.jumpDistance = 0;
}

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

