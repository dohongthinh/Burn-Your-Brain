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
        console.log("%c Main Started...", "color: green; font-size: 16px;");
        //objects
        stage.addChild(testObject);
        stage.addChild(testObject2);
        //player
        stage.addChild(player1);
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map