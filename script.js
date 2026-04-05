//stored books
const myLibrary = [];

//class
class Book{
    constructor(title, author, pages, read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
        this.id=crypto.randomUUID();
    }
    toggleRead(){
        this.read = !this.read;
    }
    readStatus(){
        return this.read ? "Read" : "Not read yet";
    }
    info(){
        return `${this.title} by ${this.author}. ${this.pages} pages, ${this.readStatus()}`
    }
}

//add books
function addBookToMyLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
addBookToMyLibrary('Dune', 'Frank Herbert', 412, true)
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
    myLibrary.forEach((book, index)=>{
        const card= 
        `<div class="book-card">
            <h3>${book.title}</h3> 
            <p>By: <span>${book.author}</span></p>
            <p>${book.pages}</p>
            <p>${book.readStatus()}</p>

            <button class="toggle-btn" data-index="${index}"> Change status </button>
            <button class="remove-btn" data-index="${index}"> Remove </button>
        </div>`;
        container.innerHTML += card;
    })
    //remove
    const removeButtons=document.querySelectorAll(".remove-btn");
    removeButtons.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            const indexRemove=e.target.dataset.index;
            myLibrary.splice(indexRemove, 1);
            
            display()
        })
    })
    //read
    const toggleButtons=document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            const indexToggle=e.target.dataset.index;
            myLibrary[indexToggle].toggleRead();
            
            display()
        })
    })
}
//create Book button
const newBookBtn=document.querySelector("#new-book-btn")
const dialog=document.querySelector("#my-form")

newBookBtn.addEventListener("click", ()=>{
    dialog.showModal()
})
//submit books
const form=document.querySelector("form")

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const pages=document.querySelector("#pages").value;
    const read=document.querySelector("#read").checked;

    addBookToMyLibrary(title, author, pages, read);

    form.reset();
    dialog.close();
    display()
})
//cancel
const cancelBtn=document.querySelector("#cancel-btn")
cancelBtn.addEventListener("click", ()=>{
    dialog.close();
})


