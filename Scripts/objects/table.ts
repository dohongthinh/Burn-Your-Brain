module objects 
{
    export class Table extends GameObject
    {
        // constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean)
        {
            super(imagePath, x, y, isCentered);

        }

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
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
            }
        }

        // PUBLIC LIFE CYCLE METHODS

        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        public Start():void
        {

        }

        public Update():void
        {

        }

        public Reset():void
        {

        }



    }
}