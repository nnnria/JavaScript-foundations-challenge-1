/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.
*/

// 1. Create a variable called 'name' that points to a string containing your name
let name = "Núria Ruiz Font";

// 2. Define a function 'updateValue' that receives a value and updates the 'name' variable
function updateValue(value) {
  name = value;
}

// 3. Call function 'updateValue' with your favorite musician's name
updateValue("La Zowi");

// Log 'name' value
console.log(name); // Output: "Favorite Musician"

// 4. Call function 'updateValue' with the value 'true'
updateValue(true);

// Log 'name' value
console.log(name); // Output: true

// 5. Call function 'updateValue' with the value '28'
updateValue(28);

// Log 'name' value
console.log(name); // Output: 28
