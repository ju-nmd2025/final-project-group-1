// platform
export default class Platform {
  constructor(x, y, type = "normal") {
    this.x = x;
    this.y = y;
    this.w = 60; //bredd
    this.h = 10; //höjd
    this.type = type; //typ av platform

    this.speed = type === "moving" ? 1.5 : 0; //hastighet, 1.5, annars 0
    this.direction = 1; //1=höger, -1=vänster
    this.broken = false; //sant när en plattform går sönder
  }

  update() {
    //moving platforms ändrar x position
    if (this.type === "moving") {
      this.x += this.speed * this.direction;

      if (this.x <= 0 || this.x >= width - this.w) {
        //byter håll när den når kanten
        this.direction *= -1;
      }
    }
  }

  show() {
    if (this.type === "normal") fill(255, 0, 0); //röd
    else if (this.type === "moving") fill(255, 100, 100); //ljusare röd
    else if (this.type === "breaking") fill(255, 150, 150); //röd/rosa

    rect(this.x, this.y, this.w, this.h);
  }

  onJump() {
    //när snögubben hoppar på platformen
    if (this.type === "breaking") {
      //broken platform
      this.broken = true;
      this.y = height + 200;
    }
  }
}

export { Platform };
