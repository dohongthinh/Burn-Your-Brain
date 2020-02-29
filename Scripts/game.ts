// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
let Game = (function(){

    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let player1:objects.Character;
    let testObject:objects.classroomItem;
    let testObject2:objects.classroomItem;
    let test:createjs.Bitmap;
    let test2:createjs.Bitmap;
    let table:objects.Table;
    let timer:objects.timer;
    let timerLabel: objects.Label;

    function Start():void
    {
        test = new createjs.Bitmap("./Assets/Images/Amiya1.png");
        test2 = new createjs.Bitmap("./Assets/Images/Amiya2.png");
        testObject = new objects.classroomItem("./Assets/Images/Amiya1.png", 420, 240, true, test, test2);
        testObject2 = new objects.classroomItem("./Assets/Images/Amiya2.png", 120, 140, true, test2, test);
        player1 = new objects.Character("./Assets/Images/Char Placeholder/Idle/1.png", 320, 240, true);
        table = new objects.Table("./Assets/Images/Small_square_table.png",100,100,true);
        config.Game.PLAYER = player1;
        stage = new createjs.Stage(canvas);
        
        config.Game.STAGE = stage; // create a reference to the Global Stage

        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        SetupInput();
        Main();
    }
    function SetupInput(): void {
        managers.Input.Start();
    }
    function Update():void
    {
        player1.Update();
        testObject.Update();
        testObject2.Update();
        stage.update();
    }
    
    function Main():void
    {
        console.log(`%cMovement: WASD, Pick Up/ Put Down: E, ...: Spacebar `, "color: blue; font-size: 18px;");
        
        //objects
        stage.addChild(testObject);
        stage.addChild(testObject2);

        //player
        stage.addChild(player1);

        //table
        stage.addChild(table);
        //start timer
        timer = new objects.timer(10); //time in seconds
        timerLabel = new objects.Label("Time left: ", "20px", "Aerial", "#000000", 5 , 0, false);
        stage.addChild(timerLabel);
        let count:number;
        let interval = window.setInterval( function() {
            count = timer.Update();
            timerLabel.text = ("Time left: " + timer.getMinutes+ "m " + timer.getSeconds + "s");
            if(count <1)
            {// timer ends, do something here (e.g. next scene.)
                //TODO: next scene (gameover)
                window.clearInterval(interval);
            }
        }, 1000);
    }
    window.addEventListener('load', Start);

})();
