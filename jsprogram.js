document.write('hi cherry')
a = 'hello';
b = new String('hello');

console.log(a);
console.log(b); 

console.log(typeof a); 
console.log(typeof b); 
// program to reverse

function reverseString(str) {

   
    var arrayStrings = str.split("");

    var reverseArray = arrayStrings.reverse();
 
  var joinArray = reverseArray.join("");
    
   
    return joinArray;
}
 

var string = prompt('Enter a string: ');

var result = reverseString(string);
console.log(result);
//#2 program to replace all occurrence of a string

var string = 'Mr Red has a red house and a red car';

var regex = /red/gi;

var newText = string.replace(regex, 'blue');
console.log(newText);
// #3 program to replace all occurrence of a string

var string = 'Mr red has a red house and a red car';

var result = string.split('red').join('blue');

console.log(result);
// #4 program to replace a character of a string

var string = 'Mr Red has a red house and a red car';

var newText = string.replace('red', 'blue');
console.log(newText);
// #5 program to replace a character of a string
var string = 'Mr Red has a red house and a red car';

var regex = /red/g;

var newText = string.replace(regex, 'blue');
console.log(newText);
// #6 program to trim a string

var string = '      Hello World       ';

var result = string.trim();

console.log(result);
 // #7 program to trim a string

var string = '      Hello World       ';

var result = string.split(' ').join('');

console.log(result);
// #8 program to create JavaScript object using object literal
var person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); 

console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
 // #9 program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
// #10 program to remove a property from an object

// creating an object
var student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);
//#11 program to count the number of keys/properties in an object

var student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
var result = Object.keys(student).length;

console.log(result);
//#12 program to count the number of keys/properties in an object using for in

var student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

for(let key in student) {
    ++count;
}

console.log(count);
// #13 program to merge property of two objects using object.assign

var person = {
    name: 'Jack',
    age:26
}

var student = {
    gender: 'male'
}

var newObj = Object.assign(person, student);

console.log(newObj);
//#14  program to merge property of two objects using spread operator

var person = {
    name: 'Jack',
    age:26
}

var student = {
    gender: 'male'
}

var newObj = {...person, ...student};

console.log(newObj);
// #15 program to clone the object
var person = {
    name: 'John',
    age: 21,
}

var clonePerson = { ... person}

console.log(clonePerson);

clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);
//  #16program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];
    let index = 3;
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();
// #17 program to remove duplicate value from an array

function getUnique(arr){

    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

getUnique(array);
// #18program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){
    var arr =  [...arr1, ...arr2];

    var uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

var array1 = [1, 2, 3];
var array2 = [2, 3, 5]
getUniqueAfterMerge(array1, array2);
// #19 program to remove item from an array

function removeItemFromArray(array, n) {
    var index = array.indexOf(n);
    if(index > -1) {
        array.splice(index, 1);
    }
    return array;
}

var result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);
// #20 program to add element to an array

function addElement(arr) {

    arr.unshift(4);
    
    console.log(arr);
}

var array = [1, 2, 3];
addElement(array);
 // #21 program to add element to an array

function addElement(arr) {


    arr = [4].concat(arr);
    
    console.log(arr);
}

var array = [1, 2, 3];

addElement(array);
// #22 program to append an object to an array

function insertObject(arr, obj) {

   
    arr.push(obj);
    
    console.log(arr);
}

var array = [1, 2, 3];


var object = {x: 12, y: 8};

insertObject(array, object);
// #23 program to append an object to an array using spread operator

function insertObject(arr, obj) {

  
    arr = [...arr, object];
    
    console.log(arr);
}

var array = [1, 2, 3];

var object = {x: 12, y: 8};
insertObject(array, object);
 // #24 program to check if an object is an array

