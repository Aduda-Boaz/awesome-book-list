"use strict";

var title = document.querySelector('.Book');
var author = document.querySelector('.Book');
var listB = document.getElementById('book-list');
var books = [];

function addBook(e) {
  e.preventDefault();
  var bookTitle = this.querySelector('[name=book]').value;
  var author = this.querySelector('[name=auth]').value;
  var book = {
    bookTitle: bookTitle,
    author: author
  };
  this.reset();
  books.push(book);
  localStorage.setItem('Libros', JSON.stringify(books));
  popHtml();
}

var popHtml = function popHtml() {
  listB.innerHTML = '';
  books = JSON.parse(localStorage.getItem('Libros'));

  if (books === null) {
    books = [];
  } else {
    books.forEach(function (element) {
      listB.innerHTML += "  <li class=\"book-title\">".concat(element.bookTitle, "</li>\n         <li class=\"book-author\">").concat(element.author, "</li>\n         <button id=\"btn-remove\">Remove</button>");
    });
  }
};

title.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', popHtml);