console.log("hello world")

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => console.log(this.title, "by", this.author, ",", this.pages, "pages, and its", this.read)
}

const theHobbit = new Book("The Hobbit", "Tolkien", "295", "not read yet")
console.log(theHobbit.title)
theHobbit.info()
