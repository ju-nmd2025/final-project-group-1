//Snowman

export default class Snowman {
  constructor(x, y, w, h, fallspeed, jumpDistance) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.fallspeed = fallspeed;
    this.jumpDistance = jumpDistance;
  }

  fall() {
    this.y += this.fallspeed;
    this.fallspeed += 0.6; //långsammare fall
  }

  jump() {
    this.y -= this.jumpDistance;
  }

  moveLeft(speed) {
    this.x -= speed;
  }

  moveRight(speed) {
    this.x += speed;
  }

  isColliding(objects, gameSpeed) {
    for (const object of objects) {
      if (
        Math.abs(this.y + this.h - object.y) < gameSpeed &&
        this.x + this.w >= object.x &&
        this.x <= object.x + object.w
      ) {
        return true;
      }
    }
    return false;
  }

  draw(x, y) {
    push();

    // Leg circle (fixed!)
    fill(255);
    ellipse(this.x, this.y, 50, 50);

    // Middle circle
    ellipse(this.x, this.y - 40, 40, 40);

    // Head circle
    ellipse(this.x, this.y - 70, 30, 30);

    // Eyes
    fill(0);
    ellipse(this.x - 5, this.y - 75, 5, 5);
    ellipse(this.x + 5, this.y - 75, 5, 5);

    // Carrot nose
    fill(255, 165, 0);
    triangle(
      this.x,
      this.y - 67,
      this.x + 12,
      this.y - 65,
      this.x,
      this.y - 63
    );

    // Buttons
    fill(0);
    ellipse(this.x, this.y - 50, 5, 5);
    ellipse(this.x, this.y - 35, 5, 5);

    pop();
  }
}
