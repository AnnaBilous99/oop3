class User {
  firstName;
  lastName;
  city;
  borrowedBooks;
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowedBooks = [];
  }

  addBooks(book) {
    if (book.canBorrow) {
      this.borrowedBooks.push(book);
    }
  }
}

let userNumber1 = new User("Eli", "Grinberg", "Jerusalem");
let userNumber2 = new User("Misha", "Vais", "Tel Aviv");
let userNumber3 = new User("May", "Cohen", "Haifa");

class WeeklyReport {
  constructor() {
    this.allTheUsers = [];
  }

  addUserToAllTheUsers(addUser) {
    this.allTheUsers.push(addUser);
  }

  print() {
    this.allTheUsers.forEach((user) => {
      console.log(
        "The user " +
          user.firstName +
          " " +
          user.lastName +
          " from " +
          user.city +
          " borrowed the following books: "
      );
      user.borrowedBooks.forEach((book) => {
        console.log(book.title);
      });
    });
  }
}

let report1 = new WeeklyReport();
report1.addUserToAllTheUsers(userNumber1);
report1.addUserToAllTheUsers(userNumber2);
report1.addUserToAllTheUsers(userNumber3);

class Book {
  constructor(title, author, canBorrow) {
    this.title = title;
    this.author = author;
    this.canBorrow = canBorrow;
  }
}

let book1 = new Book("The mind of the Leader", "Rasmus Hougert", true);
let book2 = new Book(" The art of reading minds", "Henrik Fexeus", true);
let book3 = new Book(
  "Harry Potter and the Philosopher's Stone",
  " J. K. Rowling",
  false
);
let book4 = new Book("Surrounded by idiots", "Thomas Erikson", true);
let book5 = new Book("How to talk to anyone", "Leil Lowndes", true);
let book6 = new Book("The silent patient", "Alex Michaelides", false);
let book7 = new Book("Rich dad,poor dad", "Robert Kiyosaki", true);
let book8 = new Book("The Psychology of Money", "Morgan Housel", true);
let book9 = new Book("Atomic Habits", "James Clear", false);

userNumber1.addBooks(book1);
userNumber1.addBooks(book2);
userNumber1.addBooks(book3);
userNumber2.addBooks(book4);
userNumber2.addBooks(book5);
userNumber2.addBooks(book6);
userNumber3.addBooks(book7);
userNumber3.addBooks(book8);
userNumber3.addBooks(book9);

report1.print();
