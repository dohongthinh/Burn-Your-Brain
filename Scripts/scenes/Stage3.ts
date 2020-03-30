module scenes
{
    export class Stage3 extends objects.Scene
    {

        // PUBLIC PROPERTIES
        private player1:objects.Character;
        private testObject:objects.classroomItem;
        private test:createjs.Bitmap;
        private test2:createjs.Bitmap;
        private player2:objects.Character;
        private timer:objects.timer;
        private timerLabel: objects.Label;
        private score:createjs.Text;
        private dog1:objects.Dog;
        private dog2:objects.Dog;
        private table1:objects.classroomObstacle;
        private table2:objects.classroomObstacle;
        private table3:objects.classroomObstacle;
        private table4:objects.classroomObstacle;
        private table5:objects.classroomObstacle;
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
            this.test = new createjs.Bitmap("./Assets/Images/closedNotebook.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/openNotebook.png");
            this.testObject = new objects.classroomItem("./Assets/Images/openNotebook.png", 470, 240, true, this.test, this.test2);
            this.player1 = new objects.Character("./Assets/Images/Char1/tile000.png", 50, 240, true);
            this.player2 = new objects.Character("./Assets/Images/Pro000.png",100,150,true);
            this.score = new objects.Label("Score: " + config.Game.SCORE,"20px", "Arial", "#000000", 15,30,false);
            this.dog1 = new objects.Dog("./Assets/Images/Dog-L.png",200,240,true);
            this.dog2 = new objects.Dog("./Assets/Images/Dog-R.png",400,360,true);
            this.table1 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png",300,200,true);
            this.computer = new objects.Computer("./Assets/Images/comp.png",300,320,true);
            this.biscuit = new objects.Biscuit("./Assets/Images/DogBiscuit.png",500,150,true);
            this.table2 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png",300,440,true);
            this.table3 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png",500,200,true);            
            this.table4 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png",500,320,true);         
            this.table5 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png",500,440,true);
            //start timer
            this.timer = new objects.timer(30); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15 , 10, false);
            this.dog1.speed = 3;
            this.dog2.speed = 5;
            config.Game.PLAYER = this.player1;
            this.Main();
        }        
        
        public Update(): void 
        {
            if(managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject,this.player2))
            {
                console.log(this.testObject.prog);
                if(this.testObject.prog >= 50)
                {
                    config.Game.SCORE += this.testObject.prog;
                    this.testObject.HandIn();
                }
            }   
            if(managers.Collision.AABBCheck(this.player1,this.dog1))
            {
                this.dog1.barkSound.stop();
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END
            }
            if(managers.Collision.AABBCheck(this.player1,this.dog2))
            {
                this.dog2.barkSound.stop();
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END
            }
            if(managers.Collision.AABBCheck(this.biscuit,this.dog1))
            {
                this.dog1.barkSound.stop();
                config.Game.PLAYER.isHoldingItem = false;
                this.biscuit.state = objects.ObjectState.NORMAL;
                this.removeChild(this.biscuit);
                this.dog1._Stop();
            }
            if(managers.Collision.AABBCheck(this.biscuit,this.dog2))
            {
                this.dog2.barkSound.stop();
                config.Game.PLAYER.isHoldingItem = false;
                this.biscuit.state = objects.ObjectState.NORMAL;
                this.removeChild(this.biscuit);
                this.dog2._Stop();
            }
            this.player1.Update();
            this.computer.Update();
            this.testObject.Update();
            this.dog1._RunHorizontal();
            this.dog1.Update();
            this.dog2._RunHorizontal();
            this.dog2.Update();
            this.table1.Update();
            this.table2.Update();
            this.table3.Update();
            this.table4.Update();
            this.biscuit.Update();
            this.table5.Update();
            this.score.text = "Score: " + config.Game.SCORE;
            
        }
        
        public Main(): void 
        {
            console.log(`%cStand below the computer and hold up to do lab assignment`, "color: blue; font-size: 16px;");
            console.log(`%cUse biscuit to stop the dog`, "color: blue; font-size: 16px;");
        
            //objects
            this.addChild(this.testObject);
            this.addChild(this.table1);
            this.addChild(this.table2);
            this.addChild(this.table3);
            this.addChild(this.table4);
            this.addChild(this.table5);
            this.addChild(this.biscuit);
            this.addChild(this.computer);
    
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            //dog
            this.addChild(this.dog1);
            this.addChild(this.dog2);

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
            this.dog1.barkSound.stop();
            this.dog2.barkSound.stop();
            if (this.testObject.writeSound != null)
                this.testObject.writeSound.stop();
            managers.Input.playWrite = true;
            this.removeAllChildren();
        }

        
    }
}