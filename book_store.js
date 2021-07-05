// const title = document.getElementById('#Title').value;
// const author = document.getElementById('#Author').value;
// const bookList = [
//     {
//     title: 'Book 1',
//     author: 'Alison',
//     },
//     {
//     title: 'Book 1',
//     author: 'Alison',
//     }
//     ]; 

   
    
     document.getElementById('#btn').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('#Title').value;
            const author = document.getElementById('#Author').value;
            const book = new book[title,author];
            console.log(book);
            });      
    


    
  