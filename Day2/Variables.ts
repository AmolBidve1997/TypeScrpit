//Varibales: It is a container which can holds/store data.

//In javaScript & TypeScript the varibales are declared by using these keywords

// var , let , const

//Syntax: keyword varibaleName : dataType = value

//Ex: var age : number = 30

//DataType is optional

//Ex: var age = 30

//var age = 30
//console.log(age)

// Var vs let vs const

/*
1) Scope
2) Declaration/Value Assignment 
3) Re-declaration
4) Re-initalization/ Re-assignment
5) Hosting
*/

//var - we do not use this in Modern JS/TS. Avoid var because it was a function scope and can lead to unexpected behavior such as variable leakage or accidental redeclaration.
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.

// 1) Scope ---- Accessible Area ( Functional Scope(Var) & Block Scope(let, const))

//Example 1: Var (Functional Scope)

/* function varScope()
{
if(true)
{
var msg = "Functional Scope"
//console.log(msg)
}

console.log(msg)
}

varScope() */

//Example 2: let & const (Block Scope)

/* function blockScope()
{
    if(true)
    {
        let msg1= "Block1"
        const msg2 = "Block2"
        console.log(msg1)
        console.log(msg2)
    }
      //  console.log(msg1) // can not access
       // console.log(msg2) // can not access

}

blockScope() */

//Example 3:

/* function scopeDiff() {
    if (true) {
        var msg1 = 10;
        let msg2 = 20;
        const msg3 = 30;

        console.log(msg1)
        console.log(msg2)
        console.log(msg3)
    }
    console.log(msg1)
    //console.log(msg2)  //cannot access
    //console.log(msg3)  //cannot access
}

scopeDiff() */

// 2) Declaration / Value Assignment

//Example 1: var can be declared without initialization
/* 
var x; //declaration
console.log(x); //undefined
x=30;  //initalization
console.log(x);
 */

//Example 2: let can be declared without initialization

/* 
let y; //declaration
console.log(y); //undefined
y=30;  //initalization
console.log(y); 
*/


//Example 2: const must be initialized at the time of declaration

/* 
//const z; //incorrect

const z=30;  //correct
console.log(z);
 */


//3) Re-declaration
// var ---- allows the re-declaration
// let & const ----- not allows the re-declaration (making code safer)

//Example 1: var ---- allows the re-declaration
/* 
var city ="Mumbai";
var city ="Pune";
console.log(city) 
*/

//Example 2: let ---- not allows the re-declaration
/* 
let city ="Mumbai";
let city ="Pune";
console.log(city) 
 */

//Example 2: const ---- not allows the re-declaration
/* 
const planet ="Earth";
const planet ="Sun";
console.log(city) 
 */

// 4) Re-initalizatiomn/Re-Assignment
//  var & let ---- allows re-assignment
//  const ---- not allows re-assignment (only constant allowed -- cannot change the value)

//Example 1: var --- allows re-assignment
/* 
var age = 25;
age = 30;
console.log(age)
 */


//Example 2: let --- allows re-assignment
/* 
let age = 25;
 age = 30;
console.log(age)
 */

//Example 2: const --- can not allows re-assignment
/* 
const age = 25;
 age = 30;
console.log(age)
  */

// 5) Hoisting  --- var (Hoisted with undefined)   --- let & const (Not initialized)

/* 
console.log(a)   //undefined
var a=10;
console.log(a);
 */


/* 
console.log(a)    // Not initialized
let a=10;
console.log(a);
*/


/* 
console.log(a)  // Not initialized
const a=10;
console.log(a);
 */
