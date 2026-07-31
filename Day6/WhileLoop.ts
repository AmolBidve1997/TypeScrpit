//While loop :-  A while loop will execute as long as the condition is true.

/* 
while(condition)
{
statements;
}
 */

//Example:- 

/* 
let i: number = 1;

while (i <= 5) {
    console.log(i)
    i++;
}

*/
//Example:- Print 1 to 10 even numbers
/* 
//Method 1

let j :number = 2;

while(j<=10)
{
    console.log(j)
    j+=2;  //j=j+2;
}

 */

//Method 2

/*
let j: number = 1;

while (j <= 10) {
    if (j % 2 == 0) {
        console.log(j)
    }
    j++;
}

*/

//Example:- Print odd numbers from 1..........10

//Method 1
/* 
let k:number=1;

while(k<=10)
{
    console.log(k)
    k+=2;
}

 */

//Method 2

/*
let k: number = 1;

while (k <= 10) {
    if (k % 2 != 0) {
        console.log(k)
    }
    k++;
}
*/


//Example:- Print the number from 10..........1

/* 
let l: number = 10;

while (l >= 1) {
    console.log(l)
    l--;
} 
*/

//Infinite loop ----------- If the condition never become false then it will go to infinite loop.

/* 
while(true)
{
    console.log(1)
}

*/

//Example:- Write the Program to calculate the sum of the first 10 natural number using while loop

/* 
let i:number=1;
let sum:number=0;

while(i<=10)
{
    sum=sum+i;
    i++;
}

console.log(sum);

*/
//Example: - Write a program to calculate the factorial of a given number using while loop

let i:number=4;

let factorial:number=1;

while(i>0)
{
    factorial=factorial*i;
    i--;
}

console.log(factorial);


//Write a program to revrse a given number using while loop

let number:number = 1234576547;
let rev =0;
let rem;
while(number>0)
{
    rem = number%10;  
    rev = rev*10 + rem;  
    number = Math.floor(number/10);  
}

console.log(rev);


