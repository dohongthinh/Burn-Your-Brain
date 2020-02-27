"use strict";
var objects;
(function (objects) {
    var timer = /** @class */ (function () {
        function timer(time) {
            //initializing
            this.now = new Date().getTime();
            this.timeLeft = new Date().getTime();
            this.targetTime = new Date().getTime();
            this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
            this.now = new Date().getTime(); // returns number of miliseconds since Jan 1, 1970
            this.timeLeft = new Date().getTime();
            this.targetTime = this.now + (time * 1000); // .getTime works in milliseconds so time will be converted to milliseconds
            this.timeLeft = this.targetTime - this.now;
        }
        timer.prototype.Update = function () {
            this.now += 1000;
            this.timeLeft = this.targetTime - this.now;
            this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
            console.log("Time left: " + this.minutes + "m " + this.seconds + "s ");
            //console.log(this.now);
            return this.timeLeft;
        };
        return timer;
    }());
    objects.timer = timer;
})(objects || (objects = {}));
//# sourceMappingURL=timer.js.map