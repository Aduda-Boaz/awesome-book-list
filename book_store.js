const title = document.querySelector('.Book');
const listB = document.getElementById('book-list');
let books = [];

function addBook(e) {
   e.preventDefault();
   const bookTitle = (this.querySelector('[name=book]')).value;
   const author = (this.querySelector('[name=auth]')).value;
   const book = {
      bookTitle, 
      author,
     }
   this.reset();
   books.push(book);
   localStorage.setItem('Libros', JSON.stringify(books));
   popHtml();
 };

const popHtml = () => {
   listB.innerHTML = '';
   books = JSON.parse(localStorage.getItem('Libros'));

   if (books === null){
      books = [];
   }else{
      books.forEach(element => {
         listB.innerHTML += `  <li class="book-title">${element.bookTitle}</li>
         <li class="book-author">${element.author}</li>
         <button id="btn-remove" onclick="remove()">Remove</button>`
      });
   }

 }

 function remove() {
    let ul = document.getElementById('book-list');
    ul.parentNode.removeChild(ul);
 }

 title.addEventListener('submit', addBook);
 document.addEventListener('DOMContentLoaded', popHtml);
