console.log("hello world")

let myLibrary = []

const refreshBooks = () => {
    console.log(myLibrary)
    const bookContainerOld = document.querySelector(".bookContainer")
    bookContainerOld.parentElement.removeChild(bookContainerOld)
    const wholeWeb = document.querySelector(".webContainer")
    const bookContainer = document.createElement("div")
    bookContainer.className = "bookContainer"
    wholeWeb.append(bookContainer)

    myLibrary.map(book => {
        const newBookDiv = document.createElement("div")
        newBookDiv.textContent = book.title
        newBookDiv.id = myLibrary.indexOf(book)
        const newBookDiv2 = document.createElement("div")
        newBookDiv2.textContent = "by " + book.author
        const newBookDiv3 = document.createElement("div")
        newBookDiv3.textContent = book.pages + " pages"
        const newBookDiv4 = document.createElement("div")
        newBookDiv4.textContent = book.read
        const removeButton = document.createElement("button")
        removeButton.setAttribute("data", myLibrary.indexOf(book))
        removeButton.textContent="Remove"
        newBookDiv.append(removeButton)
        removeButton.addEventListener("click", ()=>{
            myLibrary.splice(Number(removeButton.getAttribute("data")), 1)
            newBookDiv.parentElement.removeChild(newBookDiv)
        }) 
        const changeStatus = document.createElement("button")
        changeStatus.setAttribute("data", myLibrary.indexOf(book))
        changeStatus.textContent="Change status"
        changeStatus.addEventListener("click", ()=>{
            myLibrary[Number(changeStatus.getAttribute("data"))].change()
            refreshBooks()
        })
        newBookDiv.append(changeStatus)
        newBookDiv.append(newBookDiv2)
        newBookDiv.append(newBookDiv3)
        newBookDiv.append(newBookDiv4)
        bookContainer.append(newBookDiv)
    })
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

const bookContainer = document.querySelector(".bookContainer")
const createButton = document.querySelector(".create")



refreshBooks()
createButton.addEventListener("click", ()=>addBookToLibrary())
