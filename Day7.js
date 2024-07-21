// Activity 1
// Task 1
const book = {
  title: "Atomic Habits",
  author: "James clear",
  year: 2018,
};
console.log(book);

// Task 2
console.log(book.title);
console.log(book["author"]);

// Activity 2
// Task 3
book.method1 = function () {
  console.log(
    `The Name of the Book is ${this.title} and the author is ${this.author}`
  );
};
console.log(book.method1());

// Task 4
book.method2 = function (year) {
  this.year = year;
  console.log(book);
};
console.log(book.method2(2020));

// Activity 3
// Task 5
const library = {
  name: "My library",
  price: 299,
  books: [
    {
      title: "power of your subconsiuos mind",
      author: "Dr. joseph murphy",
    },
    {
      title: "Rich Dad poor Dad",
      author: "Robert Kiyosaki",
    },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ],
};

console.log(library);

// Task 6
console.log(library.name);
console.log(library.price);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);
for (let i = 0; i < library.books.length; i++) {
  const element = library.books[i].title;
  console.log(element);
}

// Activity 4
// Task 7
book.method3 = function () {
  return `${this.title} by ${this.author}`;
};
console.log(book.method3());

// Activity 5
// Task 8
for (const key in book) {
  console.log(key);
  console.log(book[key]);
}

// Task 9
const key = Object.keys(book);
const value = Object.values(book);
console.log(key);
console.log(value);
