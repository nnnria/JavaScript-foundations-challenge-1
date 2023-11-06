/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

//exercise 1.

for (let number = 10; number <= 40; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

//exercise 2.
for (let number = 11; number <= 40; number++) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}
