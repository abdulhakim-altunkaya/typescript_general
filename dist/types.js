"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrintCoordinates = (pot) => {
    console.log(`x coordinate is ${pot.x}`);
    console.log(`y coordinate is ${pot.y}`);
    if (pot.z !== undefined) {
        console.log(`z coordinate is ${pot.z}`);
    }
};
PrintCoordinates({ x: 855, y: 968 });
const printAll = (pot) => {
    console.log(`x coordinate is ${pot.x}`);
    console.log(`y coordinate is ${pot.y}`);
    if (pot.z !== undefined) {
        console.log(`z coordinate is ${pot.z}`);
    }
    console.log(`m coordinate is ${pot.x}`);
    console.log(`k coordinate is ${pot.y}`);
};
printAll({ x: 777, y: 85858, m: 6363, k: 21514 });
