const printId = (id:number | string ) => {
    if(typeof id === "number") {
        console.log(`id is ${id}`);
    } else {
        console.log(`id is ${id.toUpperCase()}`);
    }
    
}

printId("fw23f23f");