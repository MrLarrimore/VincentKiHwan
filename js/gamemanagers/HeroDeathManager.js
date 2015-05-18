game.HeroDeathManager = Object.extend({
    init: function(x, y, settings){
        this.alwaysUpdate = true;
    },

    update: function(){
        //when the player's health reaches 0, it will be respawned
         if(game.data.player.dead){
            me.game.world.removeChild(game.data.player);     
            
            me.state.current().resetPlayer(10,0);                   
        }  
        
        return true;
    }
});
