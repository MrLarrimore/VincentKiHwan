game.EnemyCreep = me.Entity.extend({
init: function(x, y, settings) {
this._super(me.Entity, 'init', [x, y, {
image: "creep1",
        height: 64,
        width: 32,
        spriteHeight: "64",
        spriteWidth: "32",
        getShape: function() {
        return(new me.Rect(0, 0, 32, 64)).toPolygon();
        }
}]);
        this.health = game.data.enemyCreepHealth;
        this.alwaysUpdate = true;
        //lets us know if enemy is attacking
        this.attacking = false;
        //tracks creeps last attack
        this.lastAttacking = new Date().getTime();
        //tracks last time creep hit anything
        this.jumping = false;
        //this.attacking lets us know if the enemy is currently attacking
        this.attacking = false;
        //keeps track of when our creep last attacked anything
        this.lastAttacking = new Date().getTime();
        //keeps track of the last time our creep hit anything
        this.lastHit = new Date().getTime();
        this.now = new Date().getTime();
        this.body.setVelocity(3, 20);
        this.type = "EnemyCreep";
        this.renderable.addAnimation("walk", [3, 4, 5], 80);
        this.renderable.setCurrentAnimation("walk");
        },
        loseHealth: function(damage) {
        this.health = this.health - damage;
        },
        update: function(delta) {
        if (this.health <= 0) {
        me.game.world.removeChild(this);
        }
        this.now = new Date().getTime();
                this.body.vel.x -= this.body.accel.x * me.timer.tick;
        },
        collideHandler: function(response) {
        if (response.b.type === 'PlayerBase') {
        this.attacking = true;
                this.lastAttacking = this.now;
                this.body.vel.x = 0;
                this.pos.x = this.pos.x + 1;
                if ((this.now - this.lastHit >= 1000)) {
        this.lastHit = this.now;
                response.b.loseHealth(game.data.enemyCreepAttack);
        }
        } else if (response.b.type === 'PlayerEntity') {
        var xdif = this.pos.x - response.b.pos.x;
                //lets us know if creeps are currently attacking
                this.attacking = true;
                //keeps track of last attack
                this.lastAttacking = this.now;
                if (xdif > 0) {
        //allows creep to maintain position
        this.pos.x = this.pos.x + 1;
                //stops creep from moving
                this.body.vel.x = 0;
        }
        this.pos.x = this.pos.x + 1;
                if ((this.now - this.lastHit >= 1000) && xdif > 0) {
        this.lastHit = this.now;
                //makes lose one health
                response.b.loseHealth(game.data.enemyCreepAttack);
        }
        }
    
        if (response.b.type === 'PlayerBaseEntity') {
this.attacking = true;
        this.lastAttacking = this.now;
        this.body.vel.x = 0;
        //keeps moving the creep to the right to maintain its position
        //checks that it has been at least 1 second since this creep hit a base
        if ((this.now - this.lastHit >= 1000)) {
this.lastHit = this.now;
        //makes the player base call its loseHealth function and passes it a
        //damage of 1
        response.b.loseHealth(game.data.enemyCreepAttack);
        }
} 
else if (response.b.type === 'PlayerCreep') {
this.attacking = true;
        this.lastAttacking = this.now;
        this.body.vel.x = 0;
        //keeps moving the creep to the right to maintain its position
        //checks that it has been at least 1 second since this creep hit a base
        if ((this.now - this.lastHit >= 1000)) {
this.lastHit = this.now;
        //makes the player base call its loseHealth function and passes it a
        //damage of 1
        response.b.loseHealth(game.data.enemyCreepAttack);
        }
} else if (response.b.type === 'PlayerEntity') {
var xdif = this.pos.x - response.b.pos.x;
        this.attacking = true;
        this.lastAttacking = this.now;
        if (xdif > 0) {
//keeps moving the creep to the right to maintain its position           
this.body.vel.x = 0;
        }
//checks that it has been at least 1 second since this creep hit a base
if ((this.now - this.lastHit >= 1000) && xdif > 0) {
this.lastHit = this.now;
        //makes the player call its loseHealth function and passes it a
        //damage of 1
        response.b.loseHealth(game.data.enemyCreepAttack);
        }
}
//if creep collides with jump entitty, it jumps. (Creep's AI)

 if (response.b.type === 'Jump') {
            this.body.vel.y -= this.body.maxVel.y * me.timer.tick;
            this.body.jumping = true;
            }
    }

});
