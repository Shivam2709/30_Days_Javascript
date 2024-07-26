// ES6+ Features

// Global Varialbes

var name = "Shivam";
var age = 21;

//Task01: Use template literals to create a string that includes variable for a person's name and age.
console.log("Answer 01");
console.log(`Name is ${name} and age is ${age}`);

// Task02: Create a multi line string using template literals and log it to the console.
console.log("Answer 02");
const multiLineString = `
 This is a multi-line string.
 It can span multiple lines without any issues.
 You can also include variables, like this one: ${new Date().toLocaleDateString()}
 `;

console.log(multiLineString);

//Task03: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log("Answer 03");

const arr = [23, 55, 677, 88, 54, 56];

const [a, b] = arr;

console.log(`values of A is ${a} and value of B is ${b}`);

//Task04: Use object destructuring to extract the title and author from an book object and log them to the console.
console.log("Answer 04");

const book = {
  title: "Computer science",
  author: "Shivam",
  Description: "This is nice book",
  year: 1998
}

const getSomeDetails = ({ title, author }) => {
  console.log(`Title of the book is ${title} and author is ${author}`);
}

getSomeDetails(book);

//Task05: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.


// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
console.log("Answer 05");

const arr2 = [...arr, 5, 6, 23, 56];
console.log(arr2);

const book2 = {
  ...book, // copy all element of object book into this object book2.
  totalPages: 500
}

console.log(book2);

//Task06: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log("Answer 06");

function sum(...args) { // The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

//Task07: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without thr second parameter.
console.log("Answer 07");

function Product(num, num2 = 1) {
  return num * num2;
}

console.log(Product(5)); // without second parameter
console.log(Product(6, 10)); // with secpond parameter.

//Task08: Use enhanced object literals to crete an object with methods and properties, and log the object to the console.
console.log("Answer 08");

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  updateAge(newAge) {
    this.age = newAge;
  }
};

console.log(person);
person.greet();
person.updateAge(31);
console.log(`After updating age: ${person.age}`);

//Task09: Create an object with computed property names based on variables and log the object to the console.
console.log("Answer 09");

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const Aadmi = {
  [key1]: 'John',
  [key2]: 'Doe',
  [key3]: 25
};

console.log(Aadmi);



