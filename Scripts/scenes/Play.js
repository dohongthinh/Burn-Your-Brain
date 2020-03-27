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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this.test = new createjs.Bitmap("./Assets/Images/Amiya1.png");
            this.test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
            this.testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, this.test, this.test2);
            this.player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
            this.dog = new objects.classroomObject("./Assets/Images/Dog-R.png", 100, 150, true);
            this.score = new objects.Label("Score:", "20px", "Arial", "#000000", 15, 30, false);
            //start timer
            this.timer = new objects.timer(10); //time in seconds
            this.timerLabel = new objects.Label("Time left: ", "20px", "Arial", "#000000", 15, 10, false);
            config.Game.PLAYER = this.player1;
            this.Main();
        };
        Play.prototype.Update = function () {
            managers.Collision.AABBCheck(this.testObject, this.dog);
            if (managers.Input.pickUp && managers.Collision.AABBCheck(this.testObject, this.dog)) {
                console.log(this.testObject.prog);
                if (this.testObject.prog >= 50) {
                    this.score.text = "Score: " + this.testObject.prog;
                    this.testObject.HandIn();
                }
            }
            managers.Collision.AABBCheck(this.player1, this.dog);
            if (managers.Collision.AABBCheck(this.player1, this.dog)) {
                console.log("go to end scene");
                config.Game.SCENE = scenes.State.END;
            }
            this.player1.Update();
            this.testObject.Update();
            this.dog.Update();
        };
        Play.prototype.Main = function () {
            var _this = this;
            console.log("%cMovement: WASD, Pick Up/ Put Down: E, Do Assignment: F, Throw: Spacebar", "color: blue; font-size: 18px;");
            console.log("%cHand in assignment at the table (only if assignment progress is > 50%)", "color: black; font-size: 12px;");
            //objects
            this.addChild(this.testObject);
            //player
            this.addChild(this.player1);
            //dog
            this.addChild(this.dog);
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
            //this._startButton.on("click", ()=>{
            //config.Game.SCENE = scenes.State.PLAY;
            //});
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map