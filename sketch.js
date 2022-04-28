const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle (200, 350, 180, 150, options);
  World.add (world, playerBase);

  //crear el cuerpo del jugador
  player = Bodies.rectangle (250, playerBase.position.y -160, 50, 180)
  World.add (world, player);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //mostrar la imagen del jugador utilizando la función image()
  image (playerimage, player.position.x, player.position.y, 50, 180);

  //mostrar la imagen de la base del jugador utilizando la función image()
  image (baseimage, playerBase.position.x, playerBase.position.y, 180, 150);


  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
