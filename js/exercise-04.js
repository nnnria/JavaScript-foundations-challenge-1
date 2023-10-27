/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
    
1.true && console.log("moo");
This code outputs "mooo".
Since true evaluates to true, the second operand, console.log("moo"), is executed

2.false && console.log("moo moo?")
This code has no output.
False evaluates to false, the second operand is never evaluated. So, "moo moo?" is not logged to the console.

3.true || console.log("hello friend");
This code has no output.
If the first operand true evaluates to true, the second operand is not evaluated.

4.false || console.log("bye friend");
This code outputs "bye friend".
Since false evaluates to false, the second operand, console.log("bye friend"), is executed. 

The behavior of these expressions is due to short-circuit evaluation in JavaScript. 
When using &&, if the first operand is false, the result is always false, 
so there's no need to evaluate the second operand. Conversely, when using ||, 
if the first operand is true, the result is always `true, so there's no need to evaluate the second operand. 
This can be useful for conditional execution of code based on certain conditions.
*/
