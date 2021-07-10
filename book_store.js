/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const titles = document.getElementById('Title');
const authors = document.getElementById('Author');
const listB = document.getElementById('book-list');
const button = document.getElementById('btn');
const libros = document.getElementById('Libreria');
const remove = document.getElementById('btn-remove');

const btnList = document.getElementById('navList');
const btnNew = document.getElementById('new');
const btnContact = document.getElementById('contact');
const btnlogo = document.getElementById('logo');
const formContainer = document.getElementById('formContainer');
const contactContainer = document.getElementById('contactContainer');
const bookContainer = document.getElementById('list');

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
      listB.innerHTML += ` 
      <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action p-4 book-title">
      <div class="ml-1">
      <p class="fs-4 mt-3">"${books[e].title}" by ${books[e].author}</p>
      </div>
      <button type="button" id="btn-remove" onclick="a.bookRemove(${e}, a)">Remove</button>
      </li>`;
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

btnList.addEventListener('click', () => {
  contactContainer.style.display = 'none';
  formContainer.style.display = 'none';
  libros.style.display = 'block';
  bookContainer.style.display = 'none';
});

btnNew.addEventListener('click', () => {
  contactContainer.style.display = 'none';
  formContainer.style.display = 'block';
  libros.style.display = 'none';
  bookContainer.style.display = 'none';
});

btnContact.addEventListener('click', () => {
  contactContainer.style.display = 'block';
  formContainer.style.display = 'none';
  libros.style.display = 'none';
  bookContainer.style.display = 'block';
});

btnlogo.addEventListener('click', () => {
  contactContainer.style.display = 'block';
  formContainer.style.display = 'block';
  libros.style.display = 'block';
  bookContainer.style.display = 'block';
});