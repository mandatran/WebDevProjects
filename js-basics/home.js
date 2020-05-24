console.log('hello');
// alert('hello this is Manda');

// How to write a comment inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// var age = prompt("what is your age?");

// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 5.7;

// Increment num1 by 1
num1 = num1 + 1;
// Increment num1 by 1
num1++;
// Decrement num1 by 1
num1--;

console.log(num1);
// console.log(5 * 10);
// console.log(50 / 10);

// Divide, muliply *, remainder %
console.log(num1 % 5);

// Increment/decrement by any number you want
num1 += 10;
console.log(num1);


/* Functions
   1. Create a function
   2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that takes in a name and says hello followed by your
 * name.
 * 
 * For example:
 * 
 * Name: "Qazi"
 * Return: "Hello Qazi"
 */
function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

// While loops
/*
var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}
*/

// For loops
/*
for (let num = 0; num < 100; num++) {
    console.log(num);
}
*/

// Data types
let yourAge = 18; // number
let yourNmae = 'Bob' // string
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in JavaScript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by comma
console.log(fruit.split('')); // split by characters


// Array
let fruits = ['banana', 'apple', 'orange', 'pineabples'];
fruits = new Array('banana', 'apple', 'orange', 'pineabples');

console.log(fruits[1]);