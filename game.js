function setup() {
    createCanvas(400, 400);
}

// Character

let character = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    draw() {
        rect(this.x, this.y, this.w, this.h);
    },
};

// Platform
function drawPlatform(x, y) {
    push();
    fill("blue");
    rect(x, y, 80, 20);
    pop();
}

// Obstacle / Spike / Death
function drawObstacle() {
    push();
    fill("red");
    triangle(180, 300, 210, 240, 240, 300);
    pop();
}

let x = 100;
let y = 100;

function draw() {
    background(100, 100, 100);

    character.draw();

    drawPlatform(x, y + 150);

    drawObstacle();

    // Floor
    line(0, 300, 400, 300);
}
