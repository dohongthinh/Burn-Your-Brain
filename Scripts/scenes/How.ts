module scenes
{
    export class How extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _nextButton: objects.Button;
        private _how: objects.classroomObstacle;

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
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("next"), 320, 430, true);
            this._how = new objects.classroomObstacle(config.Game.ASSETS.getResult("instruction"), 320, 210, true);
            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {        
        
            this.addChild(this._nextButton);
            this.addChild(this._how);
            this._nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.STAGE1;
            });

        }

        
    }
}