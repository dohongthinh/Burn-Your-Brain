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
        function Character(imagePath, x, y) {
            var _this = _super.call(this, imagePath) || this;
            _this.image.addEventListener('load', function () {
                // console.log('image loaded');
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
                _this.x = x;
                _this.y = y;
            });
            return _this;
        }
        return Character;
    }(createjs.Bitmap));
    objects.Character = Character;
})(objects || (objects = {}));
//# sourceMappingURL=character.js.map