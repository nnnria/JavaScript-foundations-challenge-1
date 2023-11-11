/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    Expected output:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/

const checkpointFunction = function () {
  let number = 10;

  while (number <= 100) {
    if (
      number == 10 ||
      number == 20 ||
      number == 30 ||
      number == 40 ||
      number == 60 ||
      number == 70 ||
      number == 80 ||
      number == 90
    ) {
      console.log("Checkpoint! " + number);
    } else if (number == 50) {
      console.log("Halfway there!");
    } else if (number == 100) {
      console.log("You made it!!");
    }
    number++;
  }
};

const checkpointFunctionConstant = checkpointFunction;

// Ejemplo de uso
checkpointFunctionConstant();
