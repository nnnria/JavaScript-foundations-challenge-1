/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let evenNumber = 10;

while (evenNumber <= 40) {
  if (evenNumber % 2 == 0) {
    console.log(evenNumber);
  }
  evenNumber++;
}

let oddNumber = 11;

while (oddNumber <= 40) {
  if (oddNumber % 2 != 0) {
    console.log(oddNumber);
  }
  oddNumber++;
}
