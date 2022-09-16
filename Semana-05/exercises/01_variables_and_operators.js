console.log('--EXERCISE 1: VARIABLES & OPERATORS');

// a) Create two numeric variables and use the addition operator to store the value of the sum of both numbers in a 3rd variable.
console.log('-Exercise 1.a:');
var a=1;
var b=2;
var c = a + b;
console.log('The sum between ' + a + ' and ' + b + ' is: ' + c);

//b) Create two variables of type String and concatenate them, saving the result in a 3rd variable.
console.log('-Exercise 1.b:');
var word1 = 'Hi';
var word2 = 'Pepe';
var concatenation = word1 + ' ' + word2;
console.log('The concatenation between ' + word1 + ' and ' + word2 + ' is: ' + concatenation);

// c) Create two variables of type String and add the length of each variable (number of letters in the string) saving the result of the addition in a 3rd variable (use length).
console.log('-Exercise 1.c:');
var string1 = 'My name is:';
var string2 = 'Pepe Argento';
var totalWords = string1.length + string2.length;
console.log('The total length of the sum between the strings ' + '"' + string1 +'"' + ' and ' + '"' + string2 + '"' + ' is: ' + totalWords);