# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a high-level, interpreted programming language that is primarily used for creating dynamic and interactive web content. It allows developers to add functionality to web pages, making them responsive and user-friendly. JavaScript can be executed in web browsers, which enables it to interact with HTML and CSS to manipulate the content and behavior of web pages.
```

## About values

### What is a primitive value?

```
A primitive value in JavaScript is a data type that represents a single, immutable value. These data types are simple and atomic, and they are not objects. 
```

### Which are primitive values? Explain them with at least one example for primitive.

```
There are six primitive data types in JavaScript:

String: Represents a sequence of characters, enclosed in single or double quotes.
Ex: "Lore ipsum"

Number: Represents both integer and floating-point numbers.
Ex: 13

Boolean: Represents a true or false value.
Ex: true

Undefined: Represents a variable that has been declared but not assigned a value.
Ex: let x;

Null: Represents an intentional absence of any object value or no value at all.
Ex: null

Symbol (introduced in ECMAScript 6): Represents a unique and immutable value used as an object property key.
Example: const uniqueKey = Symbol('description')
```

## About variables

### What is a variable in JS?

```
A variable in JavaScript is a container for storing data values. It is a symbolic name or identifier that represents a location in memory where data can be stored and retrieved. Variables allow developers to work with and manipulate data in their programs. In JavaScript, you can declare variables using keywords like var, let, or const, and you can assign values of various data types to them.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
In JavaScript, you can define variables using three keywords: var, let, and const.
In summary, while var is a way to declare variables in JavaScript, it's not recommended for modern development due to its scoping issues. let and const are the preferred ways to define variables in modern JavaScript, with const being used for values that should not change and let for variables that can be reassigned.
```

### Which are the most used var naming conventions in JS?

```
 It's essential to choose a naming convention and be consistent within your codebase or follow the convention used in the project you're working on. Consistency in naming helps make your code more accessible and maintainable, both for yourself and for others who may work on the code in the future. In JavaScript, there are several naming conventions for variables:

Camel Case: In camel case, the first word is lowercase, and subsequent words are capitalized. This is commonly used for variable names in JavaScript.
Ex: myVariableName

Pascal Case: In Pascal case, each word in the variable name begins with a capital letter, including the first word. This is often used for naming constructor functions or classes.
Ex: PersonName

Snake Case: In snake case, words are separated by underscores, and all letters are typically lowercase. While this is less common in JavaScript, it is used in some codebases.
Ex: my_variable_name

Kebab Case: In kebab case, words are separated by hyphens, and all letters are typically lowercase. This is commonly used in URLs and HTML attributes but less so for JavaScript variables.
Ex: my-variable-name

Uppercase: Some constants or variables with a global scope may be named using all capital letters, with words separated by underscores. This is often used for constants.
Ex:MAX_VALUE

Hungarian Notation: Hungarian notation prefixes variable names with a code indicating the variable's data type. This is less common in modern JavaScript due to the use of dynamically typed variables.
Ex: strName (for a string), intCount (for an integer)

Abbreviations: It's common to use abbreviations for long variable names, but it's advisable to use them sparingly and ensure they are easily understandable.
Ex: imgURL (for "image URL")
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
The main comparison operators in JavaScript are used to compare two values and return a Boolean result (true or false). Here are the main comparison operators with examples using primitive values:

Equality (==): Checks if two values are equal, regardless of their data types. If they are equal, it returns true.
Ex:
5 == 5; // true
"hello" == "world"; // false
5 == "5"; // true (coercion)

Inequality (!=): Checks if two values are not equal. If they are not equal, it returns true.
Ex:
5 != 10; // true
"hello" != "world"; // true
5 != "5"; // false (coercion)

Strict Equality (===): Checks if two values are equal, considering both their values and data types. If they are equal, it returns true.
Ex:
5 === 5; // true
"hello" === "world"; // false
5 === "5"; // false

Strict Inequality (!==): Checks if two values are not equal, considering both their values and data types. If they are not equal, it returns true.
Ex:
5 !== 10; // true
"hello" !== "world"; // true
5 !== "5"; // true

Greater Than (>): Checks if the left value is greater than the right value. If it is, it returns true.
Ex:
10 > 5; // true
5 > 10; // false

Less Than (<): Checks if the left value is less than the right value. If it is, it returns true.
Ex:
5 < 10; // true
10 < 5; // false

Greater Than or Equal (>=): Checks if the left value is greater than or equal to the right value. If it is, it returns true.
Ex:
10 >= 5; // true
5 >= 5; // true

Less Than or Equal (<=): Checks if the left value is less than or equal to the right value. If it is, it returns true.
Ex:
5 <= 10; // true
5 <= 5; // true
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
The main logical operators in JavaScript are used to combine and manipulate Boolean values. Here are the main logical operators with examples using primitive Boolean values:

Logical AND (&&): Returns true if both operands are true. Otherwise, it returns false.
Ex:
true && true; // true
true && false; // false
false && true; // false
false && false; // false

Logical OR (||): Returns true if at least one of the operands is true. It returns false only if both operands are false.
Ex:
true || true; // true
true || false; // true
false || true; // true
false || false; // false

Logical NOT (!): Negates the Boolean value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.
Ex:
!true; // false
!false; // true

Logical XOR (Exclusive OR): Returns true if exactly one of the operands is true and the other is false. If both operands are the same (both true or both false), it returns false`. JavaScript doesn't have a built-in XOR operator, but you can achieve XOR behavior using a combination of the other operators.
Ex:
function xor(a, b) {
  return (a || b) && !(a && b);
}
xor(true, true); // false
xor(true, false); // true
xor(false, true); // true
xor(false, false); // false
```
