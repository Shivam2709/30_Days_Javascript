//Task01: Create a module that exports a function to add two numbers. Import and use this module in another script.

export function add(a, b) {
    return a + b;
}

export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};


