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
    var Biscuit = /** @class */ (function (_super) {
        __extends(Biscuit, _super);
        //constructor
        function Biscuit(image, x, y, isCentered) {
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this._dx = 0;
            _this._dy = 0;
            _this._speed = 2;
            _this.x = x;
            _this.y = y;
            _this._state = objects.ObjectState.NORMAL;
            return _this;
        }
        Object.defineProperty(Biscuit.prototype, "dx", {
            get: function () {
                return this._dx;
            },
            set: function (newDx) {
                this._dx = newDx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Biscuit.prototype, "dy", {
            get: function () {
                return this._dy;
            },
            set: function (newDy) {
                this._dy = newDy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Biscuit.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (newState) {
                this._state = newState;
            },
            enumerable: true,
            configurable: true
        });
        Biscuit.prototype.getRandomInt = function (max) {
            return Math.floor(Math.random() * Math.floor(max));
        };
        Biscuit.prototype._checkBounds = function () {
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
        Biscuit.prototype.Start = function () {
        };
        Biscuit.prototype.Update = function () {
            switch (this.state) {
                case objects.ObjectState.NORMAL:
                    break;
                case objects.ObjectState.PICKED_UP:
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
            }
            this.Interact();
            this._checkBounds();
            managers.Collision.squaredRadiusCheck(config.Game.PLAYER, this);
            this._updatePosition();
        };
        Biscuit.prototype.Reset = function () {
            this.x = this.getRandomInt(640);
            this.y = this.getRandomInt(400);
            this._dx = 0;
            this._dy = 0;
            this._state = objects.ObjectState.NORMAL;
            config.Game.PLAYER.isHoldingItem = false;
        };
        Biscuit.prototype.Interact = function () {
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
        };
        return Biscuit;
    }(objects.GameObject));
    objects.Biscuit = Biscuit;
})(objects || (objects = {}));
//# sourceMappingURL=Biscuit.js.map