class Player{
constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
}
getCount(){
var playerCoundref = databasehome.ref("playercount")
playerCoundref.on("value",function(data)
                          {
                              playercount = data.val();

                          }



);
}
updateCount(count){
databasehome.ref('/').update({playercount:count});
}
update(){
var playerindex="players/player"+playercount;
databasehome.ref(playerindex).set({name:this.name,distance:this.distance});
}
static getPlayerInfo(){
var playerInfoRef=databasehome.ref("players");
playerInfoRef.on("value",(data)=>
                 {
                    allPlayers=data.val()
                 })
}
}