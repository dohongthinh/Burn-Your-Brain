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
        // constructor
        function Dog(image, x, y, isCentered) {
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this._dy = 1;
            _this._dx = 1;
            _this._speed = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Dog.prototype, "barkSound", {
            // readonly property
            get: function () {
                return this._barkSound;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dog.prototype, "dy", {
            //PUBLIC
            get: function () {
                return this._dy;
            },
            set: function (newDy) {
                this._dy = newDy;
            },
            enumerable: true,
            configurable: true
        });
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
        Object.defineProperty(Dog.prototype, "speed", {
            get: function () {
                return this._speed;
            },
            set: function (newSpeed) {
                this._speed = newSpeed;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE LIFE CYCLE METHODS
        Dog.prototype._checkBounds = function () {
            if (this.x > 640 - this.halfWidth) {
                this.dx = -1;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.dx = 1;
            }
            // checks the bot boundary
            if (this.y > 480 - this.halfHeight) {
                this.dy = -1;
            }
            // check the top boundary
            if (this.y < this.halfHeight + 80) {
                this.dy = 1;
            }
        };
        // PUBLIC LIFE CYCLE METHODS
        Dog.prototype._RunVertical = function () {
            this.y += this._dy * this._speed;
        };
        Dog.prototype._RunHorizontal = function () {
            this.x += this._dx * this._speed;
        };
        Dog.prototype._Stop = function () {
            this._dx = 0;
            this._dy = 0;
        };
        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        Dog.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._barkSound = createjs.Sound.play("barking");
            this._barkSound.volume = 0.25;
            this._barkSound.loop = -1;
        };
        Dog.prototype.Update = function () {
            //this._checkBounds();
            this._checkBounds();
            this._updatePosition();
        };
        Dog.prototype.Reset = function () {
        };
        return Dog;
    }(objects.GameObject));
    objects.Dog = Dog;
})(objects || (objects = {}));
//# sourceMappingURL=Dog.js.map