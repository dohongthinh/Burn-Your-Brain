module scenes
{
    export class Play extends objects.Scene
    {

        // PUBLIC PROPERTIES
        private player1:objects.Character;
        private testObject:objects.classroomItem;
        private testObject2:objects.classroomItem;
        private test:createjs.Bitmap;
        private test2:createjs.Bitmap;
        private table:objects.Table;
        private timer:objects.timer;
        private timerLabel: objects.Label;
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
            this.test = new createjs.Bitmap("./Assets/Images/Amiya1.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
            this.testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, this.test, this.test2);
            this.testObject2 = new objects.classroomItem("./Assets/Images/Amiya2.png", 120, 140, true, this.test2, this.test);
            this.player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
            this.table = new objects.Table("./Assets/Images/Small_square_table.png",100,100,true);
            
            //start timer
            this.timer = new objects.timer(10); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Aerial", "#000000", 5 , 0, false);

            config.Game.PLAYER = this.player1;
            this.Main();
        }        
        
        public Update(): void 
        {
            this.player1.Update();
            this.testObject.Update();
            this.testObject2.Update();
        }
        
        public Main(): void 
        {
            console.log(`%cMovement: WASD, Pick Up/ Put Down: E, ...: Spacebar `, "color: blue; font-size: 18px;");
        
            //objects
            this.addChild(this.testObject);
            this.addChild(this.testObject2);
    
            //player
            this.addChild(this.player1);
    
            //table
            this.addChild(this.table);
            this.addChild(this.timerLabel);

            let count:number;           
            let interval = window.setInterval( () =>
            {
                count = this.timer.Update(); 
                this.timerLabel.text = ("Time left: " + this.timer.getMinutes+ "m " + this.timer.getSeconds + "s");
                if(count <1)
                {// timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    window.clearInterval(interval);
                }
            }, 1000);
            //this._startButton.on("click", ()=>{
                //config.Game.SCENE = scenes.State.PLAY;
            //});

        }

        
    }
}