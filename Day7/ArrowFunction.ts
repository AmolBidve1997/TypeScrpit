//Lambda refers to anonymous function in programming.

//Lmabda function are a concise mechanism to represent anonymous functions.

//These function are also called as Arrow functions.

//There are 3 Parts to a Lambda function

//1. Parameters ---- A function may optionally have parameters.

//2. The fat arrow notation / lambda notation (=>) it is also called as "goes to operator"

//3. Statements ----- represent the function instruction set.

/* 
//Syntax:- 

let variable = (parameter) =>
{
//block of code
}
variable();

*/


//Example:- Arrow function with no parameter and return value
/* 
let greet=():void =>
{
    console.log("Hello TypeScript")
}
greet();
 
*/
//Example:- Arrow function with parameter and return type
/* 
let add=(a:number, b:number):number =>
{
    return a+b;   // when you write your arrow function, if you have only one single return statement then the curly braces are optional.

}


console.log(add(12,3));

*/
//Example:- Arrow function with implicit return
/* 
let multiply =(a:number, b:number):number => a*b;
    

console.log(multiply(23, 23))

let substract =(a:number, b:number):number =>a-b;
    

console.log(substract(23, 2))

*/

//Example:- Arrow function with optional parameters

/* 
let optional = (name: string, id: number, mailid?: string): void => {
    console.log("Name:", name)
    console.log("ID:", id)

    if (mailid != undefined) {
        console.log("MailID:", mailid)
    }
}

optional("Anmol",12, "anmol@gmail.com")
optional("Amol", 21)

*/

//Example:- Arrow function with default parameters

/* 
let defaults = (price:number, rate:number=20):void =>
{
console.log(price*rate)
}

defaults(200, 10);
defaults(100);

*/

//Example:- Arrow function with Rest Parameters

let functionName = (...elemnts:(number | String)[]):number =>

{
    return elemnts.length;
}

console.log(functionName("String", 12, 23, "Amol", "Test"));
console.log(functionName(12, 23, 34));