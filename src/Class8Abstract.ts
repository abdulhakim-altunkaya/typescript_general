//Classes which have at least 1 method unimplemented
//can be abstract. Abstract classes are leaving implementation
//to the child class.
//We cannot create an object of abstract class.

abstract class User {
    private email: string; //Child cannot access
    protected salary: number; //Child can access

    constructor(a:string, b:number) {
        this.email = a;
        this.salary = b;
    }

    //method body is for child class. We just need to 
    //define method name and its return value type.
    abstract getSalary():number;
}

//Child class must implement unimplemented method in parent class
class Employee extends User {
    constructor(a:string, b:number) {
        super(a, b);
    }

    getSalary(): number {
        
    }
    /* SAME AS ABOVE
    getSalary = ():number => {
        return this.salary;
    }
    */
}

const worker = new Employee("aa@gmail", 900);
console.log(worker.getSalary());