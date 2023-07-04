
//CONTROL FLOW STATEMENT
const max:number = 100;
let counter:number = 0;
let counter2:number = 50;
//1. IF
if(counter < max) {
    counter++;
} else {
    counter--;
}
console.log(counter);

//2.TERNARY
max > counter2 ? counter2++ : counter2--;
console.log(counter2);