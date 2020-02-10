"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Character = /** @class */ (function (_super) {
        __extends(Character, _super);
        //constructor
        function Character(imagePath, x, y, isCentered) {
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this._isHoldingItem = false;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Character.prototype, "isHoldingItem", {
            get: function () {
                return this._isHoldingItem;
            },
            set: function (newState) {
                this._isHoldingItem = newState;
            },
            enumerable: true,
            configurable: true
        });
        Character.prototype._checkBounds = function () {
            // checks the right boundary
            if (this.x > 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
            // checks the bot boundary
            if (this.y > 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
            }
            // check the top boundary
            if (this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
            }
        };
        Character.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Character.prototype.Update = function () {
            //this.Rotate();
            this.dir = Math.atan2(config.Game.STAGE.mouseY - this.y, config.Game.STAGE.mouseX - this.x);
            this._checkBounds();
            this.Move();
            this._updatePosition();
        };
        Character.prototype.Reset = function () {
        };
        //Methods
        Character.prototype.Move = function () {
            if (managers.Input.moveRight) {
                this.x += 5;
            }
            if (managers.Input.moveLeft) {
                this.x -= 5;
            }
            if (managers.Input.moveUp) {
                this.y -= 5;
            }
            if (managers.Input.moveDown) {
                this.y += 5;
            }
        };
        return Character;
    }(objects.GameObject));
    objects.Character = Character;
})(objects || (objects = {}));
//# sourceMappingURL=character.js.map