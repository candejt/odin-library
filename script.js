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

addBookToMyLibrary('Dune', 'frank', 412, true)
addBookToMyLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
addBookToMyLibrary('1984', 'George Orwell', 328, true)
addBookToMyLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false)
addBookToMyLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true)

// display books
function display(){  
    //empty
    const container = document.querySelector("#library");
    container.innerHTML='';

    //card
    myLibrary.forEach((book)=>{
        const card= 
        `<div class="book-card">
            <p>${book.info()}</p>
        </div>`;
        container.innerHTML += card;
    })
}
display()
