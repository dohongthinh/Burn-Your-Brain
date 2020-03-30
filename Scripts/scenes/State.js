"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["END"] = 1] = "END";
        State[State["STAGE1"] = 2] = "STAGE1";
        State[State["STAGE2"] = 3] = "STAGE2";
        State[State["STAGE3"] = 4] = "STAGE3";
        State[State["NUM_OF_SCENES"] = 5] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map