class User {
    private age:number;

    constructor(x:number) {
        this.age = x;
    }
    get anyword() {
        return this.age;
    }
}

const noobuser = new User(888);
//ERROR: console.log(noobuser.age);
//SOLUTION:
console.log(noobuser.anyword);