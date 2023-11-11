/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`Your number is even! Module is 0.`);
  } else {
    console.log(`Your number is odd! Module is ${number % 2}.`);
  }
}

let number1 = 7;
checkEvenOdd(number1);

let number2 = 2;
checkEvenOdd(number2);
