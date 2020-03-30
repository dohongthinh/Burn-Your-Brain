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
            this.test = new createjs.Bitmap("./Assets/Images/openNotebook.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/closedNotebook.png");
            this.testObject = new objects.classroomItem("./Assets/Images/closedNotebook.png", 600, 480, true, this.test, this.test2);
            this.player1 = new objects.Character("./Assets/Images/Char1/tile000.png", 50, 240, true);
            this.player2 = new objects.Character("./Assets/Images/Pro000.png", 100, 150, true);
            this.score = new objects.Label("Score: " + config.Game.SCORE, "20px", "Arial", "#000000", 15, 30, false);
            this.table1 = new objects.classroomObstacle("./Assets/Images/small_square_table.png", 200, 170, true);
            this.table2 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 200, 300, true);
            this.table3 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 200, 430, true);
            this.table4 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 300, 115, true);
            this.table5 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 300, 235, true);
            this.table6 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 300, 365, true);
            this.table7 = new objects.classroomObstacle("./Assets/Images/small_square_table.png", 400, 170, true);
            this.table8 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 400, 300, true);
            this.table9 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 400, 430, true);
            this.table10 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 500, 115, true);
            this.table11 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 500, 235, true);
            this.table12 = new objects.classroomObstacle("./Assets/Images/Small_square_table.png", 500, 365, true);
            //start timer
            this.timer = new objects.timer(46); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Stage1.prototype.Update = function () {
            managers.Collision.AABBCheck(this.testObject, this.player2);
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject, this.player2)) {
                console.log(this.testObject.prog);
                config.Game.SCORE += this.testObject.prog;
                this.score.text = "Score: " + config.Game.SCORE;
                this.testObject.HandIn();
            }
            this.player1.Update();
            this.testObject.Update();
            this.table1.Update();
            this.table2.Update();
            this.table3.Update();
            this.table4.Update();
            this.table5.Update();
            this.table6.Update();
            this.table7.Update();
            this.table8.Update();
            this.table9.Update();
            this.table10.Update();
            this.table11.Update();
            this.table12.Update();
            //this.timer.Update();
        };
        Stage1.prototype.Main = function () {
            var _this = this;
            console.log("%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment / Submit: F, Throw: Spacebar", "color: blue; font-size: 18px;");
            console.log("%cHand in assignment to the professor using E", "color: black; font-size: 12px;");
            //objects
            this.addChild(this.testObject);
            this.addChild(this.table1);
            this.addChild(this.table2);
            this.addChild(this.table3);
            this.addChild(this.table4);
            this.addChild(this.table5);
            this.addChild(this.table6);
            this.addChild(this.table7);
            this.addChild(this.table8);
            this.addChild(this.table9);
            this.addChild(this.table10);
            this.addChild(this.table11);
            this.addChild(this.table12);
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
                    if (_this.testObject.writeSound != null)
                        _this.testObject.writeSound.stop();
                    managers.Input.playWrite = true;
                    window.clearInterval(interval);
                    console.log("clearInterval");
                    if (config.Game.SCORE >= 100)
                        config.Game.SCENE = scenes.State.STAGE2;
                }
            }, 1000);
        };
        return Stage1;
    }(objects.Scene));
    scenes.Stage1 = Stage1;
})(scenes || (scenes = {}));
//# sourceMappingURL=Stage1.js.map