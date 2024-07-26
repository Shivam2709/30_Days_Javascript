// Task1: Declare a variable usng var, assing it a number and log the values to the console.

var num = 5;

// Task2: Declare a variable usng let, assing it a number and log the values to the console.

let num3 = 10;
console.log(num3);

// Task5: Declare a variable using let, assign it an initial value, reassign a new values, and log both values to the console.

num3 = 15;
console.log(num3);

// Task3: Declare a variable usng const, assing it a number and log the values to the console.

const num2 = 15;

// task4: Create variable of different data types (number, string, boolean, Object, array) and log each vRIBle type using typeof operator.

let num1 = 10;
let str = "Shivam";
let isloggin = true;
let obj = {
    name: "Shivam",
    age: 22,
    log: false
};
let arr = [3, 4, ,"shiav", true, obj];

console.log(typeof(num1));
console.log(typeof(str));
console.log(typeof(isloggin));
console.log(typeof(obj));
console.log(typeof(arr));

// Task6: Try reassigning a variable declared with const and observe the error.

const a = 20;
console.log('a', a);

// a = 50;
// console.log("a", a);
/**
  TypeError: Assignment to constant variable.
    at Object.<anonymous> (/config/workspace/30-days-javaScript/Day_01_Variables.js:41:3)
 */

    console.log(obj.age);