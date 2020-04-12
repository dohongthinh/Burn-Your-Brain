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
    var classroomObstacle = /** @class */ (function (_super) {
        __extends(classroomObstacle, _super);
        // constructor
        function classroomObstacle(image, x, y, isCentered) {
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this.dy = 3;
            _this.Start();
            return _this;
        }
        Object.defineProperty(classroomObstacle.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (newState) {
                this._state = newState;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE LIFE CYCLE METHODS
        classroomObstacle.prototype._checkBounds = function () {
        };
        // PUBLIC LIFE CYCLE METHODS
        /**
         * Initialization happens here
         *
         * @memberof classroomObstacle
         */
        classroomObstacle.prototype.Start = function () {
        };
        classroomObstacle.prototype.Update = function () {
            managers.Collision.AABBCheck(config.Game.PLAYER, this);
            if (this.isColliding) {
                var player_bottom = config.Game.PLAYER.y + config.Game.PLAYER.halfHeight;
                var player_top = config.Game.PLAYER.y - config.Game.PLAYER.halfHeight;
                var player_left = config.Game.PLAYER.x - config.Game.PLAYER.halfWidth;
                var player_right = config.Game.PLAYER.x + config.Game.PLAYER.halfWidth;
                var object_bottom = this.y + this.halfHeight;
                var object_top = this.y - this.halfHeight;
                var object_left = this.x - this.halfWidth;
                var object_right = this.x + this.halfWidth;
                if (player_bottom > object_top && managers.Input.moveDown) {
                    config.Game.PLAYER.y = config.Game.PLAYER.y - 5;
                }
                if (player_top < object_bottom && managers.Input.moveUp) {
                    config.Game.PLAYER.y = config.Game.PLAYER.y + 5;
                }
                if (player_right > object_left && managers.Input.moveRight) {
                    config.Game.PLAYER.x = config.Game.PLAYER.x - 5;
                }
                if (player_left < object_right && managers.Input.moveLeft) {
                    config.Game.PLAYER.x = config.Game.PLAYER.x + 5;
                }
            }
        };
        classroomObstacle.prototype.Reset = function () {
        };
        return classroomObstacle;
    }(objects.GameObject));
    objects.classroomObstacle = classroomObstacle;
})(objects || (objects = {}));
//# sourceMappingURL=classroomObstacle.js.map