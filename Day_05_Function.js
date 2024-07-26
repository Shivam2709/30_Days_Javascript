// Function:-

//Task01: Write a function to check if a number is even or odd and log the result to the console.
let num = 50; // global variable
let num2 = 15; // global variable
console.log("Output Task01");
function evenOdd(nums) {
    if (num % 2 == 0) {
        console.log(num + " is " + "Even");
    } else {
        console.log(num + " is " + "Odd");
    }
}
evenOdd(num);

//Task02: Write a function to calculate the square of a number and return the result.
console.log("Output Task02");
function Square(num) {
    return num * num;
}

console.log(Square(num));

//Task03: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("Output Task03");
function Max(num, num2) {
    if (num > num2) return num;
    else return num2;
}

console.log(Max(num, num2));

//Task04: Write a function expression to cancatenate two string and return the result.
console.log("Output Task04");
function cancatenateString(str, str2) {
    console.log(str + ' ' + str2);
}

str = 'Shivam';
str2 = 'Kumar'
cancatenateString(str, str2);

//Task05: Write an arrow function to calculate the sum of two number and return the result.
console.log("Output Task05");
const Sum = (num, num2) => num + num2;
console.log(Sum(num, num2));

//Task06: Write an arrow function to check if a string contains specific character and return a boolean values.
console.log("Output Task06");
const containsCharacter = (str, char) => str.includes(char);

// console.log(containsCharacter("Hello World", 'W'));

const containsCharacter2 = (str, char2) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char2) return true;
    }
    return false
}
console.log(containsCharacter("Hello World", 'W'));

//Task07: Write a function that takes two parameters and returns their product. Provide a default values for the second parameter.
console.log("Output Task07");
function Product(num, num2 = 5) {
    return num * num2
}

console.log(Product(num));

//Task08: Write a function that takes a person's name and age and return a greeting message. Provide a default values for the age.
console.log("Output Task08");
function Greeting(name, age = 18) {
    console.log(`Hi ${name} You are ${age} year old.`);
}

Greeting('Shivam')

//Task09: Write a higher-order function that takes a function and a number, and call the function that many times.
console.log("Output Task09");
function HOF(fn, time) {
    for (let i = 0; i < time; i++) {
        fn();
    }
}
const sayHello = () => console.log("hello");

HOF(sayHello, 5);

//Task10: Write a higher-order function that takes two functions and a values, applies the first function to the values, and then applies the second function to the result.
console.log("Output Task10");
const firstApply = (fn1, fn2, value) => (fn2(fn1(value)));

const double = (x) => x * 2;
const Squr = (x) => x * x;

const HOFResult = firstApply(double, Squr, 3);
console.log(HOFResult);