"use strict";
var managers;
(function (managers) {
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
                case managers.Key.W:
                    this.moveUp = true;
                    break;
                case managers.Key.A:
                    this.moveLeft = true;
                    break;
                case managers.Key.S:
                    this.moveDown = true;
                    break;
                case managers.Key.D:
                    this.moveRight = true;
                    break;
                case managers.Key.SPACEBAR:
                    this.yeet = true;
                    break;
                case managers.Key.E:
                    this.pickUp = true;
                    break;
                case managers.Key.F:
                    this.something = true;
                    break;
            }
        };
        Input.onKeyUp = function (event) {
            switch (event.keyCode) {
                case managers.Key.W:
                    this.moveUp = false;
                    break;
                case managers.Key.A:
                    this.moveLeft = false;
                    break;
                case managers.Key.S:
                    this.moveDown = false;
                    break;
                case managers.Key.D:
                    this.moveRight = false;
                    break;
                case managers.Key.SPACEBAR:
                    this.yeet = false;
                    break;
                case managers.Key.E:
                    this.pickUp = false;
                    break;
                case managers.Key.F:
                    this.something = false;
                    break;
            }
        };
        Input.pickUp = false;
        Input.moveDown = false;
        Input.moveUp = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.yeet = false;
        Input.something = false;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map