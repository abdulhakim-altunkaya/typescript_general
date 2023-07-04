"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 0;
let num2 = 50;
//WHILE LOOP
while (num < 10) {
    num++;
    if (num == 7) {
        continue;
    }
    if (num == 9) {
        break;
    }
    console.log(num);
}
//DO WHILE LOOP
do {
    num2++;
    if (num2 == 55) {
        continue;
    }
    if (num2 == 59) {
        break;
    }
    console.log(num2);
} while (num2 < 60);
