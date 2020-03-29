module config
{  
    export class Game
    {
        public static STAGE: createjs.Stage;
        public static PLAYER: objects.Character;
        public static SCENE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static SCORE: number = 0;;

    }
}