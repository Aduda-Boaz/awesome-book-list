"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */
// eslint-disable-next-line max-classes-per-file
var Book = function Book(title, author) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
}; // The UI class


var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "addBooks",
    value: function addBooks() {
      var books = Storage.getBooks();
      books.forEach(function (book) {
        return User.addBookList(book);
      });
    }
  }, {
    key: "addBookList",
    value: function addBookList(book) {
      var list = document.querySelector('#book-list');
      var div = document.createElement('div');
      div.innerHTML = "\n      <h5>".concat(book.title, "</h5>\n      <h5>").concat(book.author, "</h5>\n      <button class=\"remove\">Remove</button>\n    ");
      list.appendChild(div);
    }
  }, {
    key: "removeBook",
    value: function removeBook(target) {
      if (target.classList.contains('remove')) {
        target.parentElement.parentElement.remove();
      }
    }
  }, {
    key: "removeInputs",
    value: function removeInputs() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }
  }]);

  return User;
}(); // Set the storage class


var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: "getBooks",
    value: function getBooks() {
      var books;

      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
    }
  }, {
    key: "storeBook",
    value: function storeBook(book) {
      var books = Storage.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, {
    key: "deleteBook",
    value: function deleteBook(data) {
      var books = Storage.getBooks();
      books.forEach(function (book, index) {
        if (book.data === data) {
          book.splice(index, 1);
        }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }]);

  return Storage;
}();

document.addEventListener('DOMContentLoaded', User.addBooks);
document.querySelector('#form-input').addEventListener('submit', function (e) {
  e.preventDefault();
  var title = document.querySelector('#title').value;
  var author = document.querySelector('#author').value;
  var book = new Book(title, author);
  User.addBookList(book);
  Storage.storeBook(book);
  User.removeInputs();
});
document.querySelector('#book-list').addEventListener('click', function (e) {
  User.removeBook(e.target); // Remove book from localStorage after delete
});