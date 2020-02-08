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
    var classroomItem = /** @class */ (function (_super) {
        __extends(classroomItem, _super);
        //constructor
        function classroomItem(imagePath, x, y, isCentered, normal, pickedUp) {
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this._dx = 0;
            _this._dy = 0;
            _this.speed = 3;
            _this.x = x;
            _this.y = y;
            _this._normal = normal;
            _this._pickedUp = pickedUp;
            return _this;
        }
        Object.defineProperty(classroomItem.prototype, "dx", {
            get: function () {
                return this._dx;
            },
            set: function (newDx) {
                this._dx = newDx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(classroomItem.prototype, "dy", {
            get: function () {
                return this._dy;
            },
            set: function (newDx) {
                this._dy = newDx;
            },
            enumerable: true,
            configurable: true
        });
        classroomItem.prototype._checkBounds = function () {
            // checks the right boundary
            if (this.x > 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
                this.isThrown = false;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
                this.isThrown = false;
            }
            // checks the bot boundary
            if (this.y > 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
                this.isThrown = false;
            }
            // check the top boundary
            if (this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.isThrown = false;
            }
        };
        classroomItem.prototype.Start = function () {
        };
        classroomItem.prototype.Update = function (player1) {
            if (this.isPickedUp) {
                this.image = this._pickedUp.image;
                this.x = player1.x;
                this.y = player1.y - 40;
            }
            else {
                if (!this.isThrown) {
                    this.image = this._normal.image;
                }
            }
            if (this.isThrown) {
                this.dx = Math.cos(this.dir);
                this.dy = Math.sin(this.dir);
                this.x += this.dx * this.speed;
                this.y += this.dy * this.speed;
            }
            // ...
            this._checkBounds();
            objects.GameObject.CollisionCheck(player1, this);
            this._updatePosition();
        };
        classroomItem.prototype.Reset = function () {
        };
        return classroomItem;
    }(objects.GameObject));
    objects.classroomItem = classroomItem;
})(objects || (objects = {}));
//# sourceMappingURL=classroomItem.js.map