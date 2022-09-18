console.log('--EXERCISE 6: FUNCTIONS');

// a) Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the result in a variable, displaying the value of said variable in the browser console.
console.log('-Exercise 6.a:');
function suma (a,b) {
    return a + b;
}
c = suma(3,5);
console.log(c);

// b) To the sum function above, add a validation to control if any of the parameters is not a number; if it is not a number, display an alert clarifying that one of the parameters has an error and return the NaN value as the result.
console.log('-Exercise 6.b:'); 
function isNum(n){
    return typeof n === 'number'; 
}
function suma2 (a,b) {
    if (isNum(a) && isNum(b)) {
        return a + b;
    }
    return 'Not a Number (NaN)';
}
console.log(suma2(3,'5'));

// c) Separately, create a validate Integer function that receives a number as a parameter and returns true if it is an integer.
console.log('-Exercise 6.c:'); 
function validateInteger (a) {
    if (a - Math.floor(a) === 0) {
        return true;
    }
   return false;
}
console.log(validateInteger(3));

// d) To the sum function of exercise 6b) add a call to the function of exercise 6c. and that validates that the numbers are integers. If there are decimals, show an alert with the error and return the number converted to an integer (rounded).
console.log('-Exercise 6.d:'); 
function suma3 (a,b,validate) {
    if (isNum(a) && isNum(b)) {
        if (validate(a) && validate(b)) {
            return a + b;
        }
        total = Math.round(a) + Math.round(b);
        return 'One of the numbers is not an integer, but we will convert it for you :) the total of the sum is: ' + total;
    }
    return 'Not a Number (NaN)';
} 
console.log(suma3(1,10,validateInteger));

// e) Convert the validation of exercise 6d) into a separate function and call it inside the sum function testing that everything still works the same.
console.log('-Exercise 6.e:'); 
function convert(a,b) {
    total = Math.round(a) + Math.round(b);
    return 'One of the numbers is not an integer, but we will convert it for you :) the total of the sum is: ' + total;
}
function suma4 (a,b,validate) {
    if (isNum(a) && isNum(b)) {
        if (validate(a) && validate(b)) {
            return a + b;
        }
        return convert(a,b);
    }
    return 'Not a Number (NaN)';
}
console.log( suma4(1,'35',validateInteger));