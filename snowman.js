function setup() {
    createCanvas(500, 700);
    noStroke();
}

function draw() {
    background(220);
    drawSnowman(250, 500);
}

function drawSnowman(x, y) {
    // Leg cirkle
    fill(255);
    ellipse(x, y, - 50, 50);
    
    // Middle circle
    ellipse(x, y - 40, 40, 40);
    
    // Head circle
    ellipse(x, y - 70, 30, 30);
    
    // Eyes
    fill(0);
    ellipse(x - 5, y - 75, 5, 5);
    ellipse(x + 5, y - 75, 5, 5);
    
    // Carrot nose
    fill(255, 165, 0);
    triangle(x, y - 67, x + 12, y -65, x, y - 63);
}

