console.log("hello world")

let myLibrary = []

// we need to first destroy books and then create new ones or we will get duplicate divs
const destroyBookContainer = () => {
    const bookContainerOld = document.querySelector(".bookContainer")
    bookContainerOld.parentElement.removeChild(bookContainerOld)
    const wholeWeb = document.querySelector(".webContainer")
    const bookContainer = document.createElement("div")
    bookContainer.className = "bookContainer"
    wholeWeb.append(bookContainer)
}

const createNewDiv = (textContent) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = textContent
    return newDiv
}

const createBookCard = (book, bookContainer) => {
    const newBookDiv = document.createElement("div")
    newBookDiv.textContent = book.title
    newBookDiv.id = myLibrary.indexOf(book)
    const newBookDiv2 = createNewDiv(`by ${book.author}`)
    const newBookDiv3 = createNewDiv(`${book.pages} pages`)
    const newBookDiv4 = createNewDiv(book.read)
    const removeButton = document.createElement("button")
    removeButton.setAttribute("data", myLibrary.indexOf(book))
    removeButton.textContent="Remove"
    const changeStatus = document.createElement("button")
    changeStatus.setAttribute("data", myLibrary.indexOf(book))
    changeStatus.textContent="Change status"
    
    newBookDiv.append(removeButton)
    newBookDiv.append(changeStatus)
    newBookDiv.append(newBookDiv2)
    newBookDiv.append(newBookDiv3)
    newBookDiv.append(newBookDiv4)
    
    removeButton.addEventListener("click", ()=>{
        myLibrary.splice(Number(removeButton.getAttribute("data")), 1)
        newBookDiv.parentElement.removeChild(newBookDiv)
    }) 
    changeStatus.addEventListener("click", ()=>{
        myLibrary[Number(changeStatus.getAttribute("data"))].change()
        refreshBooks()
    })
    
    bookContainer.append(newBookDiv)
}

const refreshBooks = () => {
    destroyBookContainer()
    const bookContainer = document.querySelector(".bookContainer")
    myLibrary.map(book => createBookCard(book,bookContainer))
}

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => console.log(this.title, "by", this.author, ",", this.pages, "pages, and its", this.read)
    this.change = () => {
        if(this.read==="read"){this.read="not read"}
        else{this.read="read"    
        }
    }
}

function addBookToLibrary(){
    const titleInput = window.prompt("Introduce title")
    const authorInput = window.prompt("Introduce author")
    const pagesInput = window.prompt("Introduce pages")
    const readInput = window.prompt("Introduce read or not")
    const bookObject = new Book(titleInput, authorInput, pagesInput, readInput)
    myLibrary = myLibrary.concat(bookObject)
    refreshBooks()
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "not read")
myLibrary = myLibrary.concat(theHobbit)

const createButton = document.querySelector(".create")

refreshBooks()
createButton.addEventListener("click", ()=>addBookToLibrary())
