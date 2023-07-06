
//ACCESS MODIFIERS: PRIVATE, PROTECTED, PUBLIC
class User1 {
    id1: string = "";
}

class User2 {
    id2: string;

    constructor(x:string) {
        this.id2 = x;
    }
}

//default property visibility is public.
//Therefore specifiying "public" is optional.
//private means it can be accessed only from class
//NOT from subclasses
class User3 {
    private id3: string = "";
}

//protected property is only accessible from within class
//and its subclasses.
class User4 {
    protected id4: string = "";
    private id5: string = "";
}

class User5 extends User4 {
    printWord = () => {
        console.log(this.id4);
        //console.log(this.id5); ERROR
    }
}