var database;
var position; 
var form, player, game;
var gameState = 0;
var playerCount;
var allPlayers

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start(); 
}

function draw(){
  background("white");
    drawSprites();
  
}
