module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel: objects.Label;
        backButton: objects.Button;
        scoreBoardLabel: objects.Label;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label();
            this.scoreBoardLabel = new objects.Label();
            this.backButton = new objects.Button();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
<<<<<<< HEAD
            this.endLabel = new objects.Label("Your Score: " + config.Game.SCORE, "70px", "Consolas", "#000000", 320, 180, true);
=======
            if (config.Game.SCORE > config.Game.SCOREBOARD)
                config.Game.SCOREBOARD = config.Game.SCORE;
            this.scoreBoardLabel = new objects.Label("Highest Score: " + config.Game.SCOREBOARD, "40px", "Consolas", "#FFFFFF", 320, 100, true);
            this.endLabel = new objects.Label("You Score: " + config.Game.SCORE, "50px", "Consolas", "#000000", 320, 180, true);
>>>>>>> e983cc870a345caaaa3fe7df1b48f02fcc1de850
            // buttons
            this.backButton = new objects.Button('./Assets/images/backButton.png', 320, 430, true);
            this.Main();
        }        
        
        public Update(): void 
        {
           
        }
        
        public Main(): void 
        {
       
            this.addChild(this.scoreBoardLabel);
            this.addChild(this.endLabel);

            this.addChild(this.backButton);

            this.backButton.on("click", ()=>{
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.START;
                config.Game.SCENE = 0;
            });

        }

        
    }
}