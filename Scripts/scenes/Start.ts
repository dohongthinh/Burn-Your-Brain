module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;


        // PUBLIC PROPERTIES

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
             //instantiate a new Text object
             this._welcomeLabel = new objects.Label("Burn Your Brain", "40px", "Consolas", "#ffffff", 320, 180, true);
             // buttons
             this._startButton = new objects.Button("./Assets/Images/startButton.png", 320, 430, true);
            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

            console.log(`%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar`, "color: blue; font-size: 18px;");
            console.log(`%cHand in assignment to the professor using E`, "color: black; font-size: 12px;");
        
       
            this.addChild(this._welcomeLabel);

        
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.STAGE3;
            });

        }

        
    }
}