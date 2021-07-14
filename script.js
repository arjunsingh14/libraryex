  let myLibrary = [];

  
  

  function Book(bookName, author, totalPages) {
    //the constructor
  this.book = 'Book: ' + bookName;
  this.author = 'By: ' + author;
  this.totalPages = 'Total pages: ' + totalPages;

}

function popupFunc() {
  //if entering wrong inputs the website displays this popup
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

}
function addBookToLibrary (bookName, author, totalPages) {
  //creates a book objects, adds it to the existing myLibrary array and calls createCard();
  let book = new Book(bookName, author,totalPages );
  myLibrary.push(book);
  createCard(book);
}
function updatebooks(){
  //deletes all the divs under #main and re-updates that with the spliced array
  const books = document.querySelector('#main');
  books.querySelectorAll('div').forEach(div => div.remove());
  for(let i = 0; i < myLibrary.length; i++){
    createCard(myLibrary[i]);
  }
}
function createCard(bookObj) {
  /* 
  creates all the divs meant to be displayed on each book card
  which is then appended to their container #main.
  adds an event listener for each object's delete button that removes
  that book from the array and calls updateBooks();
  */

  let main = document.querySelector('#main');
  let card = document.createElement('div');
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'delete');
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
  deleteBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(bookObj), 1);
    saveLocal();
    updatebooks();
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
    saveLocal();
    form.reset();
  }
  
});


function saveLocal(){
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

function loadLocal () {
  myLibrary = JSON.parse(localStorage.getItem('library'));
  if (myLibrary === null){
    myLibrary = [];
  }
  else{
    updatebooks();
  }
}


loadLocal();