// Error Handling

//Task01: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError(){
    // Intentionally throw an error
    throw new Error('This is an error');
}
function errorHandle() {
    try{
        // Call the function that throws an error
        throwError();
    }catch(err){
        // Handle the error and log a message to the console
        console.log("An error occurred", err.message);
    }
}

// Call the function to see the error handling in action
// errorHandle();

//Task02: Create a function that divides two numbers and throws an error if the denominator is zero. Use try-catch block to-handle this error.

function zeroDenominator(num, denominator) {
   if(denominator === 0) {
    throw new Error("Cannot divide by zero");
   }
   return num / denominator;
}

function handleDivision(num, denominator){
    try {
        const result = zeroDenominator(num, denominator);
        console.log(`Result: ${result}`);
    }catch(err){
        console.log("An error occurred", err.message);
    }
}

//handleDivision(10, 2);
//handleDivision(10, 0);

//Task03: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch and finally block to observe the execution flow.

function executeWithFinally(){
    try{
        console.log("In the try block.");

        // Intentionally throw an error
        throw new Error("This is an intentional error");

         // This line will not be executed because an error was thrown
        console.log("This will not be logged.");
    }catch(err){
        console.log("In the catch block.");
        console.log("An error occurred", err.message);
    } finally{
        console.log("In the finally block.");
    }
}

// Call the function to see the execution flow
//executeWithFinally();

//Task04: Create a custom error class that extends the build-in Error class. Thrown an instance of this custom error in a function and handle it using a try-catch block.

// Define a custom error class
class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

function CustomErrorFunction() {
    // Intentionally throw an instance of the custom error
    throw new CustomError("This is a custom error");
}

function handleCustomerError() {
    try {
        // Call the function that throws the custom error
        CustomErrorFunction();
    } catch(err){
        if(err instanceof CustomError){
             // Handle the custom error
            console.log("A custom error occurred:", err.message);
        } else {
            // Handle other types of errors
            console.log("An unexpected error occurred:", err.message);
        }
    }
}

// Call the function to see the custom error handling in action.
// handleCustomerError();

//Task05: Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.

class validateError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError"
    }
}

function validateInput(input) {
    if(input.trim() === ""){
        throw new validateError("Input cannot be empty");
    }
    console.log("Input is valid:", input);
}

function handleValidation(input) {
    try {
        validateInput(input);
    }catch(err){
        if(err instanceof validateError){
            console.log("Validation error occurred:", err.message);
        }else {
            console.log("An unexpected error occurred", err.message);
        }
    }
}

handleValidation("Hello world");
handleValidation("");

//Task06: 