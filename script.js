


function Book(title, author, totalPages, pagesRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
}
Book.prototype.info = function () {
    console.log(`
    Title:${this.title}\n 
    Author:${this.author}\n
    totalPages:${this.totalPages}\n
    pagesRead:${this.pagesRead}\n
    
    `)
}


div = document.querySelector('.new-book')
function createBook() {
    console.log('Hello')
    newBook = document.createElement('div')
    newBook.classList.add('new-book')
    newBook.classList.add('center')
    form = document.createElement('form')
    title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'title')
    author = document.createElement('input')
    author.setAttribute('type', 'text')
    author.setAttribute('placeholder', 'author')


    form.appendChild(title)
    form.appendChild(author)


    newBook.appendChild(form)

    div.appendChild(newBook)
}

const newBookModal = document.getElementById('new-book-modal');
const newBookBtn = document.getElementById('add-new-book');
const closeModalBtn = document.getElementById('close-modal-btn')
const sumbitModalBtn = document.getElementById('submit-modal-btn')

const newBookTitle = document.getElementById('new-book-title')
const newBookAuthor = document.getElementById('new-book-author')
const newBookPagesRead = document.getElementById('new-book-pages-read')
const newBookTotalPages = document.getElementById('new-book-total-pages')
newBookBtn.onclick = function () {
    newBookModal.style.display = "block";
    console.log('button pressed')
}
closeModalBtn.onclick = function () {
    newBookModal.style.display = "none"
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookPagesRead.value = "";
    newBookTotalPages.value = "";
}
sumbitModalBtn.onclick = function () {
    titleVal = newBookTitle.value;
    authorVal = newBookAuthor.value;
    pagesReadVal = newBookPagesRead.value;
    totalPagesVal = newBookTotalPages.value;

    newBook = new Book(titleVal, authorVal, totalPagesVal, pagesReadVal)
    if (titleVal == undefined || titleVal == '' ||
        authorVal == undefined || authorVal == '' ||
        pagesReadVal ==undefined || pagesReadVal=='' ||
        totalPagesVal ==undefined || totalPagesVal=='') {
        console.log('test')
    } else


        newBook.info();

}
