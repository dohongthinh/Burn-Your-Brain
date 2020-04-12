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
var scenes;
(function (scenes) {
    var How = /** @class */ (function (_super) {
        __extends(How, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function How() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        How.prototype.Start = function () {
            // buttons
            this._nextButton = new objects.Button("./Assets/Images/nextButton.png", 320, 430, true);
            this._howButton = new objects.classroomObstacle("./Assets/Images/HowToPlay.png", 320, 210, true);
            this.Main();
        };
        How.prototype.Update = function () {
        };
        How.prototype.Main = function () {
            this.addChild(this._nextButton);
            this.addChild(this._howButton);
            this._nextButton.on("click", function () {
                config.Game.SCENE = scenes.State.STAGE1;
            });
        };
        return How;
    }(objects.Scene));
    scenes.How = How;
})(scenes || (scenes = {}));
//# sourceMappingURL=How.js.map