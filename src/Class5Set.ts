class User {
    private age:number;

    constructor(x:number) {
        this.age = x;
    }
    set updateAge(newAge:number) {
        this.age = newAge;
    }

    get returnAge() {
        return this.age
    }
}

const noobuser = new User(888);

noobuser.updateAge = 88;
console.log(noobuser.returnAge);