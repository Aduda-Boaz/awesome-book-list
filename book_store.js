/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const titles = document.getElementById('Title');
const authors = document.getElementById('Author');
const listB = document.getElementById('book-list');
const button = document.getElementById('btn');
const libros = document.getElementById('Libreria');
const remove = document.getElementById('btn-remove');
let books = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

if (localStorage.getItem('Libros') !== null) {
  JSON.parse(localStorage.getItem('Libros')).forEach((element) => {
    books.push(element);
  });
} else {
  books = [];
}
class Library {
  popHtml(books) {
    this.books = books;
    listB.innerHTML = '';
    for (let e = 0; e < books.length; e += 1) {
      listB.innerHTML += `  <li class="book-title">${books[e].title}</li>
      <li class="book-author">${books[e].author}</li>
      <button type="button" id="btn-remove" onclick="a.bookRemove(${e}, a)">Remove</button>`;
    }
  }

  bookUpdate(x) {
    this.x = x;
    books.push(x);
    localStorage.setItem('Libros', JSON.stringify(books));
    return books;
  }

  bookRemove(e, j) {
    this.e = e;
    this.j = j;
    books.splice(e, 1);
    localStorage.setItem('Libros', JSON.stringify(books));
    j.popHtml(books);
  }
}

const a = new Library();

a.popHtml(books);
button.addEventListener('click', () => {
  const bookList = new Book(titles.value, authors.value);
  a.bookUpdate(bookList);
  a.popHtml(books);
  document.getElementById('Libreria').reset();
});
