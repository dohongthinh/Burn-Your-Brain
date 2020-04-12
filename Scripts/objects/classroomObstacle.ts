module objects 
{
    export class classroomObstacle extends GameObject
    {
        private _state:ObjectState;

        get state()
        {
            return this._state;
        }
        set state(newState:ObjectState)
        {
            this._state = newState;
        }

        // constructor
        constructor(image:Object = config.Game.ASSETS.getResult("table"), x:number, y:number, isCentered:boolean)
        {
            super(image, x, y, isCentered);
            this.Start();

        }

        private dy = 3;

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds(): void {
        }

        
        // PUBLIC LIFE CYCLE METHODS

        /**
         * Initialization happens here
         *
         * @memberof classroomObstacle
         */
        public Start():void
        {
        }

        public Update():void
        {    
            managers.Collision.AABBCheck(config.Game.PLAYER, this);
            if(this.isColliding)
            {
                let player_bottom = config.Game.PLAYER.y + config.Game.PLAYER.halfHeight;
                let player_top = config.Game.PLAYER.y - config.Game.PLAYER.halfHeight;
                let player_left = config.Game.PLAYER.x - config.Game.PLAYER.halfWidth;
                let player_right = config.Game.PLAYER.x + config.Game.PLAYER.halfWidth;
                let object_bottom = this.y + this.halfHeight;
                let object_top = this.y - this.halfHeight;
                let object_left = this.x - this.halfWidth;
                let object_right = this.x + this.halfWidth;
                if (player_bottom > object_top && managers.Input.moveDown)
                {                    
                    config.Game.PLAYER.y = config.Game.PLAYER.y - 5;
                }
                if (player_top < object_bottom && managers.Input.moveUp )                        
                {
                    config.Game.PLAYER.y = config.Game.PLAYER.y + 5;
                }
                if (player_right > object_left && managers.Input.moveRight)
                {
                    config.Game.PLAYER.x = config.Game.PLAYER.x - 5;
                }
                if (player_left< object_right && managers.Input.moveLeft)
                {
                    config.Game.PLAYER.x = config.Game.PLAYER.x + 5;
                }
            }
        }
        public Reset():void
        {

        }
    }
}