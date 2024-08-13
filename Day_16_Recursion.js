//Task01: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if( n <= 1) return 1;

    return n * factorial(n -1);
}

console.log(factorial(15));

//Task02: Write a recursive function to calculate the nth fibonacci number. log the result for a few test cases.

function fibonacci(n) {
    // base case 
    if( n == 0) return 0;
    if( n == 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(10));

//Task03: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
    if( arr.length == 0) return 0;

    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([7, 14, 21, 28]));

//Task04: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxElement(arr){

    if( arr.length == 1) return arr[0];

    const maxOfRest = maxElement(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(maxElement([7, 14, 21, 28]));
console.log(maxElement([-1, -2, -3, -4, -5]));

//Task05: Write a recursice function to reverse a string. Log the result for a few test cases.

function reverseString(str){

    if( str.length == 1) return str;

return str[str.length - 1] + reverseString(str.slice(0, -1));

}

console.log(reverseString("recursion"));
console.log(reverseString("JavaScript")); 

//Task06: Write a recursive function to check if a string is palindrome. Log the result for a few test cases.

function isPalindrome(str){
    if( str.length <= 1) return true;

    if(str[0] !== str[str.length -1]){
        return false;
    }

    return isPalindrome(str.slice(1, -1));
}                                           

console.log(isPalindrome("mom"));


