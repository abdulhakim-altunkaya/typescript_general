const fruits:string[] = ["watermelon", "kiwi", "apple"];

//FOR LOOP
for(let i:number = 0; i < fruits.length; i++) {
    const fruit:string = fruits[i];
    console.log(fruit);
}

//FOR OF LOOP
for(let eachFruit of fruits) {
    console.log(eachFruit);
}

//FOR EACH
fruits.forEach(singleFruit => {
    console.log(singleFruit);
});

