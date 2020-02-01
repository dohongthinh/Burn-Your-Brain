var objects;
(function (objects) {
    class Character extends createjs.Bitmap {
        //constructor
        constructor(imagePath, x, y) {
            super(imagePath);
            this.x = x;
            this.y = y;
        }
    }
    objects.Character = Character;
})(objects || (objects = {}));
//# sourceMappingURL=character.js.map