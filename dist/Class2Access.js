"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ACCESS MODIFIERS: PRIVATE, PROTECTED, PUBLIC
class User1 {
    constructor() {
        this.id1 = "";
    }
}
class User2 {
    constructor(x) {
        this.id2 = x;
    }
}
//default property visibility is public.
//Therefore specifiying "public" is optional.
//private means it can be accessed only from class
//NOT from subclasses
class User3 {
    constructor() {
        this.id3 = "";
    }
}
//protected property is only accessible from within class
//and its subclasses.
class User4 {
    constructor() {
        this.id4 = "";
        this.id5 = "";
    }
}
class User5 extends User4 {
    constructor() {
        super(...arguments);
        this.printWord = () => {
            console.log(this.id4);
            //console.log(this.id5); ERROR
        };
    }
}
