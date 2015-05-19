game.PlayerBaseEntity = me.Entity.extend({
<<<<<<< HEAD
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                height: 100,
                width: 100,
                spriteHeight: "100",
                spriteWidth: "100",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 60)).toPolygon();
=======
    //basically same thing with enemy base entity
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
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
        this.health = game.data.playerBaseHealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
<<<<<<< HEAD
        this.type = "PlayerBase";
=======
        this.type = "PlayerBaseEntity";

>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    update: function(delta) {
        if (this.health <= 0) {
<<<<<<< HEAD
            console.log("broken");
=======
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
            this.broken = true;
            game.data.win = false;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
<<<<<<< HEAD
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    loseHealth: function(damage) {
        this.health = this.health - damage;
    },
    onCollision: function() {

    }

});

game.EnemyBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                height: 100,
                width: 100,
                spriteHeight: "100",
                spriteWidth: "100",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 60)).toPolygon();
                }
            }]);
        this.broken = false;
        game.data.win = true;
        this.health = game.data.enemyBaseHealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "EnemyBaseEntity";
        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
=======

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
