"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(x) {
        this.age = x;
    }
    set updateAge(newAge) {
        this.age = newAge;
    }
    get returnAge() {
        return this.age;
    }
}
const noobuser = new User(888);
noobuser.updateAge = 88;
console.log(noobuser.returnAge);
