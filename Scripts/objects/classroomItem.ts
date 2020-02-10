module objects{
    export class classroomItem extends objects.GameObject{
        private _normal:createjs.Bitmap;
        private _pickedUp:createjs.Bitmap;
        private _dx:number = 0;
        private _dy:number = 0;
        private _speed:number = 2;
        private _state:ObjectState;

        get dx()
        {
            return this._dx;
        }
        set dx(newDx:number)
        {
            this._dx = newDx;
        }
        get dy()
        {
            return this._dy;
        }
        set dy(newDy:number)
        {
            this._dy = newDy;
        }

        get state()
        {
            return this._state;
        }
        set state(newState:ObjectState)
        {
            this._state = newState;
        }

        protected _checkBounds(): void {
            if(this.state != ObjectState.PICKED_UP)
            {
                // checks the right boundary
                if(this.x > 640 - this.halfWidth) {
                    this.x = 640 - this.halfWidth;
                    this.state = ObjectState.NORMAL;
                }
    
                // check the left boundary
                if(this.x < this.halfWidth) {
                    this.x = this.halfWidth;
                    this.state = ObjectState.NORMAL;
                }
                // checks the bot boundary
                if(this.y > 480 - this.halfHeight) {
                    this.y = 480 - this.halfHeight;
                    this.state = ObjectState.NORMAL;
                }
    
                // check the top boundary
                if(this.y < this.halfHeight + 80) {
                    this.y = this.halfHeight + 80;
                    this.state = ObjectState.NORMAL;
                }
            }
        }
        public Start(): void {
        }
        public Update(): void {
            switch(this.state)
            {
                case ObjectState.NORMAL:
                    this.image = this._normal.image;
                    break;

                case ObjectState.PICKED_UP:
                    this.image = this._pickedUp.image;
                    this.dx = Math.cos(config.Game.PLAYER.dir);
                    this.dy = Math.sin(config.Game.PLAYER.dir);
                    this.x = config.Game.PLAYER.x + this.dx * 40;
                    this.y = config.Game.PLAYER.y + this.dy * 40;
                    break;

                case ObjectState.THROWN:
                    this.dx = Math.cos(this.dir);
                    this.dy = Math.sin(this.dir);
                    this.x += this.dx * this._speed;
                    this.y += this.dy * this._speed;
                    break;
            }
            this.Interact();
            this._checkBounds();
            managers.Collision.squaredRadiusCheck(config.Game.PLAYER, this);
            this._updatePosition();
        }
        public Reset(): void {
        }
        //constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean = true, normal:createjs.Bitmap, pickedUp:createjs.Bitmap){
            super(imagePath,x,y,isCentered);
            this.x = x;
            this.y = y;
            this._state = ObjectState.NORMAL;
            this._normal = normal;
            this._pickedUp = pickedUp;
        }
        public Interact(): void
        {
            //pick up / put down object
            if(managers.Input.pickUp)
            {
                if(this.isColliding && this.state != ObjectState.PICKED_UP && !config.Game.PLAYER.isHoldingItem)
                {
                    this.state = ObjectState.PICKED_UP;
                    config.Game.PLAYER.isHoldingItem = true;
                    managers.Input.pickUp = false;
                }   
                else if (this.state == ObjectState.PICKED_UP)
                {
                    this.state = ObjectState.NORMAL;
                    config.Game.PLAYER.isHoldingItem = false;
                    managers.Input.pickUp = false;
                }
            }
            //uh
            if(managers.Input.yeet)
            {
                if(this.state == ObjectState.PICKED_UP)
                {
                    this.dir = config.Game.PLAYER.dir;
                    this.state = ObjectState.THROWN;
                    config.Game.PLAYER.isHoldingItem = false;
                }
            }
        }
    }
}