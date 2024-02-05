// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the first element from the last element
let ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference);

// Add a new age to the array
ages.push(40);

 // Repeat the subtraction with the new array length
ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference);

// Use a loop to calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

// Concatenate all names separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + ' ';
}
console.log(allNames.trim());

// Access the last element of an array
let lastElement = ages[ages.length - 1];
console.log(lastElement);

// Access the first element of an array
let firstElement = ages[0];
console.log(firstElement);

// Create a new array called nameLengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Calculate the sum of all elements in nameLengths
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);

// Function to concatenate a word n times
function concatenateWord(word, n) {
  return word.repeat(n);
}
console.log(concatenateWord('Hello', 3));

// Function to return a full name
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var firstName = ('Jane');
var lastName = ('Doe');
console.log(fullName('Jane', 'Doe'));

// Function to check if sum of numbers in array is greater than 100
function isSumGreaterThan100(numbers) {
  return numbers.reduce((sum, num) => sum + num) > 100;
}
console.log(isSumGreaterThan100([30, 31, 40]));

// Function to calculate the average of numbers in array
function calculateAverage(numbers) {
  return numbers.reduce((sum, num) => sum + num) / numbers.length;
}
console.log(calculateAverage([10, 20, 30]));

// Function to compare averages of two arrays
function compareAverages(arr1, arr2) {
  return calculateAverage(arr1) > calculateAverage(arr2);
}
console.log(compareAverages([10, 20, 30], [5, 15, 25]));

// Function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 15));

// Function to calculate the area of a rectangle
// Takes two parameters: length and width
// Returns the calculated area
function calculateRectangleArea(length, width) {
    return length * width;
}

let area = calculateRectangleArea(10, 15);
console.log("The area of the rectangle is " + area);
