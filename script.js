//array stored books
const myLibrary = [];

//the constructor
function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=crypto.randomUUID();
}
Book.prototype.toggleRead=function(){
    this.read = !this.read
}
Book.prototype.info=function(){
    const readStatus=this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}. ${this.pages} pages, ${readStatus}`
}

//add books
function addBookToMyLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToMyLibrary('dune', 'frank', 412, true)
addBookToMyLibrary('dune', 'frank', 412, true)
addBookToMyLibrary('dune', 'frank', 412, true)
addBookToMyLibrary('dune', 'frank', 412, true)
addBookToMyLibrary('dune', 'frank', 412, true)
console.log (myLibrary)


