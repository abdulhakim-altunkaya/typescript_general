"use strict";
//Classes which have at least 1 method unimplemented
//can be abstract. Abstract classes are leaving implementation
//to the child class.
//We cannot create an object of abstract class.
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(a, b) {
        this.email = a;
        this.salary = b;
    }
}
//Child class must implement unimplemented method in parent class
class Employee extends User {
    constructor(a, b) {
        super(a, b);
        this.getSalary = () => {
            return this.salary;
        };
    }
}
const worker = new Employee("aa@gmail", 900);
console.log(worker.getSalary());
