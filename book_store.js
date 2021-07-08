/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// The UI class
class User {
  static addBooks() {
    const books = Storage.getBooks();

    books.forEach((book) => User.addBookList(book));
  }

  static addBookList(book) {
    const list = document.querySelector('#book-list');

    const div = document.createElement('div');

    div.innerHTML = `
      <h5>${book.title}</h5>
      <h5>${book.author}</h5>
      <button class="remove">Remove</button>
    `;

    list.appendChild(div);
  }

  static removeBook(target) {
    if (target.classList.contains('remove')) {
      target.parentElement.parentElement.remove();
    }
  }

  static removeInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Set the storage class
class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static storeBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(data) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (book.data === data) {
        book.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', User.addBooks);

document.querySelector('#form-input').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  User.addBookList(book);

  Storage.storeBook(book);

  User.removeInputs();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  User.removeBook(e.target);

  // Remove book from localStorage after delete
});
