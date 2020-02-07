module objects{
    export class classroomItem extends objects.GameObject{
        protected _checkBounds(): void {
        }
        public Start(): void {
        }
        public Update(): void {
            this.Yeet();
            this._updatePosition();
        }
        public Reset(): void {
        }
        //constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean = true){
            super(imagePath,x,y,isCentered);
            this.x = x;
            this.y = y;
        }
        //methods
        //pick up / put down object
        public PickUp(player1: objects.Character, normal:createjs.Bitmap, pickedUp:createjs.Bitmap)
        {
            if(this.isPickedUp)
            {
                this.image = pickedUp.image;
                this.position.x = player1.position.x;
                this.position.y = player1.position.y-40;
            }
            else
            {
                
                if(!this.isThrown)
                {
                    this.image = normal.image;
                }
            }
        }
        //uh
        public Yeet()
        {
            if(this.isThrown)
            {
                this.position.x -= 10;
            }
        }
    }
}