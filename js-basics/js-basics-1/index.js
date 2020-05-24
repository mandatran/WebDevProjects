// This is my first JavaScript Code
console.log('Hello World');

let name = 'Mosh';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitiveo

let firstName = 'Mosh', lastName = 'Hamedani';
// Best practice
let myFirstName = "Manda";
let myLastName = 'Tran';

// Const variables
const myName = 'Manda Tran';

// Data Types
let name1 = 'Mosh'; // String literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName1 = undefined;
let selectedColor = null;

// Objects
let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation - shorter, more concise
person.name = 'John';
// Bracket Notation
person['name'] = 'Mary';
// Bracket Notation allows you to use variables to access
let selection = 'name';
person[selection] = 'Mary';

console.log(person);
console.log(person.name);


let selectedColors = ['red', 'blue'];
// Arrays are dynamic, can store different types
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);

// Functions
function greet() {
    console.log('Hello World');
}
// Performing a task
function greetName(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
//Calculating a value
function square(number) {
    return number * number;
}

greet();
greetName('John', 'Smith');
let number = square(2);
console.log(number);