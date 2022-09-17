console.log('--EXERCISE 4: IF_ELSE');

// a) Create a random number between 0 and 1 using the Math.random() function, if the value is greater than or equal to 0.5 display an alert with the message “Greater than 0.5” and otherwise an alert with the message “Lower than 0.5”.
console.log('-Exercise 4.A:');
var numberRandom = Math.random();
if (numberRandom >= 0.5) {
    console.log('Greater than 0,5');
} else {
    console.log('Lower than 0,5');
}

/*
b) Create a variable “Age” that contains an integer between 0 and 100 and displays the following alert messages:
    i. “Baby” if the age is less than 2 years;
    ii. “Child” if the age is between 2 and 12 years;
    iii. “Adolescent” between 13 and 19 years old;
    iv. “Young” between 20 and 30 years old;
    v. “Adult” between 31 and 60 years old;
    vi. “Senior Adult” between 61 and 75 years old;
    vii. “Elderly” if he is older than 75 years.
*/
console.log('-Exercise 4.A:');
var age = Math.round( Math.random() * 100);
console.log(age)
if (age < 2) {
    console.log('Baby');
} else if (age >= 2 && age <= 12 ){
    console.log('Child');
} else if (age >= 13 && age <= 19){
    console.log('Adolescent');
} else if (age >= 20 && age <= 30){
    console.log('Young');
} else if (age >= 31 && age <= 60){
    console.log('Adult');
} else if (age >= 61 && age <= 75){
    console.log('Senior Adult');
} else if (age >= 75){
    console.log('Elderly');    
}