"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const LibraryItem_1 = require("./LibraryItem");
class Book extends LibraryItem_1.LibraryItem {
    constructor(id, title, isAvailable, author, ISBN) {
        super(id, title, isAvailable);
        this.author = author;
        this.ISBN = ISBN;
    }
    display() {
        console.log(`Title : ${this.title} \n Author : ${this.author} \n ISBN : ${this.ISBN} \n Available : ${this.isAvailable ? 'Yes' : 'No'}`);
    }
    getISBN() {
        return this.ISBN;
    }
    getAuthor() {
        return this.author;
    }
}
exports.Book = Book;
