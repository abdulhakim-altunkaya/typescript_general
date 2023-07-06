"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(x) {
        this.age = x;
    }
    get anyword() {
        return this.age;
    }
}
const noobuser = new User(888);
//ERROR: console.log(noobuser.age);
//SOLUTION:
console.log(noobuser.anyword);
