const title = document.querySelector('.Book');
const author = document.querySelector('.Book');
const books = [];

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
 }

title.addEventListener('submit', addBook);
   
    
   

    
  