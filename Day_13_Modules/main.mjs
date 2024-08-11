//Task01: Create a module that exports a function to add two numbers. Import and use this module in another script.

import {add, person } from './add.mjs'

const num = 5;
const num2 = 7;

const result = add(num, num2);

console.log(`The sum of ${num} and ${num2} is ${result}.`);

//Task02: Create a module that exports an object representing a person with properties and methods. Import and use this module in another srcipt.


console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

person.greet();

person.haveBirthday();
person.greet();

//Task03: Create a module that exports multiple function using named exports. Import and use there function in another srcipt.
import {Add, subtract, multiple, divide} from './mathOperation.mjs'


const num3 = 10; 
const num4 = 5;

console.log(`Add: ${Add(num3, num4)}`);
console.log(`Subtract: ${subtract(num3, num4)}`);
console.log(`Multiply: ${multiple(num3, num4)}`);
console.log(`Divide: ${divide(num3, num4)}`);

//Task04: Create a module that exports a single function using default export. Import and use this function in another script.

import formatData from './mathOperation.mjs'

const today = new Date();
console.log(`Today's data is: ${formatData(today)}`);


