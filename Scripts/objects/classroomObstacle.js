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
        function classroomObstacle(imagePath, x, y, isCentered) {
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
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
            if (this.x > 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
            // checks the bot boundary
            if (this.y > 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
                this.dy = -3;
            }
            // check the top boundary
            if (this.y < this.halfHeight + 80) {
                this.y = this.halfHeight + 80;
                this.dy = 3;
            }
        };
        // PUBLIC LIFE CYCLE METHODS
        /**
         * Initialization happens here
         *
         * @memberof classroomObstacle
         */
        classroomObstacle.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        classroomObstacle.prototype.Update = function () {
            managers.Collision.AABBCheck(config.Game.PLAYER, this);
            if (this.isColliding) {
                var player_bottom = config.Game.PLAYER.y + config.Game.PLAYER.halfHeight;
                var player_top = config.Game.PLAYER.y - config.Game.PLAYER.halfHeight;
                var player_left = config.Game.PLAYER.x - config.Game.PLAYER.halfWidth;
                var player_right = config.Game.PLAYER.x + config.Game.PLAYER.halfWidth;
                var tiles_bottom = this.y + this.halfHeight;
                var tiles_top = this.y - this.halfHeight;
                var tiles_left = this.x - this.halfWidth;
                var tiles_right = this.x + this.halfWidth;
                var b_collision = tiles_bottom - player_top;
                var t_collision = player_bottom - tiles_top;
                var l_collision = player_right - tiles_left;
                var r_collision = tiles_right - player_left;
                if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision && managers.Input.moveDown) {
                    config.Game.PLAYER.y = this.y - this.halfHeight;
                }
                if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision && managers.Input.moveUp) {
                    config.Game.PLAYER.y = this.y + this.halfHeight;
                }
                if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision && managers.Input.moveRight) {
                    config.Game.PLAYER.x = this.x - this.halfWidth;
                }
                if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision && managers.Input.moveLeft) {
                    config.Game.PLAYER.x = this.x + this.halfWidth;
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