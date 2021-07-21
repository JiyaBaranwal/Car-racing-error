class Game{
    constructor()
    {

    }
    getState()
    {
        var gamerefer=database.ref('Gamestate');
        gamerefer.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(state)
    {
        database.ref('/').update({
            'Gamestate': state
        });
    }
    async start()
    {
        if(gameState===0)
        {
        player=new Player();
        var playercountref=await database.ref('Playercount').once("value");
        if(playercountref.exists())
        {
            playercount=playercountref.val();
            player.getCount();
        }
        form= new Form()
        form.display();
        }
       
    }
}