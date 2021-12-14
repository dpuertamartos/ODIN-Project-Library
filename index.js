console.log("hello world")

let myLibrary = []

const refreshBooks = () => {
    myLibrary.map(book => {
        const newBookDiv = document.createElement("div")
        newBookDiv.textContent = book.title
        newBookDiv.id = myLibrary.indexOf(book)
        const removeButton = document.createElement("button")
        removeButton.setAttribute("data", myLibrary.indexOf(book))
        removeButton.textContent="Remove"
        newBookDiv.append(removeButton)
        removeButton.addEventListener("click", ()=>{
            myLibrary.splice(Number(removeButton.getAttribute("data")), 1)
            newBookDiv.parentElement.removeChild(newBookDiv)
        }) 
        bookContainer.append(newBookDiv)
    })
}

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
    refreshBooks()
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "not read yet")
myLibrary = myLibrary.concat(theHobbit)

const bookContainer = document.querySelector(".bookContainer")
const createButton = document.querySelector(".create")



refreshBooks()
createButton.addEventListener("click", ()=>addBookToLibrary())
