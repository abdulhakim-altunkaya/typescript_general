class User {
    email:string;
    accountNumber:string;
    balance:number;

    constructor(a:string, b:string, c:number) {
        this.email = a;
        this.accountNumber = b;
        this.balance = c
    }

    showBalance = () => {
      console.log(`Your Balance is ${this.balance}`);
    }
}

//In child class, you have to pass parent constructor params
//Later you will use "super" keyword
class Employee extends User {
    myPassword:string;

    constructor(a:string, b:string, c:number, d:string) {
        super(a, b, c);
        this.myPassword = d;
    }

    //we can also overwrite parent class methods
    showBalance = () => {
        console.log("Hello dude, things have changed");
    }
}

//now we can create an object of Employee
const employee = new Employee("aa@gml.com", "A23423", 99, "0x2r23f");

//and now we can access methods in child and parent class
employee.showBalance();
