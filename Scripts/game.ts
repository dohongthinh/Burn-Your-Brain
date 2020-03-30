// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
let Game = (function(){

    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let currentSceneState:scenes.State;
    let currentScene: objects.Scene;

    let assets: createjs.LoadQueue;
    let assetManifest = 
    [
        {id: "barking", src:"./Assets/Sounds/Barking.wav"},
        {id: "writing", src:"./Assets/Sounds/Pencil Writing.wav"},
        {id: "submit", src:"./Assets/Sounds/Submit.mp3"}
    ];

    function Preload():void
    {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }

    function Start():void
    {       
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
    function SetupInput(): void {
        managers.Input.Start();
    }
    function Update():void
    {
        if(currentSceneState != config.Game.SCENE)
        {
            Main();
        }

        currentScene.Update();
        
        stage.update();
    }
    
    function Main():void
    {
        console.log(`%c Scene Switched...`, "color: green; font-size: 16px;");

        // clean up
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // switch to the new scene

        switch(config.Game.SCENE)
        {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start(); 
                break;
            case scenes.State.STAGE1:
                console.log("switch to Stage1 Scene");
                currentScene = new scenes.Stage1();
                break;
            case scenes.State.STAGE2:
                console.log("switch to Stage2 Scene");
                currentScene = new scenes.Stage2(); 
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
