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
            _this.x = x;
            _this.y = y;
            _this.normal = normal;
            _this.pickedUp = pickedUp;
            return _this;
        }
        classroomItem.prototype._checkBounds = function () {
        };
        classroomItem.prototype.Start = function () {
        };
        classroomItem.prototype.Update = function (player1) {
            if (this.isPickedUp) {
                this.image = this.pickedUp.image;
                this.x = player1.x;
                this.y = player1.y - 40;
            }
            else {
                if (!this.isThrown) {
                    this.image = this.normal.image;
                }
            }
            if (this.isThrown) {
                this.x -= 5;
            }
            // ...
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
                this.isThrown = false;
            }
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