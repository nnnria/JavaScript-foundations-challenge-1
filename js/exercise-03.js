/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/
function getTypeOf(value) {
    if (typeof value === 'string') {
    return 'string';
    } else if (typeof value === 'number') {
    return 'number';
    } else if (typeof value === 'boolean') {
    return 'boolean';
    } else if (typeof value === 'object' && value === null) {
    return 'null';
    } else if (typeof value === 'undefined') {
    return 'undefined';
    } else {
    return 'other';  //used for other data types
    }
}

// Test the function with different types of values
console.log(getTypeOf('String'));          
console.log(getTypeOf(13));               
console.log(getTypeOf(true));             
console.log(getTypeOf(null));             
console.log(getTypeOf(undefined));        
console.log(getTypeOf({}));           //object
