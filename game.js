import Snowman from "./character.js";

let character;      
const groundY = 500;

function setup() {
    createCanvas(400, 600);

    character = new Snowman(
        300, 500,   // x, y
        40, 60,     // width, height
        8,          // fall speed
        100          // jump height
    );
}

function draw() {
    background(135, 206, 235);
    character.draw (255);

    // Fallande rörelse
    character.fall();

    // Stoppa vid marken
    if (character.y > groundY) {
        character.y = groundY;
    }

    // Marken
    fill(34, 139, 34);
    rect(0, groundY + 30, width, height - groundY - 30);

    // Rörelse med piltangenter

    if (keyIsDown(LEFT_ARROW)) {
    character.moveLeft(5);
    }

    if (keyIsDown(RIGHT_ARROW)) {
    character.moveRight(5);
    }
}

function keyPressed() {
    if (key === ' ') {
        character.jump();
    }
}
