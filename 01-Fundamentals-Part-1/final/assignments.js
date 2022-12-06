////////////////////////////////////
// Values and Variables
/*
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
*/

const country = "Norway";
const continent = "Europe";
let population = 5.4;

//2. Log their values to the console
console.log("ASSIGNMENT:");
console.log("country: ", country);
console.log("continent: ", continent);
console.log("population: ", population);

////////////////////////////////////
// Data Types
/*
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet. 
*/

const isIsland = false;
let language;

/*
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

console.log("isIsland: ", typeof isIsland);
console.log("population: ", typeof population);
console.log("country: ", typeof country);
console.log("language: ", typeof language);

////////////////////////////////////
// let, const and var

/*
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one) 
*/
language = "Norwegian";

/*
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
*/

// const country = "Norway";
// const continent = "Europe";
// let population = 5.4;
// const isIsland = false;

/*
3. Try to change one of the changed variables now, and observe what happens
*/

// country = "Sweden";
// Får Error i konsollen: "Assignment to constant variable."

////////////////////////////////////
// Basic Operators

/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half? */
console.log("Half of Norwegian population: ", population / 2);

/* 2. Increase the population of your country by 1 and log the result to the console */
console.log("Half population of Norway minus one: ", population / 2 - 1);

/* 3. Finland has a population of 6 million. Does your country have more people than
Finland? */
console.log("Norway has more people than Finland (6M). ", 6 < population); //false

/* 4. The average population of a country is 33 million people. Does your country
have less people than the average country? */
console.log(
  "Norway has less people than the average country (33M). ",
  population < 33
); //true

/* 5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */

/*const description =
country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter). 
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

//1. Store Mark's and John's mass and height in variables

//test data 1:
const heightMark1 = 1.69;
const weightMark1 = 78;
const heightJohn1 = 1.95;
const weightJohn1 = 92;
//test data 2:
const heightMark2 = 1.88;
const weightMark2 = 95;
const heightJohn2 = 1.76;
const weightJohn2 = 85;

/*2. Calculate both their BMIs using the formula (you can even implement both versions)*/

//bmi test 1:
const bmiMark1 = weightMark1 / heightMark1 ** 2;
const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;
//bmi test 2:
const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

/*3. Create a boolean variable 'markHigherBMI' containing information 
about whether Mark has a higher BMI than John.*/

//bmi answer 1:
const markHigherBMI1 = bmiMark1 > bmiJohn1;
console.log(bmiMark1, bmiJohn1, markHigherBMI1);
//bmi answer 2:
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(bmiMark2, bmiJohn2, markHigherBMI2);

////////////////////////////////////
// Strings and Template Literals

/* 1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

////////////////////////////////////
// Taking Decisions: if / else Statements

/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original 
*/

//population = 130;
if (population > 33) {
  console.log(`${country}´s population is above average.`);
} else {
  console.log(`${country}´s population ${33 - population} below average.`);
}

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

if (bmiMark1 > bmiJohn1) {
  console.log(`Mark´s BMI (${bmiMark1}) is higher than John´s (${bmiJohn1}).`);
} else {
  console.log(`John´s BMI (${bmiJohn1}) is higher than Mark (${bmiMark1}).`);
}

////////////////////////////////////
// Type Conversion and Coercion

/*
1. Predict the result of these 5 operations without executing them:
'9' - '5'; 
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2; 
2. Execute the operations to check if you were right
'9' - '5' = 4
'19' - '13' + '17' = 617
'19' - '13' + 17 = 23
'123' < 57 = false
5 + 6 + '4' + 9 - 4 - 2 = 1143
*/
