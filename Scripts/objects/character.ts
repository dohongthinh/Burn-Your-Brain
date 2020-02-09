module objects{
    export class Character extends GameObject{
        private _isHoldingItem:boolean;
        get isHoldingItem():boolean
        {
            return this._isHoldingItem;
        }

        set isHoldingItem(newState:boolean)
        {
            this._isHoldingItem = newState;
        }
        protected _checkBounds(): void {
            // checks the right boundary
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
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
            }
        }
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        public Update(): void {
            this.Rotate();
            this._checkBounds();
            this.Move();
            this._updatePosition();
        }
        public Reset(): void {
        }
        //constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean = true){
            super(imagePath,x,y,isCentered);
            this._isHoldingItem = false;
            this.Start();
        }
        //could write methods in here for the player in the future
        public Move():void {
            // standard movement for top scroller - left and right
            
            if(managers.Input.moveRight) {
                this.x += 5;
            }

            if(managers.Input.moveLeft) {
                this.x -= 5;
            }
            
            // standard movement - forward - back
            if(managers.Input.moveForward) {
                this.y -= 5;
            }

            if(managers.Input.moveBackward) {
                this.y += 5;
            }
        }
        //Rotate player towards mouse position
        public Rotate()
        {
            this.dir = Math.atan2(config.Game.STAGE.mouseY - this.y, config.Game.STAGE.mouseX - this.x);
            this.angle = this.dir * (180/Math.PI);
            if(this.angle < 0)
            {
                this.angle = 360 +this.angle;
            }
            this.rotation = 90+ this.angle;
        }
    }
}