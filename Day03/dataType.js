var firstname = "chayanthithan";
console.log(firstname);
// firstname=10
// console.log(firstname)
var age;
age = 20;
console.log(age);
var Shape = /** @class */ (function () {
    function Shape(width, height) {
        this.width = width;
        this.height = height;
    }
    Shape.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Shape;
}());
var obj = new Shape(20, 40);
console.log(obj.getArea());
