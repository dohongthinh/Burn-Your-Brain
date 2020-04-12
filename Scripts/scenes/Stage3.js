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
    var Stage3 = /** @class */ (function (_super) {
        __extends(Stage3, _super);
        // CONSTRUCTOR
        function Stage3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Stage3.prototype.Start = function () {
            this.assignment = new objects.classroomItem(config.Game.ASSETS.getResult("bookOpen"), 470, 240, true);
            this.player1 = new objects.Character(config.Game.ASSETS.getResult("player"), 50, 240, true);
            this.player2 = new objects.Character(config.Game.ASSETS.getResult("prof"), 100, 150, true);
            this.score = new objects.Label("Score: " + config.Game.SCORE, "20px", "Arial", "#000000", 15, 30, false);
            this.dogs = new Array();
            this.dogs[0] = new objects.Dog(config.Game.ASSETS.getResult("dog"), 200, 240, true);
            this.dogs[1] = new objects.Dog(config.Game.ASSETS.getResult("dog"), 400, 360, true);
            this.computer = new objects.Computer(config.Game.ASSETS.getResult("computer"), 300, 320, true);
            this.biscuit = new objects.Biscuit(config.Game.ASSETS.getResult("biscuit"), 500, 150, true);
            this.tables = new Array();
            this.tables[0] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 200, true);
            this.tables[1] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 300, 440, true);
            this.tables[2] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 200, true);
            this.tables[3] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 320, true);
            this.tables[4] = new objects.classroomObstacle(config.Game.ASSETS.getResult("table"), 500, 440, true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            this.dogs[0].speed = 3;
            this.dogs[1].speed = 5;
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Stage3.prototype.Update = function () {
            var _this = this;
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.assignment, this.player2)) {
                console.log(this.assignment.prog);
                if (this.assignment.prog >= 50) {
                    config.Game.SCORE += this.assignment.prog;
                    this.assignment.HandIn();
                }
            }
            this.player1.Update();
            this.computer.Update();
            this.assignment.Update();
            this.dogs.forEach(function (dog) {
                dog._RunHorizontal();
                dog.Update();
                if (managers.Collision.AABBCheck(_this.player1, dog)) {
                    _this.Clean();
                    console.log("go to end scene");
                    config.Game.SCENE = scenes.State.END;
                }
                if (managers.Collision.AABBCheck(_this.biscuit, dog)) {
                    dog.barkSound.stop();
                    config.Game.PLAYER.isHoldingItem = false;
                    _this.biscuit.state = objects.ObjectState.NORMAL;
                    _this.removeChild(_this.biscuit);
                    dog._Stop();
                }
            });
            this.tables.forEach(function (table) {
                table.Update();
            });
            this.biscuit.Update();
            this.score.text = "Score: " + config.Game.SCORE;
        };
        Stage3.prototype.Main = function () {
            var _this = this;
            console.log("%cStand below the computer and hold up to do lab assignment", "color: blue; font-size: 16px;");
            console.log("%cUse biscuit to stop the dog", "color: blue; font-size: 16px;");
            //objects
            this.addChild(this.assignment);
            for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
                var table = _a[_i];
                this.addChild(table);
            }
            this.addChild(this.biscuit);
            this.addChild(this.computer);
            //player
            this.addChild(this.player1);
            this.addChild(this.player2);
            //dog
            for (var _b = 0, _c = this.dogs; _b < _c.length; _b++) {
                var dog = _c[_b];
                this.addChild(dog);
            }
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
                }
            }, 1000);
        };
        //clear the stage
        Stage3.prototype.Clean = function () {
            this.dogs[0].barkSound.stop();
            this.dogs[1].barkSound.stop();
            if (this.assignment.writeSound != null)
                this.assignment.writeSound.stop();
            managers.Input.playWrite = true;
            this.removeAllChildren();
        };
        return Stage3;
    }(objects.Scene));
    scenes.Stage3 = Stage3;
})(scenes || (scenes = {}));
//# sourceMappingURL=Stage3.js.map