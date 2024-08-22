//Task01: Define a class Person with properties name and age, and a methods to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person1 = new Person("John", 30);

console.log(person1.greet());

//Task02: Add a method to the Person class that updates the age property and logs the updated age.

person1.updateAge(35);


