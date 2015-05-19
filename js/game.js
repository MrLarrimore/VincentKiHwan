
/* Game namespace */
var game = {
<<<<<<< HEAD
    // an object where to store game information
    data: {
        // score
        score: 0,
        enemyBaseHealth: 10,
        playerBaseHealth: 10,
        enemyCreepHealth: 2,
        playerHealth: 10,
        enemyCreepAttack: 1,
        playerAttack: 1,
        playerAttackTimer: 1000,
        enemyCreepAttackTimer: 1000,
        playerMoveSpeed: 5,
        creepMoveSpeed: 5,
        gameTimerManager: "",
        heroDeathManager: "",
        player: "",
        exp: 0,
        skill1: 0,
        skill2: 0,
        skill3: 0,
        exp1: 0,
        exp2: 0,
        exp3: 0,
        exp4: 0,
        ability1: 0,
        ability2: 0,
        ability3: 0,
        win: "",
        gold: 0,
        pausePos: "",
        buyscreen: "",
        buytext: "",
   },
    // Run on page load.
    "onload": function() {
        // Initialize the video.
        if (!me.video.init("screen", me.video.CANVAS, 1067, 600, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function() {
                me.plugin.register.defer(this, debugPanel, "debug");
            });
        }
        //allows our SPENDEXP, LOAD, AND NEW screen to work
        me.state.SPENDEXP = 112;
        me.state.LOAD = 113;
        me.state.NEW = 114;

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },
    // Run on game resources loaded.
    "loaded": function() {
        me.pool.register("player", game.PlayerEntity, true);
        me.pool.register("PlayerBase", game.PlayerBaseEntity, true);
        me.pool.register("EnemyBase", game.EnemyBaseEntity, true);
        me.pool.register("EnemyCreep", game.EnemyCreep, true);
        me.pool.register("GameTimerManager", game.GameTimerManager);
        me.pool.register("HeroDeathManager", game.HeroDeathManager);
        me.pool.register("ExperienceManager", game.ExperienceManager);
        me.pool.register("SpendGold", game.SpendGold);

        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.SPENDEXP, new game.SpendExp());
        me.state.set(me.state.LOAD, new game.LoadProfile());
        me.state.set(me.state.NEW, new game.NewProfile());

        // Start the game.
        me.state.change(me.state.MENU);
    }
=======

	// an object where to store game information
	data : {
		// score
                //set global variables
		score : 0,
                option1: "",
                option2: "",
                enemyBaseHealth : 15,
                playerBaseHealth : 15,
                enemyCreepHealth: 5,
                enemyHeroHealth: 10,
                playerCreepHealth: 5,
                playerHealth: 10,
                enemyCreepAttack: 1,
                enemyHeroAttack: 2,
                playerCreepAttack: 1,
                playerAttack: 1,
                orcBaseDamage: 10,
                orcBaseHealth: 100,
                orcBaseSpeed: 3,
                orcBaseDefense: 0,
                playerAttackTimer: 1000,
                enemyCreepAttackTimer: 1000,
                enemyHeroAttackTimer: 1000,
                playerCreepAttackTimer: 1000,
                playerMoveSpeed: 6,
                creepMoveSpeed: 5,
                enemyMoveSpeed: 6,
                gameTimerManager: "",
                heroDeathManager: "",
                player: "",
                spearTimer: 15,
                exp: 0,
                gold: 0,
                ability1: 0,
                ability2: 0,
                ability3: 0,
                skill1: 0,
                skill2: 0,
                skill3: 0,
                exp1: 0,
                exp2: 0,
                exp3: 0,
                exp4: 0,
                win: "",
                pausePos: "",
                buyscreen: "",
                buytext: "",
                gameover: "",
                miniMap: "",
                miniPlayer: "",
                pause:"",
                jump:"",
	},
	
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	if (!me.video.init("screen",  me.video.CANVAS, 1067, 600, true, '1.0')) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(this, debugPanel, "debug");
		});
	}
        
        me.state.SPENDEXP = 112;
        me.state.LOAD = 113;
        me.state.NEW = 114;
        

	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
},

	// Run on game resources loaded.
	"loaded" : function () {
            //registering player
                me.pool.register("player", game.PlayerEntity, true);
                me.pool.register("PlayerBase", game.PlayerBaseEntity);
                me.pool.register("EnemyBase", game.EnemyBaseEntity);
                me.pool.register("EnemyCreep", game.EnemyCreep, true);
                me.pool.register("PlayerCreep", game.PlayerCreep, true);
                me.pool.register("GameTimerManager", game.GameTimerManager); 
                me.pool.register("HeroDeathManager", game.HeroDeathManager);                
                me.pool.register("ExperienceManager", game.ExperienceManager);              
                me.pool.register("SpendGold", game.SpendGold);              
                me.pool.register("spear", game.SpearThrow);              
                me.pool.register("pause", game.Pause);
                me.pool.register("EnemyEntity", game.EnemyEntity, true);
                me.pool.register("Jump", game.Jump, true);
            
            
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());
		me.state.set(me.state.SPENDEXP, new game.SpendExp());
		me.state.set(me.state.LOAD, new game.LoadProfile());
		me.state.set(me.state.NEW, new game.NewProfile());

		// Start the game.
		me.state.change(me.state.PLAY);
	}
>>>>>>> 6d03f25d382e85c8ff292e6451e9fa055bda24bd
};
