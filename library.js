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


const cardContainer = document.querySelector(".card-container");
const form = document.querySelector("#book-form");

function displayLibrary() {
    cardContainer.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++)
    {
        const div = document.createElement("div");
        div.classList.add("bookCard")
        cardContainer.appendChild(div);

        const title = document.createElement("div");
        title.innerHTML = myLibrary[i].title;
        div.appendChild(title);
        const author = document.createElement("div");
        author.innerHTML = myLibrary[i].author;
        div.appendChild(author);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#Title").value;
    const author = document.querySelector("#Author").value;
    const pages = document.querySelector("#Pages").value;
    const read = document.querySelector('input[name="status"]:checked').value;

    addBook(title, author, pages, read);
    addCard();
    form.reset();
});


displayLibrary();