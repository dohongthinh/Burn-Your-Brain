module objects{
    export class classroomItem extends objects.GameObject{
        private _normal:createjs.Bitmap;
        private _pickedUp:createjs.Bitmap;
        private _dx:number = 0;
        private _dy:number = 0;
        private speed:number = 3;

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
        set dy(newDx:number)
        {
            this._dy = newDx;
        }
        
        protected _checkBounds(): void {
            // checks the right boundary
            if(this.x > 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
                this.isThrown = false;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
                this.isThrown = false;
            }
            // checks the bot boundary
            if(this.y > 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
                this.isThrown = false;
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.isThrown = false;
            }
        }
        public Start(): void {
        }
        public Update(player1: objects.Character): void {
            if(this.isPickedUp)
            {
                this.image = this._pickedUp.image;
                this.x = player1.x;
                this.y = player1.y-40;
            }
            else
            {
                if(!this.isThrown)
                {
                    this.image = this._normal.image;
                }
            }
            if(this.isThrown)
            {
                this.dx = Math.cos(this.dir);
                this.dy = Math.sin(this.dir);
                this.x += this.dx * this.speed;
                this.y += this.dy * this.speed;
            }
            // ...
            this._checkBounds();
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
            this._normal = normal;
            this._pickedUp = pickedUp;
        }
        //methods
    }
}