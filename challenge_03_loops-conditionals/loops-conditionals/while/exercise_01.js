/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

const printEvenNumbers = function (start, end) {
  let evenNumber = start;

  while (evenNumber <= end) {
    if (evenNumber % 2 === 0) {
      console.log(evenNumber);
    }
    evenNumber++;
  }
};

const printOddNumbers = function (start, end) {
  let oddNumber = start;

  while (oddNumber <= end) {
    if (oddNumber % 2 !== 0) {
      console.log(oddNumber);
    }
    oddNumber++;
  }
};

console.log("-Even Numbers-");
printEvenNumbers(10, 40);

console.log("-Odd Numbers-");
printOddNumbers(11, 40);

const evenNumbersFunction = printEvenNumbers;
const oddNumbersFunction = printOddNumbers;

evenNumbersFunction(10, 40);
oddNumbersFunction(11, 40);
