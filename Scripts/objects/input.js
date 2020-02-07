"use strict";
var objects;
(function (objects) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.Start = function () {
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        };
        Input.Stop = function () {
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        };
        Input.onKeyDown = function (event) {
            switch (event.keyCode) {
                case objects.Key.W:
                    this.moveForward = true;
                    break;
                case objects.Key.A:
                    this.moveLeft = true;
                    break;
                case objects.Key.S:
                    this.moveBackward = true;
                    break;
                case objects.Key.D:
                    this.moveRight = true;
                    break;
                case objects.Key.SPACEBAR:
                    this.yeet = true;
                    break;
                case objects.Key.P:
                    this.pickUp = true;
                    break;
            }
        };
        Input.onKeyUp = function (event) {
            switch (event.keyCode) {
                case objects.Key.W:
                    this.moveForward = false;
                    break;
                case objects.Key.A:
                    this.moveLeft = false;
                    break;
                case objects.Key.S:
                    this.moveBackward = false;
                    break;
                case objects.Key.D:
                    this.moveRight = false;
                    break;
                case objects.Key.SPACEBAR:
                    this.yeet = false;
                    break;
                case objects.Key.P:
                    this.pickUp = false;
                    break;
            }
        };
        Input.LeftButtonDown = false;
        Input.pickUp = false;
        Input.moveBackward = false;
        Input.moveForward = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.yeet = false;
        return Input;
    }());
    objects.Input = Input;
})(objects || (objects = {}));
//# sourceMappingURL=input.js.map