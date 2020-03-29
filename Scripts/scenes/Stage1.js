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
    var Stage1 = /** @class */ (function (_super) {
        __extends(Stage1, _super);
        // CONSTRUCTOR
        function Stage1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Stage1.prototype.Start = function () {
            this.test = new createjs.Bitmap("./Assets/Images/closedNotebook.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/openNotebook.png");
            this.testObject = new objects.classroomItem("./Assets/Images/openNotebook.png", 470, 240, true, this.test, this.test2);
            this.player1 = new objects.Character("./Assets/Images/Char1/tile000.png", 50, 240, true);
            this.player2 = new objects.Character("./Assets/Images/Char2/tile000.png", 100, 150, true);
            this.score = new objects.Label("Score:", "20px", "Arial", "#000000", 15, 30, false);
            this.table1 = new objects.classroomObstacle("./Assets/Images/small_square_table.png", 300, 200, true);
            //start timer
            this.timer = new objects.timer(21); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Stage1.prototype.Update = function () {
            managers.Collision.AABBCheck(this.testObject, this.player2);
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject, this.player2)) {
                console.log(this.testObject.prog);
                if (this.testObject.prog >= 50) {
                    this.score.text = "Score: " + this.testObject.prog;
                    this.testObject.HandIn();
                    config.Game.SCENE = scenes.State.STAGE2;
                }
            }
            this.player1.Update();
            this.testObject.Update();
            this.table1.Update();
        };
        Stage1.prototype.Main = function () {
            var _this = this;
            console.log("%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar", "color: blue; font-size: 18px;");
            console.log("%cHand in assignment at the table (only if assignment progress is > 50%)", "color: black; font-size: 12px;");
            //objects
            this.addChild(this.testObject);
            this.addChild(this.table1);
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            this.addChild(this.timerLabel);
            this.addChild(this.score);
            var count;
            var interval = window.setInterval(function () {
                count = _this.timer.Update();
                _this.timerLabel.text = ("Time left: " + _this.timer.getMinutes + "m " + _this.timer.getSeconds + "s");
                if (count < 1) { // timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    window.clearInterval(interval);
                }
            }, 1000);
        };
        return Stage1;
    }(objects.Scene));
    scenes.Stage1 = Stage1;
})(scenes || (scenes = {}));
//# sourceMappingURL=Stage1.js.map