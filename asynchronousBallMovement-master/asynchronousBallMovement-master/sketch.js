var databasehome;
var gamestate=0;
var allPlayers
var car1,car2,car3,car4,cars;
var playercount=0;
var form,player,game;
function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    databasehome=firebase.database();
    game=new Game();
  game.getState();
  game.start();
   
}

function draw(){
    background("white");
 if(playercount===4){
   game.update(1);
 }
 if(gamestate===1){
   clear();
   game.play();
 }
    drawSprites();
}

