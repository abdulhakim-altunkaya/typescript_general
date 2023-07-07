"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(a, b, c) {
        this.showBalance = () => {
            console.log(`Your Balance is ${this.balance}`);
        };
        this.email = a;
        this.accountNumber = b;
        this.balance = c;
    }
}
//In child class, you have to pass parent constructor params
//Later you will use "super" keyword
class Employee extends User {
    constructor(a, b, c, d) {
        super(a, b, c);
        //we can also overwrite parent class methods
        this.showBalance = () => {
            console.log("Hello dude, things have changed");
        };
        this.myPassword = d;
    }
}
//now we can create an object of Employee
const employee = new Employee("aa@gml.com", "A23423", 99, "0x2r23f");
//and now we can access methods in child and parent class
employee.showBalance();
