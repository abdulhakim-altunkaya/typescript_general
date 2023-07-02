"use strict";
//interfaces are like type objects. However, interface can only
//object and types can be anything.
//interface doesnt have "=" but types have.
Object.defineProperty(exports, "__esModule", { value: true });
const printCoordinates = (anyPoint) => {
    console.log(`x coordinate is ${anyPoint.x}`);
    console.log(`y coordinate is ${anyPoint.y}`);
    console.log(`m coordinate is ${anyPoint.m}`);
};
printCoordinates({ x: 52525, y: 89494, m: 85555855555 });
