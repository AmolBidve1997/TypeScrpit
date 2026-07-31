//For Loop :---- A for loop is typically used when the number of iterations is known beforehand.

/*
Syntax:

for (initialization; condition; increment/decrement)
{
    statements;
}
*/

//Example:- Print the number from 1-------10

for(let f:number=1;f<=10;f++)
{
    console.log(f);
}

//Example:- Print the even number from 1----------50

for(let e:number=1;e<=50;e++)
{
    if(e%2==0)
    {
        console.log(e)
    }
}

//Example: -  Print the number from 10----1

for(let n:number=10;n>=1;n--)
{
    console.log(n)
}
//-----------------------------------------------------------
let b:number;   //Global Variable

for(b=1;b<=5;b++)
{
    console.log(b) // 1, 2, 3, 4, 5
}

console.log(b);
//-----------------------------------------------------------
let c:number;

for(c=1;c<=5;c++);

console.log(c);