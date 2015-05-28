game.Select = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('select')), -10);
        
        //binds keys to use in game
        me.input.bindKey(me.input.KEY.F, "F");
        me.input.bindKey(me.input.KEY.G, "G");
        me.input.bindKey(me.input.KEY.H, "H");
       
        
        //adds text to screen
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [0, 0, 300, 50]);
                this.font = new me.Font("Arial", 26, "black");

            },
            //draws abilities to purchase
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Press F to select SPELLCASTER", this.pos.x, this.pos.y);
                this.font.draw(renderer.getContext(), "Press G to select KNIGHT", this.pos.x + 0, this.pos.y + 50);
                this.font.draw(renderer.getContext(), "Press H to select BEAST" , this.pos.x + 0, this.pos.y + 100);
                }
        })));
       
       this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
           if(action === "F"){
               me.state.change(me.state.PLAY);
               
           }else if (action === "G"){
               
               
           }else if (action === "H"){
               
               
           
           }
       });
       
    },

    onDestroyEvent: function() {
        //unbinds keys to use on game end
        me.input.unbindKey(me.input.KEY.F, "F");
        me.input.unbindKey(me.input.KEY.G, "G");
        me.input.unbindKey(me.input.KEY.H, "H");
        
        me.event.unsubscribe(this.handler);
    }
});
