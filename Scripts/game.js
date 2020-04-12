"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
var Game = (function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "start", src: "./Assets/Images/startButton.png" },
        { id: "back", src: "./Assets/Images/backButton.png" },
        { id: "next", src: "./Assets/Images/nextButton.png" },
        { id: "instruction", src: "./Assets/Images/HowToPlay.png" },
        { id: "bookOpen", src: "./Assets/Images/openNotebook.png" },
        { id: "bookClosed", src: "./Assets/Images/closedNotebook.png" },
        { id: "table", src: "./Assets/Images/table.png" },
        { id: "placeholder", src: "./Assets/Images/start.png" },
        { id: "player", src: "./Assets/Images/Char1/tile000.png" },
        { id: "dog", src: "./Assets/Images/Dog-L.png" },
        { id: "computer", src: "./Assets/Images/comp.png" },
        { id: "biscuit", src: "./Assets/Images/DogBiscuit.png" },
        { id: "prof", src: "./Assets/Images/Pro000.png" },
        { id: "barking", src: "./Assets/Sounds/Barking.wav" },
        { id: "writing", src: "./Assets/Sounds/Pencil Writing.wav" },
        { id: "submit", src: "./Assets/Sounds/Submit.mp3" }
    ];
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        SetupInput();
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
        Main();
    }
    function SetupInput() {
        managers.Input.Start();
    }
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Scene Switched...", "color: green; font-size: 16px;");
        // clean up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // switch to the new scene
        switch (config.Game.SCENE) {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start();
                break;
            case scenes.State.HOW:
                console.log("switch to Tutorial Scene");
                currentScene = new scenes.How();
                break;
            case scenes.State.STAGE1:
                console.log("switch to Stage1 Scene");
                currentScene = new scenes.Stage1();
                break;
            case scenes.State.STAGE2:
                console.log("switch to Stage2 Scene");
                currentScene = new scenes.Stage2();
                break;
            case scenes.State.STAGE3:
                console.log("switch to Stage3 Scene");
                currentScene = new scenes.Stage3();
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End();
                break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map