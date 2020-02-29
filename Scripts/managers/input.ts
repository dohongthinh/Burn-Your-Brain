module managers {
    export class Input {
        public static pickUp:boolean =false;
        public static moveDown:boolean = false;
        public static moveUp:boolean = false;
        public static moveLeft: boolean = false;
        public static moveRight: boolean = false;
        public static yeet: boolean = false;
        public static something: boolean = false;

        public static Start() {
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);

        }

        public static Stop() {
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        }


        public static onKeyDown(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case Key.W:
                    this.moveUp = true;
                break;

                case Key.A:
                    this.moveLeft = true;
                break;

                case Key.S:
                    this.moveDown = true;
                break;

                case Key.D:
                    this.moveRight = true;
                break;

                case Key.SPACEBAR:
                    this.yeet = true;
                break;

                case Key.E:
                    this.pickUp=true;
                    break;

                case Key.F:
                    this.something = true;
                    break;

            }
        }


        public static onKeyUp(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case Key.W:
                    this.moveUp = false;
                break;

                case Key.A:
                    this.moveLeft = false;
                break;

                case Key.S:
                    this.moveDown = false;
                break;

                case Key.D:
                    this.moveRight = false;
                break;
                case Key.SPACEBAR:
                    this.yeet = false;
                break;

                case Key.E:
                    this.pickUp = false;
                    break;

                case Key.F:
                    this.something = false;
                    break;
            }
        }
    }
}