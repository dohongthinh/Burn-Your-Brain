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
    var classroomObject = /** @class */ (function (_super) {
        __extends(classroomObject, _super);
        // constructor
        function classroomObject(imagePath, x, y, isCentered) {
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this.dy = 3;
            _this.Start();
            return _this;
        }
        // PRIVATE LIFE CYCLE METHODS
        classroomObject.prototype._checkBounds = function () {
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
                this.dy = -3;
            }
            // check the top boundary
            if (this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.dy = 3;
            }
        };
        classroomObject.prototype._Run = function () {
            this.y += this.dy;
        };
        // PUBLIC LIFE CYCLE METHODS
        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        classroomObject.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        classroomObject.prototype.Update = function () {
            //this._checkBounds();
            this._Run();
            this._checkBounds();
            this._updatePosition();
        };
        classroomObject.prototype.Reset = function () {
        };
        return classroomObject;
    }(objects.GameObject));
    objects.classroomObject = classroomObject;
})(objects || (objects = {}));
//# sourceMappingURL=classroomObstacle.js.map