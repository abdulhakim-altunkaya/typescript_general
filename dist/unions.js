"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printId = (id) => {
    if (typeof id === "number") {
        console.log(`id is ${id}`);
    }
    else {
        console.log(`id is ${id.toUpperCase()}`);
    }
};
printId("fw23f23f");
