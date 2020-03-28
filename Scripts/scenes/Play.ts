module scenes
{
    export class Play extends objects.Scene
    {

        // PUBLIC PROPERTIES
        private player1:objects.Character;
        private testObject:objects.classroomItem;
        private test:createjs.Bitmap;
        private test2:createjs.Bitmap;
        private dog1:objects.classroomObject;
        private timer:objects.timer;
        private timerLabel: objects.Label;
        private score:createjs.Text;
     
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
            this.test = new createjs.Bitmap("./Assets/Images/Char2/tile000.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
            this.testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, this.test, this.test2);
            this.player1 = new objects.Character("./Assets/Images/Char1/tile000.png", 320, 240, true);
            this.dog1 = new objects.classroomObject("./Assets/Images/Dog-L.png",100,150,true);
            this.score = new objects.Label("Score:","20px", "Arial", "#000000", 15,30,false);
            //start timer
            this.timer = new objects.timer(10); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15 , 10, false);

            config.Game.PLAYER = this.player1;
            this.Main();
        }        
        
        public Update(): void 
        {
            managers.Collision.AABBCheck(this.testObject,this.dog1)
            if(managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject,this.dog1))
            {
                console.log(this.testObject.prog);
                if(this.testObject.prog >= 50)
                {
                    this.score.text = "Score: " + this.testObject.prog;
                    this.testObject.HandIn();
                }
            }   
            managers.Collision.AABBCheck(this.player1,this.dog1)
            if(managers.Collision.AABBCheck(this.player1,this.dog1))
            {
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END
            }
            this.player1.Update();
            this.testObject.Update();
            this.dog1.Update();
        }
        
        public Main(): void 
        {
            console.log(`%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar`, "color: blue; font-size: 18px;");
            console.log(`%cHand in assignment at the table (only if assignment progress is > 50%)`, "color: black; font-size: 12px;");
        
            //objects
            this.addChild(this.testObject);
    
            //player
            this.addChild(this.player1);
    
            //dog
            this.addChild(this.dog1);

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
                    window.clearInterval(interval);
                }
            }, 1000);
            //this._startButton.on("click", ()=>{
                //config.Game.SCENE = scenes.State.PLAY;
            //});

        }

        
    }
}