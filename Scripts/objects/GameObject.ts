module objects
{
    export abstract class GameObject extends createjs.Bitmap
    {
        // PRIVATE INSTANCE MEMBERS
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;
        private _position:Vector2;
        private _isColliding:boolean;
        private _isCentered:boolean;
        private _angle:number;
        private _dir:number;
        
        // PUBLIC PROPERTIES
        get width():number
        {
            return this._width;
        }

        set width(newWidth:number)
        {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }

        get height():number
        {
            return this._height;
        }

        set height(newHeight:number)
        {
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }

        get halfWidth():number
        {
            return this._halfWidth;
        }

        get halfHeight():number
        {
            return this._halfHeight;
        }

        get position():Vector2
        {
            return this._position;
        }

        set position(newPosition:Vector2)
        {
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }

        get isColliding():boolean
        {
            return this._isColliding;
        }

        set isColliding(newState:boolean)
        {
            this._isColliding = newState;
        }

        get isCentered():boolean
        {
            return this._isCentered;
        }

        set isCentered(newState:boolean)
        {
            this._isCentered = newState;
            if(newState)
            {
                this._centerGameObject();
            }
        }
        get angle():number
        {
            return this._angle;
        }

        set angle(newAngle:number)
        {
            this._angle = newAngle;
        }
        get dir():number
        {
            return this._dir;
        }

        set dir(newDir:number)
        {
            this._dir = newDir;
        }
        protected _updatePosition():void {
            this.position.x = this.x;
            this.position.y = this.y;
        }

        // CONSTRUCTOR
        constructor(image:Object = config.Game.ASSETS.getResult("table"), 
        x:number = 0, y:number = 0, centered:boolean = false)
        {
            super(image);

            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._angle = 0;
            this._dir = 0;
            this._position = new Vector2(0, 0, this);
            this._isColliding = false;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.isCentered = centered;


            this.position = new Vector2(x, y, this);

        }

        // PRIVATE METHODS
        private _computeHalfWidth():number
        {
            return this.width * 0.5;
        }

        private _computeHalfHeight():number
        {
            return this.height * 0.5;
        }

        private _centerGameObject():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }


        protected abstract _checkBounds():void;


        // PUBLIC METHODS

        public abstract Start():void;

        public abstract Update():void;
        
        public abstract Reset():void;

    }

}