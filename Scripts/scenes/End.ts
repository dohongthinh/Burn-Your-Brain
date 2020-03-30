module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel: objects.Label;
        backButton: objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label();
            this.backButton = new objects.Button();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this.endLabel = new objects.Label("Your Score: " + config.Game.SCORE, "70px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this.backButton = new objects.Button('./Assets/images/backButton.png', 320, 430, true);
            this.Main();
        }        
        
        public Update(): void 
        {
           
        }
        
        public Main(): void 
        {
       
            this.addChild(this.endLabel);

        
            this.addChild(this.backButton);

            this.backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.START;
                config.Game.SCENE = 0;
            });

        }

        
    }
}