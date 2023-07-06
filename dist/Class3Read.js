"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//by default properties are mutable (re-assignable)
class User1 {
    constructor(x, y, z) {
        this.id = x;
        this.age = y;
        this.job = z;
    }
}
const customer1 = new User1("Azad", 80, "Plumber");
customer1.age = 55; //HERE I AM REASSIGNING
//ERROR: customer1.job = "Carpenter";
console.log(customer1);
