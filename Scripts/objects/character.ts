module objects{
    export class Character extends createjs.Bitmap{
        //constructor
        constructor(imagePath:string, x:number, y:number){
            super(imagePath);
            this.x = x;
            this.y = y;
        }

        //could write methods in here for the player in the future
    }
}