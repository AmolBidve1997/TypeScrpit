//Switch Case Statements

/* 

switch(expression)
{
case value 1: Statements;
break;
case value 2: Statements;
break;
case value 3: Statements;
break;
default: Statements;
}

*/

//Example:- Depending on the value of the day, print the corresponding day of the week.

let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid Day")

}

//Example:- The switch statement can aslo include an expression

let x: number = 10, y: number = 5;

switch (x - y) {
    case 1:
        console.log("Result Zero");
        break;
    case 5:
        console.log("Result is Five");
        break;
    case 10:
        console.log("Result is Ten")
        break;
    default:
        console.log("Other Result");
}

//Example:- Print the corresponding month name for a given month number

let month: number = 13;

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("Aug")
        break;
    case 9:
        console.log("Sep")
        break;
    case 10:
        console.log("Oct")
        break;
    case 11:
        console.log("Nov")
        break;
    case 12:
        console.log("Dec")
        break;
    default:
        console.log("This number month not exist");
}

//Example:- Perform basic arithmetic operations based on user input

let num1: number = 10;
let num2: number = 5;
let arithmetic: string = "+";

switch (arithmetic) {
    case "+":
        console.log("Addition", num1 + num2)
        break;

    case "-":
        console.log("Substraction", num1 - num2)
        break;

    case "*":
        console.log("Multiplication", num1 * num2)
        break;
    case "/":
        console.log("Dividation", num1 / num2)
        break;
    default:
        console.log("Invalid Operator")
}

//Example the season based on the month number 

let season: number = 12;

switch (season) {
    case 12:
    case 1:
    case 2:

        {
            console.log("Winter")
            break;
        }

    case 3:
    case 4:
    case 5:
        {
            console.log("Spring")
            break;
        }

    case 6:
    case 7:
    case 8:
        {
            console.log("Summer")
            break;
        }

    case 9:
    case 10:
    case 11:
        {
            console.log("Autumn")
            break;
        }

    default:
        console.log("Invalid month")







}