// If-Else Statements

// Task1: Write a program to check a number is positive, negative and zero, and log the result to the console.

let num = 0;

if(num > 0){
    console.log("Numper is positive number: ", num);
}else if(num < 0) {
    console.log("Numper is Negative number: ", num);
}else {
    console.log("Numper is Zero: ", num);
}

// Task2: Write a program to check if a person is eligible to vote(age >= 18) and log the result to the consile.


let age = 87;

if (age >= 18){
    console.log("You are eligible to vote in election");
}else {
    console.log("Sorry, You are not eligible to vote in election!");
}

// Task3: Write a program to find the largest of three number using nested if-else statement.

let a = 59; b = 7;  c = 13;

if(a >= b) {
    if(a >= c){
        console.log("Largest Number is: ", a);
    }else {
        console.log("Largest Number is: ", c);
    }
}else {
    if(b >= c){
        console.log("Largest Number is: ", b);
    }else {
        console.log("Largest Number is: ", c);
    }
}

// Task4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.

    let day;
    switch(new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thrusday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Enter Number in between 0 to 6";
            break;
    }
    console.log("Day", day);

// Task5: Write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks =27;
let grade;

switch(true){
    case(marks <= 100 && marks >= 75.00):
        grade = "A"
        break;
    case(marks <=74.00 && marks >= 60.00):
        grade = "B"
        break;
    case(marks<= 59.00 && marks >= 50.00):
       grade = "C"
       break;
    case(marks <= 49.00 && marks >= 35.00):
        grade = "D"
        break;
    default:
        grade = "F";
        break;
}

console.log(`The grade for a score of ${marks} is ${grade}`);

// Task6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num1 = 221;

const result = (num1 % 2 === 0)? 'even': 'odd';
console.log(result);


// Task7: Write a program to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let isLeap = false;
let year = 2000;

if(year % 4 === 0) {
    if(year % 100 !== 0 || year % 400 == 0){
        isLeap = true;
    }
}

console.log(`${year} is ${isLeap ? '' : 'not '}a leap year.`);

