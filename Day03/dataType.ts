let firstname="chayanthithan";
console.log(firstname)
// firstname=10
// console.log(firstname)

let age:number
age=20;
console.log(age)

class Shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }

}

const obj=new Shape(20,40);
console.log(obj.getArea())

