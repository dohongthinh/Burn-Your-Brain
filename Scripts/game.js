"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
var Game = (function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var player1;
    var testObject;
    var testObject2;
    var test;
    var test2;
    var timer;
    var timerLabel;
    function Start() {
        test = new createjs.Bitmap("./Assets/Images/Amiya1.png");
        test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
        testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, test, test2);
        testObject2 = new objects.classroomItem("./Assets/Images/Amiya2.png", 120, 140, true, test2, test);
        player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
        config.Game.PLAYER = player1;
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        SetupInput();
        Main();
    }
    function SetupInput() {
        managers.Input.Start();
    }
    function Update() {
        player1.Update();
        testObject.Update();
        testObject2.Update();
        stage.update();
    }
    function Main() {
        console.log("%cMovement: WASD, Pick Up/ Put Down: E, ...: Spacebar ", "color: blue; font-size: 18px;");
        //objects
        stage.addChild(testObject);
        stage.addChild(testObject2);
        //player
        stage.addChild(player1);
        //start timer
        timer = new objects.timer(10); //time in seconds
        timerLabel = new objects.Label("Time left: ", "20px", "Aerial", "#000000", 5, 0, false);
        stage.addChild(timerLabel);
        var count;
        var interval = window.setInterval(function () {
            count = timer.Update();
            timerLabel.text = ("Time left: " + timer.getMinutes + "m " + timer.getSeconds + "s");
            if (count < 1) { // timer ends, do something here (e.g. next scene.)
                //TODO: next scene (gameover)
                window.clearInterval(interval);
            }
        }, 1000);
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map