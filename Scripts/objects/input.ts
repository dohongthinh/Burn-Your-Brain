module objects {
    export class Input {
        public static LeftButtonDown:boolean = false;
        public static pickUp:boolean =false;
        public static moveBackward:boolean = false;
        public static moveForward:boolean = false;
        public static moveLeft: boolean = false;
        public static moveRight: boolean = false;
        public static yeet: boolean = false;

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
                    this.moveForward = true;
                break;

                case Key.A:
                    this.moveLeft = true;
                break;

                case Key.S:
                    this.moveBackward = true;
                break;

                case Key.D:
                    this.moveRight = true;
                break;

                case Key.SPACEBAR:
                    this.yeet = true;
                break;

                case Key.P:
                    this.pickUp = true;
                    break;

            }
        }


        public static onKeyUp(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case Key.W:
                    this.moveForward = false;
                break;

                case Key.A:
                    this.moveLeft = false;
                break;

                case Key.S:
                    this.moveBackward = false;
                break;

                case Key.D:
                    this.moveRight = false;
                break;
                case Key.SPACEBAR:
                    this.yeet = false;
                break;

                case Key.P:
                    this.pickUp = false;
                    break;
            }
        }
    }
}