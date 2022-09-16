console.log('--EXERCISE 3: ARRAYS');

// a) Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November ", "December"] show by console the months 5 and 11 (use console.log).
console.log('-Exercise 3.a:');
var arr1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November ", "December"];
var month5 = arr1[4];
var month11 = arr1[10];
var posMonth5 = arr1.indexOf(month5) + 1;
var posMonth11 = arr1.indexOf(month11) + 1;
console.table(arr1);
console.log('Month: ' + posMonth5 + ' is ' + month5 + '\nMonth: ' + posMonth11 + ' is ' + month11);

// b) Sort the array of months alphabetically and display it on the console (use sort).
console.log('-Exercise 3.b:');
var arr2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November ", "December"];
console.table(arr2);
console.table(arr2.sort());

// c) Add an element to the beginning and end of the array (use unshift and push).
console.log('-Exercise 3.c:');
console.table(arr1);
arr1.unshift('FirstElement');
arr1.push('FinalElement');
console.table(arr1);

// d) Remove an element from the beginning and the end of the array (use shift and pop).
console.log('-Exercise 3.d:');
arr1.shift();
arr1.pop();
console.table(arr1);

// e) Invert the order of the array (use reverse).
console.log('-Exercise 3.e:');
console.table(arr1.reverse());

// f) Join all the elements of the array into a single string where each month is separated by a hyphen - (use join).
console.log('-Exercise 3.f:');
arr1.reverse();
var months = arr1.join(' - ');
console.log(months);

// g) Create a copy of the array of months containing from May to November (use slice).
console.log('-Exercise 3.g:');
console.table(arr1.slice(4,11));