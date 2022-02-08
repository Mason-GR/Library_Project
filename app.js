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
    this.addBook = this.addBook.bind(this);
  }

  markRead(checkbox) {
    for (let book of Library.books) {
      if (book.id == checkbox.id) {
        console.log(checkbox);
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }

  addBook() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authInput").value;
    let read = document.getElementById("readCheckbox").checked;

    let newBook = new Book(this.bookCount, title, author, read);
    this.books.push(newBook);
  }
}
