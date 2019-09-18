// Class 的基本语法

// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function(){
//     return '('+this.x+','+this.y+')';
// } 
// let p = new Point(1,9);
// console.log(p);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}
let p = new Point(1,9);
console.log(p);