"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
(function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    //let player1:objects.Character;
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        var player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240);
        //player1.regX = player1.getBounds().width*0.5;
        //player1.regY = player1.getBounds().height*0.5;
        stage.addChild(player1);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map