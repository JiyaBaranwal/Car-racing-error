var database;
var gameState=0;
var player;
var playercount = 0;
var game;
var form;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
   game= new Game();
   game.start(); 
   game.getState();
}

function draw(){
    background("white");
    
}
