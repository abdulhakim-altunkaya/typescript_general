//DEFAULT PARAMETER
//second parameter has a default value. It is a default parameter
function doSomething(price:number, discount:number = 0.08) {
    return price * (1-discount);
}
//pay attention that I didnt enter second parameter.
console.log(doSomething(100));


//OPTIONAL PARAMETER
const doSomething2 = (x:number, y?:number) => {
    if(y !== undefined) {
        return x+y;
    } else {
        return x+10;
    }
    
}
//as you can see y is not passed here
console.log(doSomething2(8));