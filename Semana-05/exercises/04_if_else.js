console.log('--EXERCISE 4: IF_ELSE');

// a) Create a random number between 0 and 1 using the Math.random() function, if the value is greater than or equal to 0.5 display an alert with the message “Greater than 0.5” and otherwise an alert with the message “Lower than 0.5”.
console.log('-Exercise 4.a:');
var numberRandom = Math.random();
if (numberRandom >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

/* b) Create a variable “Age” that contains an integer between 0 and 100 and displays the following alert messages:
    i. “Baby” if the age is less than 2 years;
    ii. “Child” if the age is between 2 and 12 years;
    iii. “Adolescent” between 13 and 19 years old;
    iv. “Young” between 20 and 30 years old;
    v. “Adult” between 31 and 60 years old;
    vi. “Senior Adult” between 61 and 75 years old;
    vii. “Elderly” if he is older than 75 years.   */
console.log('-Exercise 4.b:');
var age = Math.round( Math.random() * 100);
if (age < 2) {
    alert('Baby');
} else if (age >= 2 && age <= 12 ){
    alert('Child');
} else if (age >= 13 && age <= 19){
    alert('Adolescent');
} else if (age >= 20 && age <= 30){
    alert('Young');
} else if (age >= 31 && age <= 60){
    alert('Adult');
} else if (age >= 61 && age <= 75){
    alert('Senior Adult');
} else if (age >= 75){
    alert('Elderly');    
}