// OBJECTS:-

// Global Object
let book = {
    title: "Computer Science",
    author: "Sanjay Singh",
    year: "1998",
    methodBook: () => {
        console.log(`${book.title} and ${book.author}`);
    },
    updateYear: (year) => {
        book.year = year;
    },
    library: {
        name: "CS library",
        books:[
            {
                title: "Math",
                author: "Jone Deo",
                year: 1988
            }, 
            {
                title: "OS",
                author: "Jone Deo",
                year: 1988
            },
            {
                title: "Networking",
                author: "Jone Deo",
                year: 1988
            },
            {
                title: "IOT",
                author: "Jone Deo",
                year: 1988
            },
            {
                title: "DSA",
                author: "Jone Deo",
                year: 1988
            },
            {
                title: "SDLC",
                author: "Jone Deo",
                year: 1988
            }
        ]
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }

}
//Task01 Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log("Answer 01");
console.log(book);

//Task02: Access and log the title and author properties of the book object.
console.log("Answer 02");
console.log(book.title + " and " +book.author);

//Task03: Add a method to the book object that return a string with the book's title and author, and log the result of calling this method.
console.log("Answer 03");
book.methodBook();

//Task04: Add a method to the book object that takes a parameter(year) and updates the book's year property then log the update object.
console.log("Answer 04");
book.updateYear(5000);
console.log(book);

//Task05: Create a nested object representing a library with properties like name an dbooks an dlog the library object to console.
console.log("Answer 05");
console.log(book.library);

//Task06: Access and log the name of the library and the titles of all the books in the library.
console.log("Answer 06");
let a = '';
book.library.books.forEach(book => {
    a = a + book.title + ",";
})

console.log(`${book.library.name} and title of all books ${a}`);

//Task07: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log("Answer 07");
console.log(book.getTitleAndYear());

//Task08: Use a for..in loop to iterate over the properties of the book object and log each property and its values.
console.log("Answer 08");
for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(element);
    }
}

//Task09: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Answer 09");
console.log(Object.keys(book));
console.log(Object.values(book));