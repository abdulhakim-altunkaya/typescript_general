"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//it will print 4
console.log(Direction.Left);
//string enums
var Orders;
(function (Orders) {
    Orders["Ordered"] = "Ordered";
    Orders["Cooking"] = "Cooking";
    Orders["OnWay"] = "OnWay";
})(Orders || (Orders = {}));
console.log(Orders.Cooking);
