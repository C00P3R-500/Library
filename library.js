const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

}

function addBook(title, author, pages, read ) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBook("The Hobbit", "J.R.R. Tolkien", 310, "read");
addBook("1984", "George Orwell", 328, "read");
addBook("To Kill a Mockingbird", "Harper Lee", 281, "unread");
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addBook("The Giver", "Lois Lowry", 240, "unread");


const cardContainer = document.querySelector(".bookCards");

function addCard() {
    for(let i = 0; i < myLibrary.length; i++)
    {
        let div = document.createElement("div");
        div.classList.add("bookCard")
        div.innerHTML = myLibrary[i].title;

        cardContainer.appendChild(div);
    }
}

addCard();