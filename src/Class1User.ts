//class is blueprint of an object

class User {
    id: number;
    email: string;
    firstName: string;

    //we need to constructor to initialize this classs
    constructor(id:number, email:string, firstName:string) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
    }
    //Alternative to constructor can be like this:
    //id: number = 0;
    //email: string ="";

    //We can define a method for this class
    printData() {
        console.log(this.email);
    }
}

const user1 = new User(1, "aaa@gmail.com", "Schukri");

console.log(user1);
console.log(user1.firstName);
user1.printData();

//we can create an array of the User class objects
let myArray:User[] = [];
myArray.push(new User(8, "bbb@gmail.com", "Hamdiyo"));
console.log(myArray);