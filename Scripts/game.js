// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
(function () {
    let canvas = document.getElementById("canvas");
    let stage;
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
        let helloLabel = new createjs.Text("Hello, World!", "20px Consolas", "#000000");
        stage.addChild(helloLabel);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map