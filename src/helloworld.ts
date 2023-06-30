let firstName:string = "dude";
let age: number = 88;
let isValid: boolean = false;

//Arrays - Type 1 initiation
let fruits: string[] = ["apple", "orange"];

//Arrays - Type 2 initiation
let veggies: Array<string> = []


//Mixed type array
//the array below means, this array can strings, numbers or both as values
let anyData: (string | number)[] = [];


//constructors: number and string
let name = new String("mikoko");
let myNum = new Number(89898);
let myArr = new Array(8, 95, 66);