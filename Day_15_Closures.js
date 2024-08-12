//Task01: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let name = "John";
    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}

const myFunc = outerFunction();
myFunc();

//Task02: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
    let counter = 0;

    function increment() {
        counter += 1;
    }
    
    function getCounter() {
        return counter;
    }
    
    return {
        increment,
        getCounter
    };
}

const myCount = createCounter();

myCount.increment();
myCount.increment();

console.log(myCount.getCounter());

myCount.increment();
console.log(myCount.getCounter());

//Task03: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
    let lastId = 0;

    return function generated() {
        lastId += 1;
        return lastId;
    };
}

const myId = createUniqueIdGenerator();

console.log(myId());
console.log(myId());
console.log(myId());

//Task04: Create a closure that captures a user's name and returns a function that greets the user by name.

function fun(){
    let name = 'Shivam';
    function greet(){
        console.log(`Hello ${name}`);
    }
    return greet;
}

const myFunc1 = fun();
myFunc1()

//Task05: Write a loop that create an array of function. Each function should log its index when called. use a closure to ensure each function logs the correct index.

function createFunctionArray() {
    let functions = [];

    for(let i =0; i < 5; i++){
        functions.push(function() {
            console.log(i);
            
        })
    }

    return functions;
}

const funArr = createFunctionArray();

funArr[0]();
funArr[1]();
funArr[2]();
funArr[3]();
funArr[4]();

//Task06: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createItemManager() {
    let items = [];

    function addItem(item) {
        items.push(item);
        console.log(`${item} added to the collection.`);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if(index !== -1){
            items.splice(index, 1);
            console.log(`${item} removed from the collection.`);
        }else {
            console.log(`${item} not found in the collection.`);
        }
    }

    function listItem() {
        if(items.length >0) {
            console.log("Items in the collection:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }else {
            console.log("The collection is empty.");
        }
    }

    return {
        addItem,
        removeItem,
        listItem
    };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");       
itemManager.addItem("Banana");      
itemManager.addItem("Orange");     

itemManager.listItem();

itemManager.removeItem("Banana");   
itemManager.listItem();

itemManager.removeItem("Grapes"); 

//Task07: Write a function that memoizes the result of another function. Use a closure to store the result of previous component.

function memoizes(fn) {
    // Cache object to store previous results
    const cache = {};

    return function(...args){
        // Create a unique key based on the function's arguments
        const key = JSON.stringify(args);

        // If the result is in the cache, return it
        if(cache[key]) {
            console.log("Returning cached result");
            return cache[key];
        }

         // Otherwise, compute the result and store it in the cache
        const result = fn(...args);
        cache[key] = result;

        return result;
    }
}


// Example function to be memoized
function slowFunction(num) {
    console.log('Computing result...');
    return num * 2;
}

// Memoizing the slow function
const memoized = memoizes(slowFunction);


console.log(memoized(5)); 
console.log(memoized(5)); 
console.log(memoized(10)); 
console.log(memoized(10));

//Task08: Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorial(){
    const cache = {};

    function factorial(n){

        if( n <= 1) return 1;

        if(cache[n]){
            console.log(`Returning cached result for ${n}!`);
            return cache[n];
        }

        console.log(`Computing factorial for ${n}...`);
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }
    return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6));