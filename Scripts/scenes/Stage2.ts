module scenes
{
    export class Stage2 extends objects.Scene
    {

        // PUBLIC PROPERTIES
        private player1:objects.Character;
        private assignment:objects.classroomItem;
        private player2:objects.Character;
        private timer:objects.timer;
        private timerLabel: objects.Label;
        private score:createjs.Text;
        private dogs: Array<objects.Dog>;
        private tables: Array<objects.classroomObstacle>;
     
        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
            this.assignment = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 600, 500, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"),100,150,true);
            this.score = new objects.Label("Score: " + config.Game.SCORE,"20px", "Arial", "#000000", 15,30,false);
            this.dogs = new Array<objects.Dog>();
            this.dogs[0] = new objects.Dog(config.Game.ASSETS.getResult("dog"),200,40,true);
            this.dogs[1] = new objects.Dog(config.Game.ASSETS.getResult("dog"),400,500,true);
            this.tables = new Array<objects.classroomObstacle>();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,150,true);
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,280,true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,410,true);            
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,150,true);
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,280,true);
            this.tables[5] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,410,true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15 , 10, false);

            config.Game.PLAYER = this.player1;
            this.Main();
        }        
        
        public Update(): void 
        {
            if(managers.Input.pickUp && managers.Collision.AABBCheck(this.assignment,this.player2))
            {
                console.log(this.assignment.prog);
                if(this.assignment.prog >= 50)
                {
                    config.Game.SCORE += this.assignment.prog;
                    this.score.text = "Score: " + config.Game.SCORE;
                    this.assignment.HandIn();
                    //config.Game.SCENE = scenes.State.END;
                }
            }  
             
            this.dogs.forEach(dog => {
                dog._RunVertical();
                dog.Update();
                if(managers.Collision.AABBCheck(this.player1,dog))
                {
                    this.Clean();
                    console.log("go to end scene");
                    config.Game.SCENE = scenes.State.END
                }
            });
            
            this.player1.Update();
            this.assignment.Update();
            this.tables.forEach(table => {
                table.Update();
            });
            
        }
        
        public Main(): void 
        {
            console.log(`%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar`, "color: blue; font-size: 18px;");
            console.log(`%cHand in assignment at the table (only if assignment progress is > 50%)`, "color: black; font-size: 12px;");
        
            //objects
            this.addChild(this.assignment);
            for (const table of this.tables) {
                this.addChild(table);
            }
    
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            //dog
            for (const dog of this.dogs) {
                this.addChild(dog);
            }
            this.addChild(this.timerLabel);
            this.addChild(this.score);

            let count:number;           
            let interval = window.setInterval( () =>
            {
                count = this.timer.Update(); 
                this.timerLabel.text = ("Time left: " + this.timer.getMinutes+ "m " + this.timer.getSeconds + "s");
                if(count <1)
                {// timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    
                    this.Clean();
                    window.clearInterval(interval);
                    if (config.Game.SCORE >= 600){
                        config.Game.SCENE = scenes.State.STAGE3;
                    }
                }
            }, 1000);

        }
        //clear the stage
        public Clean() : void{
            this.dogs[0].barkSound.stop()
            this.dogs[1].barkSound.stop();
            if (this.assignment.writeSound != null)
                this.assignment.writeSound.stop();
            managers.Input.playWrite = true;
            this.removeAllChildren();
        }

        
    }
}