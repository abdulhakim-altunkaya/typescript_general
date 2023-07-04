"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["watermelon", "kiwi", "apple"];
//FOR LOOP
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}
//FOR OF LOOP
for (let eachFruit of fruits) {
    console.log(eachFruit);
}
//FOR EACH
fruits.forEach(singleFruit => {
    console.log(singleFruit);
});
