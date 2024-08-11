//Task05: Create a module that exports multiple constants and function. Imports the entire module as an object in another script and use its properties.

const mathOps = require('./mathOps.js');
console.log("Square root of two:", mathOps.SQUARE_ROOT_TWO);
console.log("Golden Ratio:", mathOps.GOLDEN_RATIO);
console.log("Speed of light(m/s):", mathOps.LIGHT_SPEED);

console.log("Square of 7:", mathOps.square(7));
console.log("Cube of 3:", mathOps.cube(3));
console.log("2 raised to the power of 8:", mathOps.power(2, 8));
console.log("Square root of 25:", mathOps.squareRoot(25));

//Task06: Install a third-party module(e.g., lodash) using npm. Import and use a function from this module in a script.

//Task07: Install a third-party module(e.g., axios) using npm. Import and use this module to make a network request in a script.

//Task08: Use a module bundler like webpack or parcel to bundle multiple javaScript files into a single file. write a script to demonstrate the bundling process.
