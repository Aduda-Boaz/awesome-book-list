/* eslint-disable no-unused-vars */
const title = document.querySelector('.Book');
const author = document.querySelector('.Book');
const listB = document.getElementById('book-list');
const button = document.getElementById('btn');
let books = [];

const popHtml = () => {
  listB.innerHTML = '';
  books = JSON.parse(localStorage.getItem('Libros'));

  if (books === null) {
    books = [];
  } else {
    for (let e = 0; e < books.length; e += 1) {
      listB.innerHTML += `  <li class="book-title">${books[e].bookTitle}</li>
      <li class="book-author">${books[e].author}</li>
      <button id="btn-remove" onclick="remove(${e})">Remove</button>`;
    }
  }
};

document.addEventListener('DOMContentLoaded', popHtml);

function addBook(e) {
  e.preventDefault();
  const bookTitle = (this.querySelector('[name=book]')).value;
  const author = (this.querySelector('[name=auth]')).value;
  const book = {
    bookTitle,
    author,
  };
  this.reset();
  books.push(book);
  localStorage.setItem('Libros', JSON.stringify(books));
  popHtml();
}

function remove(e) {
  books.splice(e, 1);
  localStorage.setItem('Libros', JSON.stringify(books));
  popHtml();
}

title.addEventListener('submit', addBook);