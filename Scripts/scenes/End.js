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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            // initialization
            _this.endLabel = new objects.Label();
            _this.scoreBoardLabel = new objects.Label();
            _this.backButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        End.prototype.Start = function () {
            //instantiate a new Text object
            if (config.Game.SCORE > config.Game.SCOREBOARD)
                config.Game.SCOREBOARD = config.Game.SCORE;
            this.scoreBoardLabel = new objects.Label("Highest Score: " + config.Game.SCOREBOARD, "40px", "Consolas", "#FFFFFF", 320, 100, true);
            this.endLabel = new objects.Label("You Score: " + config.Game.SCORE, "50px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this.backButton = new objects.Button(config.Game.ASSETS.getResult("back"), 320, 430, true);
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Main = function () {
            this.addChild(this.scoreBoardLabel);
            this.addChild(this.endLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", function () {
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.START;
                config.Game.SCENE = 0;
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map