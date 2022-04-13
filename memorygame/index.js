class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

}
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.map(book => UI.addBookToList(book))
    }
    //Add book to list 
    static addBookToList(book) {
        const tbody = document.querySelector('#row');
        const tr = document.createElement('tr');
        tr.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td class='close-btn delete'>&times;</td>
        `;
        tbody.appendChild(tr);
    }
    //clear input 
    static clearInput() {
        const title = document.querySelector('#title').value = '';
        const author = document.querySelector('#author').value = '';
        const isbn = document.querySelector('#isbn').value = '';
    }
    //delete book 
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBooks(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBooks(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

const form = document.querySelector('.signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    //console.log(book);
    UI.addBookToList(book);
    Store.addBooks(book);
    UI.clearInput();
});
const row = document.querySelector('#row');
row.addEventListener('click', (e) => {
    //console.log(e.target);
    UI.deleteBook(e.target)
    Store.removeBooks(e.target.parentElement.parentElementSibling.textContent);
})