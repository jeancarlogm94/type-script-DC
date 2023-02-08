"use strict";
const book = {
    id: 5,
    title: 'My title',
    author: 'Pablo',
};
const books = [];
function getBook() {
    return { id: 1, title: 'Other title', author: 'Jacob' };
}
const myBook = getBook();
myBook.title;
function createBook(book) {
    return book;
}
const newBook = {
    id: 5,
    title: 'New title',
    author: 'Carolina',
};
createBook(newBook);
