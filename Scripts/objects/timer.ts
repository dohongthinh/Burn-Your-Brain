module objects {
    export class timer
    {   
        //initializing
        now = new Date().getTime();
        timeLeft = new Date().getTime();
        targetTime = new Date().getTime();
        minutes : number = 0;
        seconds : number = 0;

        constructor(time:number){
            this.now = new Date().getTime(); // returns number of miliseconds since Jan 1, 1970
            this.timeLeft = new Date().getTime(); 
            this.targetTime = this.now + (time*1000); // .getTime works in milliseconds so time will be converted to milliseconds
            
            this.timeLeft = this.targetTime - this.now;       
            
        }

        public Update():number{
            this.now += 1000;
            this.timeLeft = this.targetTime - this.now;
            this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);

            console.log("Time left: " + this.minutes + "m " + this.seconds + "s ");
            if(this.seconds == 0)
            {
                console.log("go to end scene");
                //config.Game.SCENE = scenes.State.END
            }

            return this.timeLeft;
        }
        
        get getMinutes():number{
            return this.minutes;
        }

        get getSeconds():number{
            return this.seconds;
        }
    }
}