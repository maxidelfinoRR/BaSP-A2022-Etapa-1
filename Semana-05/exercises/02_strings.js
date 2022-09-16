console.log('--EXERCISE 2: STRINGS');

// a) Create a variable of type string with at least 10 characters and convert all the text to uppercase (use toUpperCase).
console.log('-Exercise 2.a:');
var string1 = 'Hi! Radium';
var bigString1 = string1.toUpperCase();
console.log('Original text: ' + string1 + '\n' + 'Uppercase text: ' + bigString1);

// b) Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters, saving the result in a new variable (use substring).
console.log('-Exercise 2.b:');
var string2 = 'Welcome again';
var newString2 = string2.substring(0, 5);
console.log('Original text: ' + string2 + '\n' + 'First 5 letters: ' + newString2);

// c) Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters, saving the result in a new variable (use substring).
console.log('-Exercise 2.c:');
var string3 = 'Here we go again';
var newString3 = string3.substring(13, 16);
console.log('Original text: ' + string3 + '\n' + 'Last 3 chars: ' + newString3);

// d) Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and the rest in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).
console.log('-Exercise 2.d:');
var string4 = 'lEt iS TrY AgAIn';
var string4LowerCase = string4.toLowerCase();
var string4UpperCase = string4.toUpperCase();
var newString4 = string4UpperCase.substring(0,1) + string4LowerCase.substring(1, 16);
console.log('Original text: ' + string4 + '\n' + 'New string: ' + newString4);

// e) Create a variable of type string with at least 10 characters and some white space. Find the position of the first white space and store it in a variable (use indexOf).
console.log('-Exercise 2.:e');
var string5 = 'String with space';
var space = string5.indexOf(' ');
console.log('String to study: '+ string5 + '\nThe first space is at position: ' + space);

// f) Create a variable of type string with at least 2 long words (10 characters and some space in between). Use the methods from the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).
console.log('-Exercise 2.f:');
var string6 = 'inVEsTigAtE cHaRAcTeRs';
var string6LowerCase = string6.toLowerCase();
var letterC = string6.indexOf('c');
var firstWord = string6LowerCase.substring(0,1).toLocaleUpperCase() + string6LowerCase.substring(1,12);
var secondWord = string6LowerCase.substring(letterC,13).toLocaleUpperCase() + string6LowerCase.substring(13,23);
var newString6 = firstWord + secondWord;
console.log('Original text: ' + string6 + '\n' + 'New string: ' + newString6);