console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

// 1. Create a class Book that has the following properties:
//    • Title (string)
//    • Author (string)
//    • Read (boolean)
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

/* 2. Create a class Library that has the following properties and methods:
      • Book count (number)
      • Books (array of books)
      • markRead method */
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

    let newRow = document.createElement("tr");
    newRow.setAttribute("data-id", this.bookCount);

    let td1 = document.createElement("td");
    td1.textContent = newBook.title;

    let td2 = document.createElement("td");
    td2.textContent = newBook.author;

    let td3 = document.createElement("td");
    let ckBox = document.createElement("input");
    ckBox.id = this.bookCount;
    ckBox.type = "checkbox";
    ckBox.checked = newBook.read;
    ckBox.disabled = newBook.read;
    ckBox.addEventListener("click", () => Library.markRead(ckBox));
    td3.appendChild(ckBox);

    let td4 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove Book";
    deleteButton.classList.add("removeBtn");

    deleteButton.addEventListener("click", (event) => {
      const button = event.target;
      const row = button.parentNode.parentNode;
      const id = row.getAttribute("data-id");
      library.removeBook(id);
    });

    td4.appendChild(deleteButton);

    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    let tableBody = document.querySelector("tbody");
    tableBody.appendChild(newRow);

    this.bookCount++;
  }

  removeBook(id) {
    var row = document.querySelectorAll(`[data-id="${id}"]`)[0];
    row.remove();
  }
}

let library = new Library();

let btn = document
  .getElementById("addButton")
  .addEventListener("click", () =>
    library.addBook(library.books, library.bookCount)
  );

document
  .getElementsByClassName("removeBtn")[0]
  .addEventListener("click", (event) => {
    const button = event.target;
    const row = button.parentNode.parentNode;
    const id = row.getAttribute("data-id");
    library.removeBook(id);
  });
