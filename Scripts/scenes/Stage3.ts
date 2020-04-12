module scenes
{
    export class Stage3 extends objects.Scene
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
        private computer:objects.Computer;
        private biscuit:objects.Biscuit;
     
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
            this.assignment = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 470, 240, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"),100,150,true);
            this.score = new objects.Label("Score: " + config.Game.SCORE,"20px", "Arial", "#000000", 15,30,false);
            this.dogs = new Array<objects.Dog>();
            this.dogs[0] = new objects.Dog(config.Game.ASSETS.getResult("dog"),200,240,true);
            this.dogs[1] = new objects.Dog(config.Game.ASSETS.getResult("dog"),400,360,true);
            this.computer = new objects.Computer(config.Game.ASSETS.getResult("computer"),300,320,true);
            this.biscuit = new objects.Biscuit(config.Game.ASSETS.getResult("biscuit"),500,150,true);
            this.tables = new Array<objects.classroomObstacle>();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,200,true);
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,440,true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,200,true);            
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,320,true);         
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,440,true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15 , 10, false);
            this.dogs[0].speed = 3;
            this.dogs[1].speed = 5;
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
                    this.assignment.HandIn();
                }
            }   
            this.player1.Update();
            this.computer.Update();
            this.assignment.Update();
            this.dogs.forEach(dog => {
                dog._RunHorizontal();
                dog.Update();
                if(managers.Collision.AABBCheck(this.player1,dog))
                {
                    this.Clean();
                    console.log("go to end scene");
                    config.Game.SCENE = scenes.State.END
                }
                if(managers.Collision.AABBCheck(this.biscuit,dog))
                {
                    dog.barkSound.stop();
                    config.Game.PLAYER.isHoldingItem = false;
                    this.biscuit.state = objects.ObjectState.NORMAL;
                    this.removeChild(this.biscuit);
                    dog._Stop();
                }
            });
            this.tables.forEach(table => {
                table.Update();
            });
            this.biscuit.Update();
            this.score.text = "Score: " + config.Game.SCORE;
            
        }
        
        public Main(): void 
        {
            console.log(`%cStand below the computer and hold up to do lab assignment`, "color: blue; font-size: 16px;");
            console.log(`%cUse biscuit to stop the dog`, "color: blue; font-size: 16px;");
        
            //objects
            this.addChild(this.assignment);
            for (const table of this.tables) {
                this.addChild(table);
            }
            this.addChild(this.biscuit);
            this.addChild(this.computer);
    
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
                }
            }, 1000);

        }
        //clear the stage
        public Clean() : void{
            this.dogs[0].barkSound.stop();
            this.dogs[1].barkSound.stop();
            if (this.assignment.writeSound != null)
                this.assignment.writeSound.stop();
            managers.Input.playWrite = true;
            this.removeAllChildren();
        }

        
    }
}