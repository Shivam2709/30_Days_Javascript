// LOOPS:-

//Task01: Write a program to print numbers from 1 to 10 using a for loop.

console.log("Task01: Output");
let s = "";
for (let i = 1; i <= 10; i++) {
    s += i.toString();
    if (i != 10) {
        s += ",";
    }
}
console.log(s);

//Task02: Write a program to print the multiplication table of 5 using a for loop.

console.log("Task02: Output");
let num = 5;
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(num + "*" + i + "=" + result);
}

//Task03: Write a program to calculate the sum of number from 1 to 10 using a while loop.

console.log("Task03: Output");
let result = 0;
let n = 1;
while (n < 11) {
    result += n;
    n++;
}
console.log(result);

//Task04: Write a program to print numbers from 10 to 1 using a while loop.

console.log("Task04: Output");
let num1 = "";
let i = 10;
while (i > 0) {
    num1 += i.toString();
    if (i != 1)
        num1 += ","
    i--;
}
console.log(num1);

//Task05: Write a program to print number from 1 to 5 using a do...while loop.

console.log("Task05: Output");
let x = 1;
do {
    console.log(x);
    x++;
} while (x < 6);

//Task06: Write a program to calculate the factorial of a number using a do...while loop.

console.log("Task06: Output");
let ele = 5;
let ans = 1;
do {
    ans *= ele;
    ele--;

} while (ele >= 1)
console.log(ans);

//Task07: Write a program to print a pattern using nested for loops.

console.log("Task07: Output");
for (let i = 1; i <= 5; i++) {
    let star = ' ';
    for (let j = 1; j <= i; j++) {
        star += "*"
    }
    console.log(star);
}

//Task08: Write a program to print number from 1 to 10, but skip the number 5 using the continue statement.

console.log("Task08: Output");
for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue;
    console.log(i);
}

//Task09: Write a program to print number from 1 to 10, but stop the loop when the number is 7 using the break statement.

console.log("Task09: Output");
for (let i = 1; i <= 10; i++) {
    if (i == 8)
        break;
    console.log(i);
}