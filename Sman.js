//Snowman
export default class Snowman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        //Snowman 
        fill(255);
        noStroke();

        // Bottom circle
        fill(255);
        ellipse(x, y, 50, 50);
        // Middle circle
        ellipse(x, y - 40, 40, 40);
        // Head
        ellipse(x, y - 70, 30, 30);
        // Eyes
        fill(0);
        ellipse(x - 5, y - 75, 5, 5);
        ellipse(x + 5, y - 75, 5, 5);
        // Carrot nose
        fill(255, 165, 0);
        triangle(x, y - 67, x + 12, y - 65, x, y - 63);
        // Button
        fill(0);
        ellipse(x, y - 50, 5, 5);
        ellipse(x, y - 35, 5, 5);
    }

}
