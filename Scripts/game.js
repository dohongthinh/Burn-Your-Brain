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
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        SetupInput();
        Main();
    }
    function SetupInput() {
        objects.Input.Start();
    }
    function Update() {
        player1.Update();
        testObject.Update(player1);
        testObject2.Update(player1);
        stage.update();
    }
    function Main() {
        console.log("%c Main Started...", "color: green; font-size: 16px;");
        test = new createjs.Bitmap("./Assets/Images/Amiya1.png");
        test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
        //objects
        testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, test, test2);
        stage.addChild(testObject);
        testObject2 = new objects.classroomItem("./Assets/Images/Amiya2.png", 120, 140, true, test2, test);
        stage.addChild(testObject2);
        //player
        player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
        stage.addChild(player1);
    }
    function KeyboardInput() {
        if (objects.Input.pickUp || objects.Input.yeet) {
            player1.Interact(testObject);
            player1.Interact(testObject2);
        }
    }
    window.addEventListener('load', Start);
    window.addEventListener('keydown', KeyboardInput);
})();
//# sourceMappingURL=game.js.map