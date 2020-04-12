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
            this.assignment = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 600, 480, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"), 100, 150, true);
            this.score = new objects.Label("Score: " + config.Game.SCORE, "20px", "Arial", "#000000", 15, 30, false);
            this.tables = new Array();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 200, 170, true);
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 200, 300, true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 200, 430, true);
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 115, true);
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 235, true);
            this.tables[5] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 365, true);
            this.tables[6] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 400, 170, true);
            this.tables[7] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 400, 300, true);
            this.tables[8] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 400, 430, true);
            this.tables[9] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 115, true);
            this.tables[10] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 235, true);
            this.tables[11] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 365, true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Stage1.prototype.Update = function () {
            managers.Collision.AABBCheck(this.assignment, this.player2);
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.assignment, this.player2)) {
                console.log(this.assignment.prog);
                config.Game.SCORE += this.assignment.prog;
                this.score.text = "Score: " + config.Game.SCORE;
                this.assignment.HandIn();
            }
            this.player1.Update();
            this.assignment.Update();
            this.tables.forEach(function (table) {
                table.Update();
            });
            //this.timer.Update();
        };
        Stage1.prototype.Main = function () {
            var _this = this;
            //objects
            this.addChild(this.assignment);
            for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
                var table = _a[_i];
                this.addChild(table);
            }
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            this.addChild(this.timerLabel);
            this.addChild(this.score);
            var count;
            var interval = window.setInterval(function () {
                count = _this.timer.Update();
                _this.timerLabel.text = ("Time left: " + _this.timer.getMinutes + "m " + _this.timer.getSeconds + "s");
                if ( /*count <1 ||*/config.Game.SCENE != scenes.State.STAGE1) { // timer ends, do something here (e.g. next scene.)
                    //TODO: next scene (gameover)
                    if (_this.assignment.writeSound != null)
                        _this.assignment.writeSound.stop();
                    managers.Input.playWrite = true;
                    window.clearInterval(interval);
                    console.log("clearInterval");
                    if (config.Game.SCORE >= 100) {
                        config.Game.SCENE = scenes.State.STAGE2;
                    }
                }
            }, 1000);
        };
        return Stage1;
    }(objects.Scene));
    scenes.Stage1 = Stage1;
})(scenes || (scenes = {}));
//# sourceMappingURL=Stage1.js.map