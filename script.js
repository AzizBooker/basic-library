
div=document.querySelector('.new-book')
function createBook(){
    console.log('Hello')
    newBook=document.createElement('div')
    newBook.classList.add('new-book')
    newBook.classList.add('center')
    form=document.createElement('form')
    title=document.createElement('input')
    title.setAttribute('type','text')
    title.setAttribute('placeholder','title')
    author=document.createElement('input')
    author.setAttribute('type','text')
    author.setAttribute('placeholder','author')
    
    
    form.appendChild(title)
    form.appendChild(author)

    
    newBook.appendChild(form)
    
    div.appendChild(newBook)  
}