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
let halfPopulation = population / 2;

/* 2. Increase the population of your country by 1 and log the result to the console */
console.log("Half population of Norway minus one: ", halfPopulation - 1);

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

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);
