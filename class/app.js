// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     get area(){
//         return this.calcArea();
//     }

//     calcArea(){
//         return this.height * this.width;
//     }
// }

// var rectangle = new Rectangle(5, 5);
// console.log(rectangle.area);

// // static func
// class Point {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }

//     static distance(a, b){
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.sqrt(dx*dx + dy*dy);
//     }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log("Khoang Cach P1P2: "+Point.distance(p1,p2));
// boxing
// class Animal { 
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }

// let obj = new Animal();
// let speak = obj.speak;
// console.log(obj.speak());


// let eat = Animal.eat;
// console.log(Animal.eat());

// boxing
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
console.log(speak());

let eat = Animal.eat;
console.log(eat());