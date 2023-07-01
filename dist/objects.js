"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    firstName: "Azad",
    lastName: "Ciziri",
    age: 25
}; //You cannot say console.log(employee.firstName)
let employee2 = {
    firstName: "Azad",
    lastName: "Ciziri",
    age: 25
};
//This one you can say:
console.log(employee2.firstName);
//OR
console.log(employee2["age"]);
