//if else condition

/*
if(condition)
{
  Statement;
}
else
{
    Statement;
}

*/

//Example 1:- If age is greater than or equal to 18 then message "Yor are eligible for Vote" else "Yor are not eligible for Vote"
/*
let age :number=2;

if(age>=18)
{
    console.log("Yor are eligible for Vote");
}
else
{
    console.log("Yor are not eligible for Vote");

}
 */
//Example 2:- If num is divisible by 2 its even , otherwise it is odd.
/* 
let num : number=3;

if(num%2==0)
{
    console.log(`${num} Even Number`);
}
else
{
    console.log(`${num} Odd Number`);
}

 */

//Example:- Check if a person is teenager (between 13 & 19)

let age: number = 15;

if (age >= 13 && age <= 19) {
    console.log("Person is teenager");
}

else {
    console.log("Person is not Teenager")
}

//Example:- Comapre two number & Print large one

let a: number = 10, b = 13;

if (a > b) {
    console.log("A is lage number")
}

else {
    console.log("B is large number")
}

//Example:- Check number is postive , negative or zero

let number: number = 0;

if (number > 0) {
    console.log("Number is Postive")
}

else {
    if (number < 0) {
        console.log("Number is Negative")
    }

    else {
        console.log("Number is Zero")
    }

}

//Example:- Check if person is eligible for senior citizen discount(age>=60)

let citizen: number = 61;

if (citizen >= 60) {
    console.log("Person is Senior Citizen")
}

else {
    console.log("Person is not a Senior Citizen")
}

