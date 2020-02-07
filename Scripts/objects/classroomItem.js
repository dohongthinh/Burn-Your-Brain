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
        function classroomItem(imagePath, x, y, isCentered) {
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        classroomItem.prototype._checkBounds = function () {
        };
        classroomItem.prototype.Start = function () {
        };
        classroomItem.prototype.Update = function () {
            this.Yeet();
            this._updatePosition();
        };
        classroomItem.prototype.Reset = function () {
        };
        //methods
        //pick up / put down object
        classroomItem.prototype.PickUp = function (player1, normal, pickedUp) {
            if (this.isPickedUp) {
                this.image = pickedUp.image;
                this.position.x = player1.position.x;
                this.position.y = player1.position.y - 40;
            }
            else {
                if (!this.isThrown) {
                    this.image = normal.image;
                }
            }
        };
        //uh
        classroomItem.prototype.Yeet = function () {
            if (this.isThrown) {
                this.position.x -= 10;
            }
        };
        return classroomItem;
    }(objects.GameObject));
    objects.classroomItem = classroomItem;
})(objects || (objects = {}));
//# sourceMappingURL=classroomItem.js.map