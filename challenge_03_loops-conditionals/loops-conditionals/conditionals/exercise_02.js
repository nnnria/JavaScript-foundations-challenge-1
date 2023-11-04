/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
/*This program has a bug in the main code. First of all, if we follow the code
as we got it and we know that JS is a language that executes sequentially.
So, when our variable 'age' enters the first conditional that fits it, 
it will exit the program; that's why if you execute it on your console 
will show you "you are in elementary school".
To fix the code, we will need to add a maximum and a minimum value in 
every condition, in order to place our variable in the condition that suits it perfectly.
The code should be like this:
const age = 20;
if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
*/
