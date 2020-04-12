"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["END"] = 1] = "END";
        State[State["HOW"] = 2] = "HOW";
        State[State["STAGE1"] = 3] = "STAGE1";
        State[State["STAGE2"] = 4] = "STAGE2";
        State[State["STAGE3"] = 5] = "STAGE3";
        State[State["NUM_OF_SCENES"] = 6] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map