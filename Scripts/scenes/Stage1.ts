module scenes
{
    export class Stage1 extends objects.Scene
    {

        // PUBLIC PROPERTIES
        private player1:objects.Character;
        private assignment:objects.classroomItem;
        private player2:objects.Character;
        private timer:objects.timer;
        private timerLabel: objects.Label;
        private score:createjs.Text;
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
            this.assignment = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 600, 480, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"),100,150,true);
            this.score = new objects.Label("Score: " + config.Game.SCORE,"20px", "Arial", "#000000", 15,30,false);
            this.tables = new Array<objects.classroomObstacle>();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),200,170,true);           
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),200,300,true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),200,430,true);
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,115,true);
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,235,true);
            this.tables[5] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),300,365,true);
            this.tables[6] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),400,170,true);           
            this.tables[7] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),400,300,true);
            this.tables[8] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),400,430,true);
            this.tables[9] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,115,true);
            this.tables[10] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,235,true);
            this.tables[11] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"),500,365,true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15 , 10, false);

            config.Game.PLAYER = this.player1;
            this.Main();
        }        
        
        public Update(): void 
        {
            managers.Collision.AABBCheck(this.assignment,this.player2)
            if(managers.Input.pickUp && managers.Collision.AABBCheck(this.assignment,this.player2))
            {
                console.log(this.assignment.prog);
                config.Game.SCORE += this.assignment.prog;
                this.score.text = "Score: " + config.Game.SCORE;
                this.assignment.HandIn();
            }  
             
            
            this.player1.Update();
            this.assignment.Update();
            this.tables.forEach(table => {
                table.Update();
            });
            //this.timer.Update();
            
        }
        
        public Main(): void 
        {
            //objects
            this.addChild(this.assignment);
            for (const table of this.tables) {
                this.addChild(table);
            }
    
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);

            this.addChild(this.timerLabel);
            this.addChild(this.score);

            let count:number;           
            let interval = window.setInterval( () =>
            {
                count = this.timer.Update(); 
                this.timerLabel.text = ("Time left: " + this.timer.getMinutes+ "m " + this.timer.getSeconds + "s");
                if(/*count <1 ||*/ config.Game.SCENE != scenes.State.STAGE1 )
                {// timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    if (this.assignment.writeSound != null)
                        this.assignment.writeSound.stop();
                    managers.Input.playWrite = true;
                    window.clearInterval(interval);
                    console.log("clearInterval")

                    if (config.Game.SCORE >= 100){
                        config.Game.SCENE = scenes.State.STAGE2;
                    }
                }
            }, 1000);


        }

        
    }
}