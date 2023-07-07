"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() {
        this.getUserCount = () => {
            console.log(User.userCount);
        };
    }
}
_a = User;
User.userCount = 10;
User.findUserCount = () => {
    console.log(_a.userCount);
};
//we can directly access static properties and functions
console.log(User.userCount);
User.findUserCount();
//Accessing a static properety from a non-static function:
const user = new User();
user.getUserCount();
