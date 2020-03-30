module objects 
{
    export class Dog extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _barkSound : createjs.AbstractSoundInstance;
        private _dy:number = 1;
        private _dx:number = 1;
        _speed: number= 3;

        // readonly property
        public get barkSound(): createjs.AbstractSoundInstance{
            return this._barkSound;
        }
        // constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean)
        {
            super(imagePath, x, y, isCentered);
            this.Start();

        }

        //PUBLIC
        get dy():number
        {
            return this._dy;
        }

        set dy(newDy:number)
        {
            this._dy = newDy;
        }
        get dx():number
        {
            return this._dx;
        }

        set dx(newDx:number)
        {
            this._dx = newDx;
        }

        get speed():number
        {
            return this._speed;
        }

        set speed(newSpeed:number)
        {
            this._speed = newSpeed;
        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds(): void {
            if(this.x > 640 - this.halfWidth) {
                this.dx = -1;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.dx = 1;
            }
            // checks the bot boundary
            if(this.y > 480 - this.halfHeight) {
                this.dy = -1;
            }

            // check the top boundary
            if(this.y < this.halfHeight + 80) {
                this.dy = 1;
            }
        }

        // PUBLIC LIFE CYCLE METHODS

        public _RunVertical():void{
            this.y += this._dy * this._speed;
        }
        public _RunHorizontal():void{
            this.x += this._dx * this._speed;
        }
        public _Stop():void{
            this._dx=0;
            this._dy=0;
        }
        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        public Start():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._barkSound = createjs.Sound.play("barking");
            this._barkSound.volume = 0.25;
            this._barkSound.loop = -1;
        }

        public Update():void
        {
            //this._checkBounds();
            this._checkBounds();
            this._updatePosition();
        }

        public Reset():void
        {

        }



    }
}