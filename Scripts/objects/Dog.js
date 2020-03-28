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
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        //constructor
        function Dog(imagePath, x, y, isCentered, normal, pickedUp) {
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this._dx = 0;
            _this._dy = 0;
            _this._speed = 2;
            _this._prog = 0;
            _this.x = x;
            _this.y = y;
            _this._state = objects.ObjectState.NORMAL;
            _this._progLabel = new createjs.Text("", "", "white");
            config.Game.STAGE.addChild(_this._progLabel);
            _this._normal = normal;
            _this._pickedUp = pickedUp;
            return _this;
        }
        Object.defineProperty(Dog.prototype, "dx", {
            get: function () {
                return this._dx;
            },
            set: function (newDx) {
                this._dx = newDx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dog.prototype, "prog", {
            get: function () {
                return this._prog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dog.prototype, "dy", {
            get: function () {
                return this._dy;
            },
            set: function (newDy) {
                this._dy = newDy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dog.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (newState) {
                this._state = newState;
            },
            enumerable: true,
            configurable: true
        });
        Dog.prototype._checkBounds = function () {
            if (this.state != objects.ObjectState.PICKED_UP) {
                // checks the right boundary
                if (this.x > 640 - this.halfWidth) {
                    this.x = 640 - this.halfWidth;
                    this.state = objects.ObjectState.NORMAL;
                }
                // check the left boundary
                if (this.x < this.halfWidth) {
                    this.x = this.halfWidth;
                    this.state = objects.ObjectState.NORMAL;
                }
                // checks the bot boundary
                if (this.y > 480 - this.halfHeight) {
                    this.y = 480 - this.halfHeight;
                    this.state = objects.ObjectState.NORMAL;
                }
                // check the top boundary
                if (this.y < this.halfHeight + 80) {
                    this.y = this.halfHeight + 80;
                    this.state = objects.ObjectState.NORMAL;
                }
            }
        };
        Dog.prototype.Start = function () {
        };
        Dog.prototype.Update = function () {
            switch (this.state) {
                case objects.ObjectState.NORMAL:
                    this.image = this._normal.image;
                    break;
                case objects.ObjectState.PICKED_UP:
                    this.image = this._pickedUp.image;
                    this.dx = Math.cos(config.Game.PLAYER.dir);
                    this.dy = Math.sin(config.Game.PLAYER.dir);
                    this.x = config.Game.PLAYER.x + this.dx * 40;
                    this.y = config.Game.PLAYER.y + this.dy * 40;
                    break;
                case objects.ObjectState.THROWN:
                    this.dx = Math.cos(this.dir);
                    this.dy = Math.sin(this.dir);
                    this.x += this.dx * this._speed;
                    this.y += this.dy * this._speed;
                    break;
                case objects.ObjectState.HANDED_IN:
                    this.x = 9999;
                    this.y = 9999;
                    this.scaleX = 0;
                    this.scaleY = 0;
                    break;
            }
            this.Interact();
            this._checkBounds();
            managers.Collision.squaredRadiusCheck(config.Game.PLAYER, this);
            this._progLabel.x = this.x;
            this._progLabel.y = this.y - 80;
            if (this._prog == 100) {
                this.rotation += 0.5;
            }
            this._updatePosition();
        };
        Dog.prototype.HandIn = function () {
            config.Game.STAGE.removeChild(this._progLabel);
            this.state = objects.ObjectState.HANDED_IN;
        };
        Dog.prototype.Reset = function () {
        };
        Dog.prototype.Interact = function () {
            //pick up / put down object
            if (managers.Input.pickUp) {
                if (this.isColliding && this.state != objects.ObjectState.PICKED_UP && !config.Game.PLAYER.isHoldingItem) {
                    this.state = objects.ObjectState.PICKED_UP;
                    config.Game.PLAYER.isHoldingItem = true;
                    managers.Input.pickUp = false;
                }
                else if (this.state == objects.ObjectState.PICKED_UP) {
                    this.state = objects.ObjectState.NORMAL;
                    config.Game.PLAYER.isHoldingItem = false;
                    managers.Input.pickUp = false;
                }
            }
            //uh
            if (managers.Input.yeet) {
                if (this.state == objects.ObjectState.PICKED_UP) {
                    this.dir = config.Game.PLAYER.dir;
                    this.state = objects.ObjectState.THROWN;
                    config.Game.PLAYER.isHoldingItem = false;
                }
            }
            if (managers.Input.something && this.isColliding) {
                if (this._prog < 100) {
                    this._prog += 1;
                    this._progLabel.text = this._prog.toFixed(2) + "%";
                }
            }
        };
        return Dog;
    }(objects.GameObject));
    objects.Dog = Dog;
})(objects || (objects = {}));
//# sourceMappingURL=Dog.js.map