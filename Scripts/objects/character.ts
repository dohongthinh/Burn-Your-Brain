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
        }
        public Start(): void {
        }
        public Update(): void {
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
            // this.x = managers.Game.stage.mouseX;

            let direction = (this.rotation -90) * -1;
            let degToRad = Math.PI / 180.0;


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

            /* move in direction that player is facing */

            /*
            if(managers.Input.moveForward) {
                this.x += 5 * Math.cos(direction * (degToRad));
                this.y -= 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveBackward) {
                this.x -= 5 * Math.cos(direction * (degToRad));
                this.y += 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveLeft) {
                this.rotation -= 5;
            }

            if(managers.Input.moveRight) {
                this.rotation += 5;
            }
            */


            /* gamepad controls 
            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] > 0) {
                this.x += 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] < 0) {
                this.x -= 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] > 0) {
                this.y += 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] < 0) {
                this.y -= 5;
            }
            */
        }
        

    }
}