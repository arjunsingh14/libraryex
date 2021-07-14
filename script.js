  let myLibrary = [];

  
  

  function Book(bookName, author, totalPages) {
    //the constructor
  this.book = 'Book: ' + bookName;
  this.author = 'By: ' + author;
  this.totalPages = 'Total pages: ' + totalPages;

}

function popupFunc() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

}
function addBookToLibrary (bookName, author, totalPages) {
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'delete');
  let book = new Book(bookName, author,totalPages );
  myLibrary.push([book, deleteBtn]);
  save();
  createCard(book, deleteBtn);
}

function createCard(bookObj, deleteBtn) {
  let main = document.querySelector('#main');
  let card = document.createElement('div');
  let bookname = document.createElement('div');
  let author = document.createElement('div');
  let totalPages = document.createElement('div');
  card.classList.add('card');
  bookname.textContent = bookObj.book;
  author.textContent = bookObj.author;
  totalPages.textContent = bookObj.totalPages;
  deleteBtn.textContent = 'Delete';
  card.appendChild(bookname);
  card.appendChild(author);
  card.appendChild(totalPages);
  card.appendChild(deleteBtn);
  main.appendChild(card);
  deleteBtn.addEventListener('click', event => {
    event.target.parentNode.remove();
    myLibrary = myLibrary.filter(v => v[1] !== event.target);
  });
}
  
const btn = document.querySelector('#addbook');
btn.addEventListener('click', () => {
  const form = document.querySelector('form');
  const bookName = document.querySelector('#book');
  const author = document.querySelector('#author');
  const text = document.querySelector('#pages');
  if (bookName.value === '' || author.value === '' || parseInt(text.value) <= 0){
    popupFunc();
  }
  else{

    addBookToLibrary(bookName.value, author.value, text.value);
    form.reset();
  }
  
});


