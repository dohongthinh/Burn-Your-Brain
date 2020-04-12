module scenes
{
    export class How extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _nextButton: objects.Button;
        private _howButton: objects.classroomObstacle;

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
            // buttons
            this._nextButton = new objects.Button("./Assets/Images/nextButton.png", 320, 430, true);
            this._howButton = new objects.classroomObstacle("./Assets/Images/HowToPlay.png", 320, 210, true);
            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {        
        
            this.addChild(this._nextButton);
            this.addChild(this._howButton);
            this._nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.STAGE1;
            });

        }

        
    }
}