import Snowman from "./character.js";
import Platform from "./platform.js";

let character;
const groundY = 800;
let gameSpeed = 5;
let platforms = [];
let gameState = "start"; // start | playing | gameover
let cameraY = 0; // Kamerans vertikala position
let snowflakes = []; //snö
let lastPlatformY; //håller koll på senaste platformens höjd
let score = 0; //poäng

function setup() {
  createCanvas(400, 600);

  character = new Snowman(200, 300, 40, 60, 0, 0);

  // skapa plattformar
  for (let i = 0; i < 8; i++) {
    platforms.push(
      new Platform(
        random(20, width - 80),
        height - i * 80,
        random(["normal", "moving", "breaking"])
      )
    );
  }
  //y-position från högsta plattform blir startpunkt
  lastPlatformY = platforms[platforms.length - 1].y;

  //skapa snöflingor
  for (let i = 0; i < 50; i++) {
    //loop som skapar snö
    snowflakes.push({
      x: random(width), //sprider snö över skärmen
      y: random(height), //olika höjd
      size: random(2, 5), //olika storlekar
      speed: random(1, 3), //olik hastighet
    });
  }
}

function draw() {
  background(135, 206, 235);
  drawSnow(); // snö

  //visa poäng vänster hörn
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("Score: " + score, 10, 30);

  if (gameState === "start") {
    background(100, 150);
    fill(255);
    textAlign(CENTER);
    text("JUMPING SNOWMAN", width / 2, height / 2 - 40);
    text("PRESS SPACE TO START", width / 2, height / 2);
    return;
  }

  if (gameState === "gameover") {
    background(0);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("GAME OVER\nPRESS R TO RESTART", width / 2, height / 2);
    return;
  }

  // Kameran följer karaktären
  if (character.y < cameraY + height / 2) {
    cameraY = character.y - height / 2;
  }

  //uppdatera poäng efter höjd
  let currentScore = Math.floor(-cameraY / 100); //1p per 100px

  if (currentScore > score) {
    score = currentScore;
  }

  // Fallande rörelse
  character.fall();

  // Stoppa vid marken
  if (character.y > groundY) {
    character.y = groundY;
  }

  // Rörelse med piltangenter

  if (keyIsDown(LEFT_ARROW)) {
    character.moveLeft(5);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    character.moveRight(5);
  }

  if (character.x > width) character.x = 0;
  if (character.x < 0) character.x = width;

  push();
  translate(0, -cameraY);

  //rita snögubbe (kameran följer efter)
  character.draw();

  // Uppdatera och visa plattformar
  for (let pl of platforms) {
    pl.update();
    pl.show();
    checkPlatformCollision(character, pl);
  }

  // Ta bort plattformar som fallit under skärmen och skapa nya högre upp
  for (let i = platforms.length - 1; i >= 0; i--) {
    if (platforms[i].y - cameraY > height) {
      platforms.splice(i, 1); // ta bort plattformen

      lastPlatformY -= random(70, 100); //jämnt avstånd uppåt

      // skapa ny plattform ovanför kameran
      platforms.push(
        new Platform(
          random(20, width - 80),
          lastPlatformY, //ny y-position ovanför den förra
          random(["normal", "moving", "breaking"])
        )
      );
    }
  }
  pop();

  if (character.y - cameraY > height) {
    gameState = "gameover";
  }
}

function checkPlatformCollision(p, pl) {
  if (
    p.fallspeed > 0 && // bara när spelaren faller
    p.y + p.h >= pl.y && // spelarens fötter under plattformens topp
    p.y + p.h <= pl.y + 20 && // inom 20 px under plattformens topp
    p.x + p.w > pl.x &&
    p.x < pl.x + pl.w
  ) {
    p.fallspeed = -14; // hopphöjd
    pl.onJump();
  }
}

function keyPressed() {
  if (key === " " && gameState === "start") {
    gameState = "playing";
  }

  if (key === "r" || key === "R") {
    restartGame();
  }
}

function restartGame() {
  gameState = "start";
  cameraY = 0;
  score = 0; //nollställ poäng
  character.x = 200;
  character.y = 300;
  character.fallspeed = 0;

  // Skapa nya plattformar
  platforms = [];
  for (let i = 0; i < 8; i++) {
    platforms.push(
      new Platform(
        random(20, width - 80),
        height - i * 80,
        random(["normal", "moving", "breaking"])
      )
    );
  }
  //återställ höjden så nya plattformar fortsätter uppåt
  lastPlatformY = platforms[platforms.length - 1].y;
}

function drawSnow() {
  fill(255);
  noStroke(); //ingen kant

  for (let flake of snowflakes) {
    //flake= en flinga i taget
    ellipse(flake.x, flake.y, flake.size); //ritar snöflingan

    flake.y += flake.speed; //flingan faller ner

    if (flake.y > height) {
      //om flingan lämnat skärmen
      flake.y = 0; //flyttar flingan tillbaka till toppen
      flake.x = random(width); // faller ej i samma spår
    }
  }
}
