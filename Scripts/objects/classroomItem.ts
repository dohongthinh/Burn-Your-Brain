module objects{
    export class classroomItem extends objects.GameObject{
        private _progLabel:createjs.Text;
        private _dx:number = 0;
        private _dy:number = 0;
        private _speed:number = 2;
        private _prog:number = 0;
        private _state:ObjectState;
        private _writeSound: createjs.AbstractSoundInstance;
        private _submitSound: createjs.AbstractSoundInstance;
        private _normal = new createjs.Bitmap(config.Game.ASSETS.getResult("bookOpen"));
        private _pickedUp = new createjs.Bitmap(config.Game.ASSETS.getResult("bookClosed"));

        public get writeSound(): createjs.AbstractSoundInstance{
            return this._writeSound;
        }
        public get submitSound(): createjs.AbstractSoundInstance{
            return this._writeSound;
        }
        get dx()
        {
            return this._dx;
        }
        set dx(newDx:number)
        {
            this._dx = newDx;
        }
        get prog()
        {
            return this._prog;
        }
        get dy()
        {
            return this._dy;
        }
        set dy(newDy:number)
        {
            this._dy = newDy;
        }

        get state()
        {
            return this._state;
        }
        set state(newState:ObjectState)
        {
            this._state = newState;
        }
        public  getRandomInt(max:number): number{
            return Math.floor(Math.random() * Math.floor(max));
          }

        protected _checkBounds(): void {
            if(this.state != ObjectState.PICKED_UP)
            {
                // checks the right boundary
                if(this.x > 640 - this.halfWidth) {
                    this.x = 640 - this.halfWidth;
                    this.state = ObjectState.NORMAL;
                }
    
                // check the left boundary
                if(this.x < this.halfWidth) {
                    this.x = this.halfWidth;
                    this.state = ObjectState.NORMAL;
                }
                // checks the bot boundary
                if(this.y > 480 - this.halfHeight) {
                    this.y = 480 - this.halfHeight;
                    this.state = ObjectState.NORMAL;
                }
    
                // check the top boundary
                if(this.y < this.halfHeight + 80) {
                    this.y = this.halfHeight + 80;
                    this.state = ObjectState.NORMAL;
                }
            }
        }
        public Start(): void {
        }
        public Update(): void {
            switch(this.state)
            {
                case ObjectState.NORMAL:
                    this.image = this._normal.image;
                    break;

                case ObjectState.PICKED_UP:
                    this.image = this._pickedUp.image;
                    this.dx = Math.cos(config.Game.PLAYER.dir);
                    this.dy = Math.sin(config.Game.PLAYER.dir);
                    this.x = config.Game.PLAYER.x + this.dx * 40;
                    this.y = config.Game.PLAYER.y + this.dy * 40;
                    break;

                case ObjectState.THROWN:
                    this.dx = Math.cos(this.dir);
                    this.dy = Math.sin(this.dir);
                    this.x += this.dx * this._speed;
                    this.y += this.dy * this._speed;
                    break;
                
                case ObjectState.HANDED_IN:
                    this._submitSound = createjs.Sound.play("submit");
                    this._submitSound.volume = 0.25;
                    this.Reset();
                    break;
            }
            
            this.Interact();
            this._checkBounds();
            managers.Collision.squaredRadiusCheck(config.Game.PLAYER, this);
            this._progLabel.x = this.x;
            this._progLabel.y = this.y -80;
            if (this._prog == 100)
            {
                this.rotation += 0.5;
            }
            this._updatePosition();
        }
        
        public HandIn(): void {
            config.Game.STAGE.removeChild(this._progLabel)
            this.state = ObjectState.HANDED_IN;
        }
        public Reset(): void {
            this.x = this.getRandomInt(640);
            this.y = this.getRandomInt(400);
            this._prog = 0;
            this._dx = 0;
            this._dy = 0;
            this._state = ObjectState.NORMAL;
            this._progLabel = new createjs.Text("","","white");
            config.Game.STAGE.addChild(this._progLabel)
            config.Game.PLAYER.isHoldingItem = false;
            managers.Input.pickUp = false;
        }
        //constructor
        constructor(image:Object = config.Game.ASSETS.getResult("bookClosed"), x:number, y:number, isCentered:boolean = true){
            super(image,x,y,isCentered);
            this.x = x;
            this.y = y;
            this._state = ObjectState.NORMAL;
            this._progLabel = new createjs.Text("","","white");
            config.Game.STAGE.addChild(this._progLabel)
        }
        public Interact(): void
        {
            //pick up / put down object
            if(managers.Input.pickUp)
            {
                if(this.isColliding && this.state != ObjectState.PICKED_UP && !config.Game.PLAYER.isHoldingItem && this._prog > 50)
                {
                    this.state = ObjectState.PICKED_UP;
                    config.Game.PLAYER.isHoldingItem = true;
                    managers.Input.pickUp = false;
                }   
                else if (this.state == ObjectState.PICKED_UP)
                {
                    this.state = ObjectState.NORMAL;
                    config.Game.PLAYER.isHoldingItem = false;
                    managers.Input.pickUp = false;
                }
            }
            //uh
            if(managers.Input.yeet)
            {
                if(this.state == ObjectState.PICKED_UP)
                {
                    this.dir = config.Game.PLAYER.dir;
                    this.state = ObjectState.THROWN;
                    config.Game.PLAYER.isHoldingItem = false;
                }
            }
            if(managers.Input.something && this.isColliding)
            {
                if(this._prog <100)
                {
                    if (managers.Input.playWrite){
                        this._writeSound = createjs.Sound.play("writing");
                        this._writeSound.volume = 0.25;
                    }
                    managers.Input.playWrite = false;
                    this._prog +=1;
                    this._progLabel.text = this._prog.toFixed(2) +"%"
                    if (this._prog == 100){
                        this._writeSound.stop();
                        managers.Input.playWrite = true;
                    }
                }
                
            } else if (!managers.Input.something && this.isColliding) {
                if (this._writeSound != null){
                    this._writeSound.paused = true;
                    managers.Input.playWrite = true;
                }
            }
            
        }
    }
}