function checkObject(arr) {

    var result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

const array = [1, 2, 3];

checkObject(array);
 //# 25program to empty an array

function emptyArray(arr) {
    arr = [];
    
    return arr;
}

var array = [1, 2 ,3];
console.log(array);

const result = emptyArray(array);
console.log(result);
//#26 program to empty an array

function emptyArray(arr) {
    arr.length = 0;
    
    return arr;
}

var array = [1, 2 ,3];
console.log(array);

var result = emptyArray(array);
console.log(result);
 // #27program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        var tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var chunk = 2;
splitIntoChunk(array, chunk);
// #28 js program to perform string comparison

var string1 = 'JavaScript Program';
const string2 = 'javascript program';
var  result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
 // #29generating  a random number
const a = Math.random();
console.log(a);
//#30 program to write to console

// passing number 
console.log(8);

// passing string
console.log('hello');

// passing variable
const x = 'hello';
console.log(x);

// passing function
function sayName() {
    return 'Hello John';
}
console.log(sayName());

// passing string and a variable
const name = 'John';
console.log('Hello ' + name);

// passing object
let obj = {
    name: 'John',
    age: 28
}
console.log(obj);

// #31 program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}
//#32 
// program to check if a variable is undefined or null

function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

//#33
// program to check if a variable is undefined or null

function checkVariable(variable) {

    if( typeof variable === 'undefined' || variable === null ) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

//#34
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
//35
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

//36

// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
//37
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
//38
/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
//39
// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
//40
// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
//41
// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);
//42
// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

// display the result
console.log("The largest number is " + largest);
//43
let num = 57.77583;

console.log(num.toFixed()); // 58-> rounded off, no fractional part
console.log(num.toFixed(1)); // 57.8
console.log(num.toFixed(7)); // 57.7758300 -> Added zeros
console.log(num.toFixed(2)); // 57.78

console.log((5.68e20).toFixed(2)); // 568000000000000000000.00
console.log((1.23e-10).toFixed(2)); // 0.00
console.log((-2.34).toFixed(1)); // -2.3

//44 type of string
const str1 = 'Peter';
console.log(typeof str1); // string

const str2 = '3';
console.log(typeof str2); // string

const str3 = 'true';
console.log(typeof str3); // string

//45 type of for number
const number1 = 3;
console.log(typeof number1); // number

const number2 = 3.433;
console.log(typeof number2); // number

const number3 = 3e5
console.log(typeof number3); // number

const number4 = 3/0;
console.log(typeof number4); // number
//46 type of big int
const bigInt1 = 900719925124740998n;
console.log(typeof bigInt1); // bigint

const bigInt2 = 1n;
console.log(typeof bigInt2); // bigint

//47 type of boolean 
const boolean1 = true;
console.log(typeof boolean1); // boolean

const boolean2 = false;
console.log(typeof boolean2); // boolean

//48 type of for undefined
let variableName1;
console.log(typeof variableName1); // undefined

let variableName2 = undefined;
console.log(typeof variableName2); // undefined
//49 typeof for null
const name = null;
console.log(typeof name); // object

console.log(typeof null); // object

//50 type of for symbol

const symbol1 = Symbol();
console.log(typeof symbol1); // symbol

const symbol2 = Symbol('hello');
console.log(typeof symbol2); // symbol

//51 type of object
let obj1 = {};
console.log(typeof obj1); // object

let obj2 = new String();
console.log(typeof obj2); // object

let obj3 = [1, 3, 5, 8];
console.log(typeof obj3); // object

//52 type of for function 
let func = function () {};
console.log(typeof func); // function

// constructor function
console.log(typeof String); // function

console.log(typeof Number); // function

console.log(typeof Boolean); // function

//53 

// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}

//54
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);

//55 replace all

const message = "ball bat";

// replace all occurrence of b with c
let result = message.replaceAll('b', 'c');
console.log(result);

//56 using search
const string = "I love to write JavaScript programs";

let re = /[a-z]/;
let index = string.search(re);
console.log(index); // 2 -> matches 'l'

let re1 = /J[a-z]*/i;
let index1 = string.search(re1);
console.log(index1); // 16 -> matches 'JavaScript'

let re2 = /[0-9]/;
let index2 = string.search(re2);
console.log(index2); // -1 -> No digit match

//57 string match

const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result = message.match(exp);
console.log(result);
 
//58 using last index of 

var str = "JavaScript is the world's most misunderstood programming language.";

// lastIndexOf() returns the last occurance
var index1 = str.lastIndexOf("language");
console.log(index1); // 57

var index2 = str.lastIndexOf("p");
console.log(index2); // 45

// second argument specifies the search's start index
var index3 = str.lastIndexOf("p", 44);
console.log(index3); // 8

// lastIndexOf returns -1 if not found
var index4 = str.lastIndexOf("Python");
console.log(index4); // -1


//59 using includes

let languages = ["JavaScript", "Java", "C", "C++", "Python", "Lua"];

let check = languages.includes("Java");
console.log(check); // true

// case sensitive
let check1 = languages.includes("java");
console.log(check1); // false

// second argument specifies position to start at
let check2 = languages.includes("Java", 2);
console.log(check2); // false

// negative argument starts count from backwards
// start searching from third-to-last element
let check3 = languages.includes("Java", -3);
console.log(check3); // false

let check4 = languages.includes("Ruby");
console.log(check4); // false


//60 flat method

const arr1 = [1, [2, 3, 4], 5];
const flattened1 = arr1.flat();
console.log(flattened1); // [ 1, 2, 3, 4, 5 ]

const arr2 = [1, 2, [3, 4, [5, 6]]];

const flattened2 = arr2.flat();
console.log(flattened2); // [1, 2, 3, 4, [5, 6]]

const flattened3 = arr2.flat(2);
console.log(flattened3); //  [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flattened4 = arr4.flat(Infinity);
console.log(flattened4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// flat() removes holes
const numArr = [1, , 3];
console.log(numArr.flat()); // [ 1, 3 ]
