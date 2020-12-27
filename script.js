


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

const allBooks = []
var highestIndexOfAllBooks = 0;
const errorTypes = {
    NotANumber: 1,
    EmptyField: 2,

}

Object.freeze(errorTypes)

function handleExceptions(errorType) {
    switch (errorType) {
        case errorType.NotANumber:
            console.error('Not A Number')
            break;
    }

}
function clearInputValues() {
    newBookModal.style.display = "none"
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookPagesRead.value = "";
    newBookTotalPages.value = "";
}

listings = document.querySelector("#listings")
function createListings() {
    allBooks.forEach(book => {
        if (allBooks.indexOf(book) >= highestIndexOfAllBooks || highestIndexOfAllBooks == 0) {
            div = document.createElement('div')
            div.classList.add('new-book')
            divBtn = document.createElement('div')
            divBtn.classList.add('new-book-buttons')
            divTxt = document.createElement('div')
            divTxt.classList.add('new-book-text')
            
            div.dataset.index = allBooks.indexOf(book)
            p1 = document.createElement('p')
            p2 = document.createElement('p')
            p3 = document.createElement('p')
            p4 = document.createElement('p')
            p1.textContent = `Title:${book.title}`
            p2.textContent = `Author:${book.author}`
            p3.textContent = `Total Pages:${book.totalPages}`
            p4.textContent = `Pages Read:${book.pagesRead}`

            closeBtn = document.createElement('button')
            //closeBtn.dataset.index=allBooks.indexOf(book)
            closeBtn.addEventListener('click',event=> removeListing(allBooks.indexOf(book),div))
            editBtn = document.createElement('button')
            closeBtn.textContent='Delete'
            editBtn.textContent='Edit'

            divBtn.appendChild(editBtn)
            divBtn.appendChild(closeBtn)

            divTxt.appendChild(p1)
            divTxt.appendChild(p2)
            divTxt.appendChild(p3)
            divTxt.appendChild(p4)

            divBtn.appendChild(editBtn)
            divBtn.appendChild(closeBtn)

            div.appendChild(divTxt)
            div.appendChild(divBtn)

            listings.appendChild(div)
            highestIndexOfAllBooks++;
           
        }
    })
}

function removeListing(index,masterDiv){
console.log(`Index:${index}`)
highestIndexOfAllBooks--;
console.log(`Before Highest Index:${highestIndexOfAllBooks}`)
 allBooks.splice(index,1)
 updateListing()
 masterDiv.parentNode.removeChild(masterDiv)

 highestIndexOfAllBooks--;
 console.log(`After Highest Index:${highestIndexOfAllBooks}`)
 console.table(allBooks)

}

function updateListing(){
    let arr=Array.from(listings.querySelectorAll('.new-book'))
    allBooks.forEach(book => {
        
        div.dataset.index = allBooks.indexOf(book)

    })
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

}
closeModalBtn.onclick = function () {
    clearInputValues()
}
sumbitModalBtn.onclick = function () {
    titleVal = newBookTitle.value;
    authorVal = newBookAuthor.value;
    pagesReadVal = newBookPagesRead.value;
    totalPagesVal = newBookTotalPages.value;

    newBook = new Book(titleVal, authorVal, totalPagesVal, pagesReadVal)
    if (titleVal == undefined || titleVal == '' ||
        authorVal == undefined || authorVal == '' ||
        pagesReadVal == undefined || pagesReadVal == '' ||
        totalPagesVal == undefined || totalPagesVal == '') {
        console.log('test')
    } else if (isNaN(pagesReadVal) || isNaN(totalPagesVal)) {
        console.error('NaN')
    } else {

        allBooks.push(newBook)
        console.log(`Current Highest Index:${highestIndexOfAllBooks}`)
        newBookModal.style.display = 'none'
        clearInputValues()
        createListings()
    }

}
