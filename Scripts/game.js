"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
var Game = (function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var player1;
    var object;
    var object2;
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
        CollisionCheck(player1, object);
        CollisionCheck(player1, object2);
        object2.PickUp(player1);
        object.PickUp(player1);
        object2.Update();
        object.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Main Started...", "color: green; font-size: 16px;");
        //objects
        object = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true);
        stage.addChild(object);
        object2 = new objects.classroomItem("./Assets/Images/Amiya2.png", 120, 140, true);
        stage.addChild(object2);
        //player
        player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
        stage.addChild(player1);
    }
    function KeyboardInput() {
        if (objects.Input.pickUp) {
            if (object.isColliding && object.isPickedUp == false && player1.isHoldingItem == false) {
                object.isPickedUp = true;
                player1.isHoldingItem = true;
            }
            else if (object2.isColliding && object2.isPickedUp == false && player1.isHoldingItem == false) {
                object2.isPickedUp = true;
                player1.isHoldingItem = true;
            }
            else {
                object2.isPickedUp = false;
                object.isPickedUp = false;
                player1.isHoldingItem = false;
            }
            objects.Input.pickUp = false;
        }
        if (objects.Input.yeet) {
            if (object.isPickedUp) {
                object.isThrown = true;
                object.isPickedUp = false;
                player1.isHoldingItem = false;
            }
            if (object2.isPickedUp) {
                object2.isThrown = true;
                object2.isPickedUp = false;
                player1.isHoldingItem = false;
            }
            objects.Input.yeet = false;
        }
    }
    function CollisionCheck(object, object2) {
        var radii = object.halfHeight + object2.halfHeight;
        if (objects.Vector2.sqrDistance(object.position, object2.position) < (radii * radii)) {
            if (!object2.isColliding) {
                console.log("Collision!");
                object2.isColliding = true;
            }
        }
        else {
            object2.isColliding = false;
        }
    }
    window.addEventListener('load', Start);
    window.addEventListener('keydown', KeyboardInput);
})();
//# sourceMappingURL=game.js.map