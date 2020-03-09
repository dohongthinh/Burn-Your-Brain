"use strict";
var objects;
(function (objects) {
    var ObjectState;
    (function (ObjectState) {
        ObjectState[ObjectState["NORMAL"] = 0] = "NORMAL";
        ObjectState[ObjectState["THROWN"] = 1] = "THROWN";
        ObjectState[ObjectState["PICKED_UP"] = 2] = "PICKED_UP";
        ObjectState[ObjectState["HANDED_IN"] = 3] = "HANDED_IN";
    })(ObjectState = objects.ObjectState || (objects.ObjectState = {}));
})(objects || (objects = {}));
//# sourceMappingURL=ObjectState.js.map