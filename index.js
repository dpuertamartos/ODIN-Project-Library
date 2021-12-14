console.log("hello world")

let myLibrary = []

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => console.log(this.title, "by", this.author, ",", this.pages, "pages, and its", this.read)
}

function addBookToLibrary(){
    const titleInput = window.prompt("Introduce title")
    const authorInput = window.prompt("Introduce author")
    const pagesInput = window.prompt("Introduce pages")
    const readInput = window.prompt("Introduce read or not")
    const bookObject = new Book(titleInput, authorInput, pagesInput, readInput)
    myLibrary = myLibrary.concat(bookObject)
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "not read yet")
myLibrary = myLibrary.concat(theHobbit)

const bookContainer = document.querySelector(".bookContainer")

const bookLooper = () => {
    myLibrary.map(book => {
        const newBookDiv = document.createElement("div")
        newBookDiv.textContent = book.title
        bookContainer.append(newBookDiv)
    })
}

bookLooper()
