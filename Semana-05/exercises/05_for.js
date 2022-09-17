console.log('--EXERCISE 5: FOR');

// a) Create an array containing 5 words and iterate through that array using a JavaScript for loop to display an alert using each of the words.
console.log('-Exercise 5.a:');
var arr = ['pepe', 'car', 'rocket', 'radium', 'beast'];
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

// b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word.
console.log('-Exercise 5.b:');
var newArr = [];
for (let i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].substring(0,1).toUpperCase();
    var wordRest = arr[i].substring(1, arr[i].length);
    newWord = firstLetter + wordRest;
    newArr.push(newWord);
}
for (let i = 0; i < newArr.length; i++) {
    alert(newArr[i]);
}

// c) Create a variable called “sentence” that has an empty string, then the array from point a) go through it with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete chain.
console.log('-Exercise 5.c:');
var sentence = '';
for (let i = 0; i < arr.length; i++) {
    sentence = sentence + '' + arr[i];
}
alert(sentence);

// d) Create an empty array with a for loop of 10 repetitions. Fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements inside the array, from number 0 to number 9. Show the final array in the browser console (use console .log).
console.log('-Exercise 5.d:');
var arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = i;
}
console.log(arr2);