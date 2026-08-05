//Anonymous Function:- A anonymous function is a function that does not have a name.
// Instead, it is assigned to a varibale, which acts as a name.

/* 
//Syntax:-

let variable=function(parameters):returnType
{
//function body
}
 variable();     // Calling the function


*/

//Example:- Anonymous Function
/* 
let msg = function():string
{
    return  "Welcome to TypeScript";

}

console.log(msg());

 */

//Example:- Anonymous Function with Parameters

let multi =function(a:number, b:number):number
{
    return a*b
}

console.log(multi(10, 20));

//Example:- Anonymous function with Resr Parameters ---- singkle type

//Rest Parameter dont restrict the number of values that you can pass to a function.

let reverse =function(...nums:number[])
{
 
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
    }

    console.log("Sum of the number" , sum)

}

reverse(2, 4, 5, 67,6)

