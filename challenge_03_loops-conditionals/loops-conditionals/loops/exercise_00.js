/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

//exercise 1.

function printEvenNumbers(start, end) {
  for (let number = start; number <= end; number++) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

function printOddNumbers(start, end) {
  for (let number = start; number <= end; number++) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}

console.log("-Even Numbers-");
printEvenNumbers(10, 40);

console.log("-Odd Numbers-");
printOddNumbers(11, 40);
