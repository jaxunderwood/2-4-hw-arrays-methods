const fruits = [
  "apples",
  "bananas",
  "cherries",
  "dates",
  "elderberries",
  "figs",
  "grapes",
];

// 1
// How many elements are in the fruits array?
console.log(fruits.length);//7
// 2
// Retrieve the first and last elements of fruits array

const colors = ["red", "green", "blue", "black", "white"];
console.log(colors.at(0));
console.log(colors[colors.length-1]);
// 3
// Retriever the first and the second elements from the colors array
// Hint: Use array destructuring
let [color1, color2,,,] = colors;

console.log(color1, color2);


// 4
// Change the first element of colors array to orange
colors[0]= "orange";
console.log(colors);
// 5
// Change the third element of colors array to teal
colors[2] =  "teal";
console.log(colors);
// 6
// Combine fruits array with colors array and assign it to a new array called colorfulFruits
// Hint: Use spread operator and then use concat operator
fruitColor = fruits.concat(colors);
console.log(fruitColor);
// 7
// Remove the first element from the fruits array
fruits.shift();
console.log(fruits);

// 8
// Remove the last element from the fruits array
fruits.pop();
console.log(fruits);
// 9
// Add your favorite fruit to the beginning of the fruits array
fruits.unshift("mango");
console.log(fruits);
// 10
// Add your second favorite fruit to the end of the fruits array

const numbers = [1, 2, 3, 2, 4, 2, 5];

// 11
// Find the index of the first occurrence of 2 in the numbers array
console.log(numbers.indexOf(2));//1

// 12
// Find the index of the last occurrence of 2 in the numbers array
console.log(numbers.lastIndexOf(2));//5

// 13
// Check if numbers array contains 3
console.log(numbers.includes(3));//true

// 14
// Check if numbers array contains 9
console.log(numbers.includes(9));//false

const greetings = "Hello, Cohort 2024!";

// 15
// How can you split the greetings string into an array of words and the join the words WITHOUT the comma?
let parts = greetings.split(",");

let [salutation, cohort] = parts;

console.log(salutation.concat(cohort));

//Use the .split(), and array destructing
