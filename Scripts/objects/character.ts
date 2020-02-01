module objects{
    export class Character extends createjs.Bitmap{
        //constructor
        constructor(imagePath:string, x:number, y:number){
            super(imagePath);
            this.image.addEventListener('load', ()=>{
               // console.log('image loaded');
               
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height * 0.5;
                
                this.x = x;
                this.y = y;
            })
        }

        //could write methods in here for the player in the future
    }
}