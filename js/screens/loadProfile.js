game.LoadProfile = me.ScreenObject.extend({
<<<<<<< HEAD
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('load-screen')), -10);
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("load").style.visibility = "visible";
        
        me.input.unbindKey(me.input.KEY.B);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.S);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.Q);
        
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [0, 0, 300, 50]);
                this.font = new me.Font("Arial", 26, "black");

            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Enter Username and Password", this.pos.x, this.pos.y);
                
            }
        })));
      
    },

    onDestroyEvent: function() {
       document.getElementById("input").style.visibility = "hidden";
       document.getElementById("load").style.visibility = "hidden";
    }
=======
        /**	
         *  action to perform on state change
         */
        onResetEvent: function() {
            // play the audio track
            me.audio.playTrack("menu-bgm");
 
            me.game.world.addChild( new me.Sprite (0, 0, me.loader.getImage('load-screen')), -10); 
            game.data.gameover = false;

            document.getElementById("input").style.visibility = "visible";
            document.getElementById("load").style.visibility = "visible";

            me.input.unbindKey(me.input.KEY.B);
            me.input.unbindKey(me.input.KEY.Q);
            me.input.unbindKey(me.input.KEY.E);
            me.input.unbindKey(me.input.KEY.W);
            me.input.unbindKey(me.input.KEY.A);

            me.game.world.addChild(new (me.Renderable.extend({
                init: function(){
                    this._super(me.Renderable, 'init', [10, 10, 300, 50])
                    this.font = new me.Font("Arial", 26, "white");
                },
                //drawing text and adjusting its position with width and height
                draw: function(renderer){
                    this.font.draw(renderer.getContext(), "ENTER YOUR USERNAME AND PASSWORD", this.pos.x, this.pos.y);
                },


            })));


        },


        /**	
         *  action to perform when leaving this screen (state change)
         */
        onDestroyEvent: function() {
            document.getElementById("input").style.visibility = "hidden";
            document.getElementById("load").style.visibility = "hidden";
            me.audio.stopTrack();
        }
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
});
