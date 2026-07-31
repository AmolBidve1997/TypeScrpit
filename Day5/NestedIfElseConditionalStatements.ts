// Nested if else condition

/* 

if (condition 1)
{
statements;
}

esle if(condition 2)
{
statements;
}

else if(condition 3)
{
statements;
}

else
{
    statements;
}

*/

//Example :- Depending on the marks, display appropriate grade. 

//marks>=90 Grade A

//marks>=80 Grade B

//marks>=70 Grade c

//Grade D
/* 
 let marks : number=80;

 if(marks>=90 && marks<=100)     //Condition 1
 {
    console.log("Grade A");
 }

 else if(marks>=80 && marks<90)   //Condition 2
 {
    console.log("Grade B");
 }

 else if(marks>=70 && marks<80)    ////Condition 3
 {
    console.log("Grade C");
 }

 else
 {
    console.log("Grade D")
 }

 */
//Example:- Browser Selection

let browser: string = "Brave";

if (browser === "Chrome") {
   console.log("Browser is Chrome");
}

else if (browser === "Safari") {
   console.log("Browser is Safari");
}

else if (browser === "FireFox") {
   console.log("Browser is FireFox");
}

else if (browser === "edge") {
   console.log("Browser is edge")
}

else {
   console.log("Browser is Brave")
}

//Example:- Check if a number is positive & even

let nu: number = 10;

if (nu > 0) {
   if (nu % 2 === 0) {
      console.log("Number is positive & even")
   }
   else {
      console.log("Number is postive but odd")
   }
}

else {
   console.log("Number is negative")
}

//Example:- Check if a character is an uppercase vowel

let ch: string = "Q"

if (ch === ch.toLocaleUpperCase()) {
   if
      (
      ch == "A" ||
      ch == "E" ||
      ch == "I" ||
      ch == "O" ||
      ch == "U"
   ) {
      console.log("Character is Upper case & Vowel")
   }
   else {
      console.log("Character is Uppercase but not Vowel")
   }

}
else {
   console.log("Character is not an uppercase")
}

//Example:- Find the largest of three numbers

let
   large1: number = 14,
   large2: number = 14,
   large3: number = 10;

if (large1 === large2 && large1 > large3) {
   console.log("Large1 & Large2 are equal and greater than large3")
}

else if (large1 > large2 && large1 > large3) {
   console.log("Large1 is the largest number ")
}

else if (large2 > large1 && large2 > large3) {
   console.log("large2 is the largest number")
}

else if (large3 > large1 && large3 > large2) {
   console.log("large3 is the largest number")
}

else {
   console.log("some numbers are equal")
}

//Example:- Check number is a multiple of both 5 & 10

let multi: number = 15;

if (multi % 5 == 0) {

   if (multi % 10 == 0) {
      console.log("Number is multiple of both 5 & 10")
   }
   else {
      console.log("Number is multiple of 5 only")
   }


}

else {
   console.log("Number is not mutiple of 5")
}

//Example:- check if a character is vowels & constants

let cha: string = "A"

if (cha >= "A" && cha <= "Z" || cha >= "a" && cha <= "z") {



   if (cha == "A" ||
      cha == "E" ||
      cha == "I" ||
      cha == "O" ||
      cha == "U" ||
      cha == "a" ||
      cha == "e" ||
      cha == "i" ||
      cha == "o" ||
      cha == "u") {
      console.log("Character is Vowels")
   }

   else {
      console.log("Character is Constants")
   }
}
else {
   console.log("Not an alphabet")
}

//Example:- Check number is divisible by both 2 & 3

let numb: number = 27;

if (numb % 2 === 0) {
   if (numb % 3 === 0) {
      console.log("Number is divisible by both 2 & 3")
   }

   else {
      console.log("Number is divisible by only 2")
   }

}

else {
   if (numb % 3 === 0) {
      console.log("Number is divisible by only 3")
   }
   else {
      console.log("Number is neither divisible by 2 & 3")
   }
}

//Example:- Perform basic arithmetic operations based on user input

let num3: number = 12;
let num4: number = 6;

let operations: string = "+";

if (operations === "+") {
    console.log("Additions", num3 + num4);
}

else if (operations === "-") {
    console.log("Substractions", num3 - num4);
}

else if (operations === "*") {
    console.log("Multiplications", num3 * num4);
}

else if (operations === "/") {
    console.log("Dividations", num3 / num4)
}

else {
    console.log("Invalid Operations")
}




