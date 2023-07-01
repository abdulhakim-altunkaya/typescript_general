let employee: object = {
    firstName: "Azad",
    lastName: "Ciziri",
    age: 25
}//You cannot say console.log(employee.firstName)

let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle?: string;//optional property, you can leave unassigned, it wont give error, just "undefined"
} = {
    firstName: "Azad",
    lastName: "Ciziri",
    age: 25
}
//any keyword
let employee3: any = {
    firstName: "Azad",
}
//This one you can say:
console.log(employee2.firstName);
//OR
console.log(employee2["age"]);