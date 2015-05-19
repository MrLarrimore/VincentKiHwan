game.EnemyBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
<<<<<<< HEAD
                height: 100,
                width: 100,
                spriteHeight: "100",
                spriteWidth: "100",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 60)).toPolygon();
=======
                width: 100,
                height: 100,
                spritewidth: "100",
                spriteheight: "100",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 70)).toPolygon();
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
                }
            }]);
        this.broken = false;
        this.health = game.data.enemyBaseHealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "EnemyBaseEntity";
<<<<<<< HEAD
=======

//set animation
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    update: function(delta) {
<<<<<<< HEAD
        if (this.health <= 0) {
            this.broken = true;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
=======
        //Enemy base's health goes below 0, then you win the game and display broken base animation
        if (this.health <= 0) {
            this.broken = true;
            game.data.win = true;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);

>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    onCollision: function() {

    },
<<<<<<< HEAD
    loseHealth: function() {
        this.health--;
    }

});
=======
    loseHealth: function(damage) {
        this.health = this.health - damage;
    }

});
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
