"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */

/* eslint-disable max-classes-per-file */
var titles = document.getElementById('Title');
var authors = document.getElementById('Author');
var listB = document.getElementById('book-list');
var button = document.getElementById('btn');
var libros = document.getElementById('Libreria');
var remove = document.getElementById('btn-remove');
var books = [];

var Book = function Book(title, author) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
};

if (localStorage.getItem('Libros') !== null) {
  JSON.parse(localStorage.getItem('Libros')).forEach(function (element) {
    books.push(element);
  });
} else {
  books = [];
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);
  }

  _createClass(Library, [{
    key: "popHtml",
    value: function popHtml(books) {
      this.books = books;
      listB.innerHTML = '';

      for (var e = 0; e < books.length; e += 1) {
        listB.innerHTML += "  <li class=\"book-title\">".concat(books[e].title, "</li>\n      <li class=\"book-author\">").concat(books[e].author, "</li>\n      <button type=\"button\" id=\"btn-remove\" onclick=\"a.bookRemove(").concat(e, ", a)\">Remove</button>");
      }
    }
  }, {
    key: "bookUpdate",
    value: function bookUpdate(x) {
      this.x = x;
      books.push(x);
      localStorage.setItem('Libros', JSON.stringify(books));
      return books;
    }
  }, {
    key: "bookRemove",
    value: function bookRemove(e, j) {
      this.e = e;
      this.j = j;
      books.splice(e, 1);
      localStorage.setItem('Libros', JSON.stringify(books));
      j.popHtml(books);
    }
  }]);

  return Library;
}();

var a = new Library();
a.popHtml(books);
button.addEventListener('click', function () {
  var bookList = new Book(titles.value, authors.value);
  a.bookUpdate(bookList);
  a.popHtml(books);
  document.getElementById('Libreria').reset();
});