var objects;
(function (objects) {
    class classroomItem extends createjs.Bitmap {
        //constructor
        constructor(imagePath, x, y) {
            super(imagePath);
            this.x = x;
            this.y = y;
        }
    }
    objects.classroomItem = classroomItem;
})(objects || (objects = {}));
//# sourceMappingURL=classroomItem.js.map