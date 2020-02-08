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
            
            if(Input.moveRight) {
                this.x += 5;
            }

            if(Input.moveLeft) {
                this.x -= 5;
            }
            
            // standard movement - forward - back
            if(Input.moveForward) {
                this.y -= 5;
            }

            if(Input.moveBackward) {
                this.y += 5;
            }
        }
        
        public Interact(object: objects.classroomItem)
        {
            //pick up / put down object
            if(Input.pickUp)
            {
                if(object.isColliding && !object.isPickedUp && !this.isHoldingItem)
                {
                    object.isPickedUp = true;
                    object.isThrown = false;
                    this.isHoldingItem = true;
                }
                else
                {
                    object.isPickedUp = false;
                    this.isHoldingItem = false;
                }
            }
            //uh
            if(Input.yeet)
            {
                if(object.isPickedUp)
                {
                    object.dir = this.dir;
                    object.isThrown = true;
                    object.isPickedUp = false;
                    this.isHoldingItem = false;
                }
            }
        }
    }
}