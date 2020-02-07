module objects{
    export class classroomItem extends objects.GameObject{
        private normal:createjs.Bitmap;
        private pickedUp:createjs.Bitmap;

        protected _checkBounds(): void {
        }
        public Start(): void {
        }
        public Update(player1: objects.Character,): void {
            if(this.isPickedUp)
            {
                this.image = this.pickedUp.image;
                this.x = player1.x;
                this.y = player1.y-40;
            }
            else
            {
                if(!this.isThrown)
                {
                    this.image = this.normal.image;
                }
            }
            if(this.isThrown)
            {
                this.x -= 5;
            }
            // ...
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
                this.isThrown = false;
            }
            GameObject.CollisionCheck(player1,this);
            this._updatePosition();
        }
        public Reset(): void {
        }
        //constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean = true, normal:createjs.Bitmap, pickedUp:createjs.Bitmap){
            super(imagePath,x,y,isCentered);
            this.x = x;
            this.y = y;
            this.normal = normal;
            this.pickedUp = pickedUp;
        }
        //methods
    }
}