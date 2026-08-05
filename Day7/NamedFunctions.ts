// Named Function:- A Function that declared with a name.

/*
Synatax:-

function functionName(parameter) returnType
{
// block of code
}
functionName() // Calling the function/inovking the function

*/

//Example 1:- Named Function with no parameter & return Type
/*
function display()
{
    console.log("Welcome to TypeScript")
}

display();   // calling function

*/

//Example 2:- Named Function with Parameter and returnType
/*
function addNumbers(a:number, b:number):number
{
   return (a+b)
}

// let result:number =addNumbers(2,5);

// console.log(result);

console.log(addNumbers(2,5))

console.log(addNumbers(2,5,8)) // compiler error Expected 2 arguments but getting 3
console.log(addNumbers(2)) // compiler error Expected 2 arguments but getting 1

*/


//Example:- Named function with Resr Parameters ---- singkle type
//Rest Parameters dont restrict the values that we can pass to a function
/* 
function addNumbers(...nums:number[])

{
    let i;
    let sum :number=0;

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }

    console.log("Sum of the numbers", sum);
}

addNumbers(2, 4, 5);
addNumbers(10, 20, 30, 40, 50);

*/

//Example 4:- Named Function with Rest Parameters  -----------Multi types

/* 
function findelements(...elements:(number|string)[]):number   //Union Types
{
return elements.length;
}

console.log(findelements(2, "Amol", 4, 5, "String"));
console.log(findelements(12, 20, 30, 40, 50, 60));
console.log(findelements("abc", "xyz"));

*/

//Example:- Named Function with Optional Parameters 
/* 
function displayDetails(id: number, Name: String, mailid?: String): void {
    console.log("ID", id)
    console.log("NAME", Name)
    if (mailid !== undefined) {
        console.log("Email", mailid)
    }

}
displayDetails(13, "Amol", "amol@gmail.com")
displayDetails(12, "Amol");

*/


//Example:- Named Function with default Parameters

function calculateDiscount(price:number, rate:number=0.50):void
{
    let discount:number=price*rate;
    console.log(discount)
}

calculateDiscount(1000,0.30);

calculateDiscount(1000);


