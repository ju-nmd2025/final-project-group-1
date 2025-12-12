import Platform from "./platform.js";

function setup() {
  createCanvas(500, 700);
}

let platform = new Platform(200, 200, "normal");

let x = 100;
let y = 100;

function draw() {
  background(100, 100, 100);

  //Draw platform
  platform.update();
  platform.show();
}
