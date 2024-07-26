// Arrays:-
Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Global Array.

//Task01, 10, 11: Create an array of number from 1 to 5 and log the array to the console.
Arr.forEach(element => {
    console.log(element);
});

//Task02: Access the first and last element of the array and log them to the console.
console.log(Arr[0]);
console.log(Arr.length);

//Task03: Use the Push method to add a new number to the end of the array and log the updated array.
Arr.push(15);
console.log(Arr);

//Task04: Use the PoP method to remove a last number to the end of the array and log the updated array.
Arr.pop();
console.log(Arr);

//Task05: Use the shift method to remove a first number from array and log the updated array.
Arr.shift();
console.log(Arr);

//Task06: Use the unshift method to add a new number to the beginning of array and log the updated array.

Arr.unshift(50);
console.log(Arr);

//Task07: Use the map method to create a new array where each number is double and log the new array.
const ans = Arr.map((i)=> i* 2); // creates a new array populated with the results.
console.log(ans);

//Task08: Use the filter method to create a new array with only even numbers and log the new array.
const ans2 = Arr.filter((i) => i % 2 == 0); // creates a shallow copy of a portion of a given array,
console.log(ans2);

//Task09: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log(Arr);
const ans3 = Arr.reduce((acc, curr) => acc + curr, 0);
console.log(ans3);

//Task12: Create a two-dimentional arrat(matrix) and log the entire array to the console.
Arr2 = [[0, 1, 2, 3], [4, 5, 6, 7],[8, 9, 0, 0]];
Arr2.forEach(row =>{
    row.forEach(i => {
        console.log(i)
    })
})

//Task13: Access and log a specific element from the two-dimentional array.
let row = 2;
let col = 1;
console.log("answer 13 ", Arr2[row][col]);
