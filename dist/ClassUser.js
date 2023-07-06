"use strict";
//class is blueprint of an object
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    //we need to constructor to initialize this classs
    constructor(id, email, firstName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
    }
    //We can define a method for this class
    printData() {
        console.log(this.email);
    }
}
const user1 = new User(1, "aaa@gmail.com", "Schukri");
console.log(user1);
console.log(user1.firstName);
user1.printData();
//we can create an array of the User class objects
let myArray = [];
myArray.push(new User(8, "bbb@gmail.com", "Hamdiyo"));
console.log(myArray);
