console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookcount = 2;
    this.books = [
      {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
      },
    ];

    this.markRead = this.markRead.bind(this);
    this.adBook = this.addBook.bind(this);
  }
}
