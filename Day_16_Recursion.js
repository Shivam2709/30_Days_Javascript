//Task01: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if( n <= 1) return 1;

    return n * factorial(n -1);
}

console.log("--------- 1 --------------");

console.log(factorial(15));

//Task02: Write a recursive function to calculate the nth fibonacci number. log the result for a few test cases.

function fibonacci(n) {
    // base case 
    if( n == 0) return 0;
    if( n == 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("--------- 2 --------------");
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
console.log("--------- 3 --------------");
console.log(sumArray([7, 14, 21, 28]));

//Task04: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxElement(arr){

    if( arr.length == 1) return arr[0];

    const maxOfRest = maxElement(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
console.log("--------- 4 --------------");

console.log(maxElement([7, 14, 21, 28]));
console.log(maxElement([-1, -2, -3, -4, -5]));

//Task05: Write a recursice function to reverse a string. Log the result for a few test cases.

function reverseString(str){

    if( str.length == 1) return str;

return str[str.length - 1] + reverseString(str.slice(0, -1));

}
console.log("--------- 5 --------------");

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
console.log("--------- 6 --------------");
console.log(isPalindrome("mom"));

//Task07: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if(left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) /2);

    if(arr[mid] === target) {
        return mid;
    }

    if(target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, right);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const target1 = 7;
const target2 = 19;
const target3 = 2;

console.log("--------- 7 --------------");
console.log(`Index of ${target1}: ${binarySearch(sortedArray, target1)}`)
console.log(`Index of ${target2}: ${binarySearch(sortedArray, target2)}`); 
console.log(`Index of ${target3}: ${binarySearch(sortedArray, target3)}`); 

//Task08: write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurance(arr, target, sI = 0){
    if(sI >= arr.length){
        return 0;
    }

    const match = (arr[sI] === target) ? 1: 0;

    return match + countOccurance(arr, target, sI+1);
}
console.log("--------- 8 --------------");
console.log(countOccurance([1, 2, 3, 4, 2, 2, 5], 2)); 
console.log(countOccurance([1, 2, 3, 4, 5], 6));        
console.log(countOccurance([7, 7, 7, 7, 7], 7));       
console.log(countOccurance([], 1));                    
console.log(countOccurance([1, 2, 3, 4, 5], 3));

//Task09: Write a recursive function to perform an in-order traversal of a  binary tree. log the nodes as they are visited.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {

    if(node === null) return;

    inOrderTraversal(node.left);

    console.log(node.left);

    inOrderTraversal(node.right);
    
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left= new TreeNode(8);
root.left.left.right= new TreeNode(9);

console.log("--------- 9 --------------");
inOrderTraversal(root);

//Task10: Write a recursive function to calculate the depth of a binary tree. log the result for a few test cases.

class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {

    if(node === null) {
        return 0;
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

console.log("--------- 10 --------------");

const root1 = new TreeNode1(1);
root1.left = new TreeNode1(2);
root1.right = new TreeNode1(3);
root1.left.left = new TreeNode1(4);
root1.left.right = new TreeNode1(5);
root1.right.left = new TreeNode1(6);
root1.right.right = new TreeNode1(7);
root1.left.left.left= new TreeNode1(8);
root1.left.left.right= new TreeNode1(9);


const root2 = new TreeNode1(1);
root2.left = new TreeNode1(2);
root2.right = new TreeNode1(3);
root2.left.left = new TreeNode1(4);
root2.left.right = new TreeNode1(5);


console.log(calculateDepth(root1));
console.log(calculateDepth(root2));

