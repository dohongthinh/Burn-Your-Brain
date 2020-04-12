"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Computer = /** @class */ (function (_super) {
        __extends(Computer, _super);
        // constructor
        function Computer(image, x, y, isCentered) {
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this._prog = 0;
            _this._complete = false;
            _this.Start();
            _this._progLabel = new createjs.Text("Finish lab assignment for 1000 pts", "", "white");
            config.Game.STAGE.addChild(_this._progLabel);
            return _this;
        }
        Object.defineProperty(Computer.prototype, "prog", {
            get: function () {
                return this._prog;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE LIFE CYCLE METHODS
        Computer.prototype._checkBounds = function () {
        };
        // PUBLIC LIFE CYCLE METHODS
        /**
         * Initialization happens here
         *
         * @memberof classroomObstacle
         */
        Computer.prototype.Start = function () {
        };
        Computer.prototype.Update = function () {
            var player_bottom = config.Game.PLAYER.y + config.Game.PLAYER.halfHeight;
            var player_top = config.Game.PLAYER.y - config.Game.PLAYER.halfHeight;
            var player_left = config.Game.PLAYER.x - config.Game.PLAYER.halfWidth;
            var player_right = config.Game.PLAYER.x + config.Game.PLAYER.halfWidth;
            var object_bottom = this.y + this.halfHeight;
            var object_top = this.y - this.halfHeight;
            var object_left = this.x - this.halfWidth;
            var object_right = this.x + this.halfWidth;
            this._progLabel.x = this.x;
            this._progLabel.y = this.y - 50;
            managers.Collision.AABBCheck(config.Game.PLAYER, this);
            if (this.isColliding) {
                if (player_bottom > object_top && managers.Input.moveDown) {
                    config.Game.PLAYER.y = config.Game.PLAYER.y - 5;
                }
                if (player_top < object_bottom && managers.Input.moveUp) {
                    config.Game.PLAYER.y = config.Game.PLAYER.y + 5;
                    if (this._prog < 100) {
                        this._prog += 0.25;
                        this._progLabel.text = this._prog.toFixed(2) + "%";
                    }
                    else if (this._prog = 100) {
                        if (!this._complete) {
                            config.Game.SCORE += 1000;
                            this._complete = true;
                        }
                    }
                }
                if (player_right > object_left && managers.Input.moveRight) {
                    config.Game.PLAYER.x = config.Game.PLAYER.x - 5;
                }
                if (player_left < object_right && managers.Input.moveLeft) {
                    config.Game.PLAYER.x = config.Game.PLAYER.x + 5;
                }
            }
        };
        Computer.prototype.Reset = function () {
        };
        Computer.prototype.Interact = function () {
        };
        return Computer;
    }(objects.GameObject));
    objects.Computer = Computer;
})(objects || (objects = {}));
//# sourceMappingURL=Computer.js.map