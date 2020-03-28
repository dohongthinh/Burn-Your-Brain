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
        constructor(imagePath:string, x:number, y:number, isCentered:boolean)
        {
            super(imagePath, x, y, isCentered);
            this.Start();

        }

        private dy = 3;

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds(): void {
            if(this.x > 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
            // checks the bot boundary
            if(this.y > 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
                this.dy = -3;
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.dy = 3;
            }
        }

        
        // PUBLIC LIFE CYCLE METHODS

        /**
         * Initialization happens here
         *
         * @memberof classroomObstacle
         */
        public Start():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
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
                let tiles_bottom = this.y + this.halfHeight;
                let tiles_top = this.y - this.halfHeight;
                let tiles_left = this.x - this.halfWidth;
                let tiles_right = this.x + this.halfWidth;
                let b_collision = tiles_bottom - player_top;
                let t_collision = player_bottom - tiles_top;
                let l_collision = player_right - tiles_left;
                let r_collision = tiles_right - player_left;
                if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision && managers.Input.moveDown )
                {                    
                    config.Game.PLAYER.y = this.y - this.halfHeight;
                }
                if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision && managers.Input.moveUp )                        
                {
                    config.Game.PLAYER.y = this.y + this.halfHeight;
                }
                if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision && managers.Input.moveRight)
                {
                    config.Game.PLAYER.x = this.x - this.halfWidth;
                }
                if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision && managers.Input.moveLeft)
                {
                    config.Game.PLAYER.x = this.x + this.halfWidth;
                }
            }
        }
        public Reset():void
        {

        }
    }
}