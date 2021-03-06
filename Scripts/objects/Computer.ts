module objects 
{
    export class Computer extends GameObject
    {
        private _progLabel:createjs.Text;
        private _prog: number =0;
        private _complete: boolean = false;


        get prog()
        {
            return this._prog;
        }
        // constructor
        constructor(image:Object, x:number, y:number, isCentered:boolean)
        {
            super(image, x, y, isCentered);
            this.Start();
            this._progLabel = new createjs.Text("Finish lab assignment for 1000 pts","","white");
            config.Game.STAGE.addChild(this._progLabel)

        }

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
            let player_bottom = config.Game.PLAYER.y + config.Game.PLAYER.halfHeight;
            let player_top = config.Game.PLAYER.y - config.Game.PLAYER.halfHeight;
            let player_left = config.Game.PLAYER.x - config.Game.PLAYER.halfWidth;
            let player_right = config.Game.PLAYER.x + config.Game.PLAYER.halfWidth;
            let object_bottom = this.y + this.halfHeight;
            let object_top = this.y - this.halfHeight;
            let object_left = this.x - this.halfWidth;
            let object_right = this.x + this.halfWidth;
            this._progLabel.x = this.x;
            this._progLabel.y = this.y -50;
            managers.Collision.AABBCheck(config.Game.PLAYER, this);
            if(this.isColliding)
            {
                if (player_bottom > object_top && managers.Input.moveDown)
                {                    
                    config.Game.PLAYER.y = config.Game.PLAYER.y - 5;
                }
                if (player_top < object_bottom && managers.Input.moveUp )                        
                {
                    config.Game.PLAYER.y = config.Game.PLAYER.y + 5;
                    if(this._prog <100)
                    {
                        this._prog +=0.25;
                        this._progLabel.text = this._prog.toFixed(2) +"%"
                    }
                    else 
                    if(this._prog = 100)
                    {
                        if(!this._complete)
                        {
                            config.Game.SCORE += 1000;
                            this._complete = true;
                        }
                    }

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
        public Interact(): void
        {
        }
    }
}