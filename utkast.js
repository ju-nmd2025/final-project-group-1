import Snowman from "./Snowman.js";
import Obstacle from "./Obstacle.js";

let snowman;
let obstacles = [];
let groundY = 500;

function setup() {
    createCanvas(800, 600);

    snowman = new Snowman(
        200,        // x
        groundY,    // y
        50,         // bredd
        50,         // höjd
        0.4,        // gravitation
        10          // hoppkraft
    );

    // Skapa första hindret
    obstacles.push(new Obstacle(900, groundY + 20, 40, 40, 4));
}

function draw() {
    background(200);

    // Boden
    fill(150);
    rect(0, groundY + 25, width, 100);

    // Uppdatera snögubbe
    snowman.applyGravity();

    // Förhindra att den faller genom marken
    if (snowman.y > groundY) {
        snowman.y = groundY;
        snowman.velocity = 0;
    }

    snowman.draw();

    // Uppdatera hinder
    for (let o of obstacles) {
        o.update();
        o.draw();
    }

    // Generera nya hinder
    if (obstacles[obstacles.length - 1].x < 400) {
        obstacles.push(new Obstacle(900, groundY + 20, 40, 40, 4));
    }

    // Kollision?
    if (snowman.isColliding(obstacles)) {
        fill("red");
        textSize(32);
        text("GAME OVER", 300, 200);
        noLoop();
    }
}

function keyPressed() {
    if (key === " ") {
        if (snowman.y >= groundY) {
            snowman.jump();
        }
    }
}