"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CONTROL FLOW STATEMENT
const max = 100;
let counter = 0;
let counter2 = 50;
//1. IF
if (counter < max) {
    counter++;
}
else {
    counter--;
}
console.log(counter);
//2.TERNARY
max > counter2 ? counter2++ : counter2--;
console.log(counter2);
