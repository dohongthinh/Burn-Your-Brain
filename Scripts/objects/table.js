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
    var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        // constructor
        function Table(imagePath, x, y, isCentered) {
            return _super.call(this, imagePath, x, y, isCentered) || this;
        }
        // PRIVATE LIFE CYCLE METHODS
        Table.prototype._checkBounds = function () {
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
        // PUBLIC LIFE CYCLE METHODS
        /**
         * Initialization happens here
         *
         * @memberof Table
         */
        Table.prototype.Start = function () {
        };
        Table.prototype.Update = function () {
        };
        Table.prototype.Reset = function () {
        };
        return Table;
    }(objects.GameObject));
    objects.Table = Table;
})(objects || (objects = {}));
//# sourceMappingURL=table.js.map