/* 
1) Premitive DataType(Built-In)
Number
String
Boolean
Null
Undefined
Any
Union Type
void


2) Non-Premitive DataType(Objects)
Array
Class
Functiona
Interface
Touple
 */

//1. Number Type
//Represent both integers and floating-point numbers

let age:number=12;
let price:number=2344.45;
let big=23443454;

console.log("Age: " , age)
console.log("Price: ", price)
console.log(typeof(big))

//2. String Type
//Represent textual data

/* 
1. SingleQoute(' ')
2. DoubleQoute(" ")
3. Backtick (` `)
 */

let firstName:string="John";
let lastName:string="Kamal";

console.log("Hello" , firstName, lastName)  //Hello John Kamal

let greeting:string=`Hello ${firstName} ${lastName}`
console.log(greeting)