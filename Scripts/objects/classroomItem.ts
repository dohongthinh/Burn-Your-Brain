module objects{
    export class classroomItem extends createjs.Bitmap{
        //constructor
        constructor(imagePath:string, x:number, y:number){
            super(imagePath);
            this.x = x;
            this.y = y;
        }

        //methods
    }
}