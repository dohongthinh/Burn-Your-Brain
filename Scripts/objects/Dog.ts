module objects 
{
    export class Dog extends GameObject
    {
       
        // constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean)
        {
            super(imagePath, x, y, isCentered);
            this.Start();

        }

        private dy = 3;

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds(): void {
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
                this.dy = -3;
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.dy = 3;
            }
        }

        protected _Run():void{
            this.y += this.dy;
        }
        // PUBLIC LIFE CYCLE METHODS

        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        public Start():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        public Update():void
        {
            //this._checkBounds();
            this._Run();
            this._checkBounds();
            this._updatePosition();
        }

        public Reset():void
        {

        }



    }
}