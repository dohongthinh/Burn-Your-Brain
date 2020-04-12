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
    var Stage2 = /** @class */ (function (_super) {
        __extends(Stage2, _super);
        // CONSTRUCTOR
        function Stage2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Stage2.prototype.Start = function () {
            this.testObject = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 600, 500, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"), 100, 150, true);
            this.score = new objects.Label("Score: " + config.Game.SCORE, "20px", "Arial", "#000000", 15, 30, false);
            this.dog1 = new objects.Dog(config.Game.ASSETS.getResult("dog"), 200, 40, true);
            this.dog2 = new objects.Dog(config.Game.ASSETS.getResult("dog"), 400, 500, true);
            this.tables = new Array();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 150, true);
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 280, true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 410, true);
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 150, true);
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 280, true);
            this.tables[5] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 410, true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Stage2.prototype.Update = function () {
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject, this.player2)) {
                console.log(this.testObject.prog);
                if (this.testObject.prog >= 50) {
                    config.Game.SCORE += this.testObject.prog;
                    this.score.text = "Score: " + config.Game.SCORE;
                    this.testObject.HandIn();
                    //config.Game.SCENE = scenes.State.END;
                }
            }
            if (managers.Collision.AABBCheck(this.player1, this.dog1)) {
                this.Clean();
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END;
            }
            if (managers.Collision.AABBCheck(this.player1, this.dog2)) {
                this.Clean();
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END;
            }
            this.player1.Update();
            this.testObject.Update();
            this.dog1._RunVertical();
            this.dog2._RunVertical();
            this.dog1.Update();
            this.dog2.Update();
            this.tables.forEach(function (table) {
                table.Update();
            });
        };
        Stage2.prototype.Main = function () {
            var _this = this;
            console.log("%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar", "color: blue; font-size: 18px;");
            console.log("%cHand in assignment at the table (only if assignment progress is > 50%)", "color: black; font-size: 12px;");
            //objects
            this.addChild(this.testObject);
            for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
                var table = _a[_i];
                this.addChild(table);
            }
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            //dog
            this.addChild(this.dog1);
            this.addChild(this.dog2);
            this.addChild(this.timerLabel);
            this.addChild(this.score);
            var count;
            var interval = window.setInterval(function () {
                count = _this.timer.Update();
                _this.timerLabel.text = ("Time left: " + _this.timer.getMinutes + "m " + _this.timer.getSeconds + "s");
                if (count < 1) { // timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    _this.Clean();
                    window.clearInterval(interval);
                    if (config.Game.SCORE >= 600) {
                        config.Game.SCENE = scenes.State.STAGE3;
                    }
                }
            }, 1000);
        };
        //clear the stage
        Stage2.prototype.Clean = function () {
            this.dog1.barkSound.stop();
            this.dog2.barkSound.stop();
            if (this.testObject.writeSound != null)
                this.testObject.writeSound.stop();
            managers.Input.playWrite = true;
            this.removeAllChildren();
        };
        return Stage2;
    }(objects.Scene));
    scenes.Stage2 = Stage2;
})(scenes || (scenes = {}));
//# sourceMappingURL=Stage2.js.map