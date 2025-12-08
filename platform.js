// platform 
export default class Platform {
    constructor(x, y, type = "normal") {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 18;
        this.type = type;

        this.speed = type === "moving" ? random(1, 2) * (random() < 0.5 ? -1 : 1) : 0;
    }

    update () {
        if (this.type === "moving") {
            this.x += this.speed;
            if (this.x < 0 || this.x > width - this.w) {
                this.speed *= -1;
            }
        }
    }

    drawCandyCane() {
        // Background White
        fill(255);
        rect(this.x, this.y, this.w, this.h);

        //Candy Cane Pattern
        stroke(255, 0, 0);
        strokeWeight(4);

        for (let i = -20; i < this.w + 20; i+= 12) {
            line(this.x + i, this.y, this.x + i + 20, this.y + this.h);
        }

        strokeWeight(1);
        noStroke();
    }

    draw() {
        push();
        
        //Color Tint Based on Type
        if (this.type === "normal") fill(255);
        if (this.type === "moving") fill (220, 240, 255);
        if (this.type === "breaking") fill(255, 200, 200);

        //Draw Candy Cane Pattern
        this.drawCandyCane();

        //Outline
        noFill();
        stroke(150);
        rect(this.x, this.y, this.w, this.h);

        pop();
    }
}                             