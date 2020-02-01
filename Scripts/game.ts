// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
(function(){

    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    //let player1:objects.Character;

    function Start():void
    {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void
    {
        stage.update();
    }

    function Main():void
    {
        let player1:objects.Character = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240);
        //player1.regX = player1.getBounds().width*0.5;
        //player1.regY = player1.getBounds().height*0.5;
        stage.addChild(player1);
    }

    window.addEventListener("load", Start);

})();