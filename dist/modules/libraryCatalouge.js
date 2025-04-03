"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryCatalouge = void 0;
const Book_1 = require("./Book");
const AudioBook_1 = require("./AudioBook");
class LibraryCatalouge {
    constructor() {
        this.catalogue = LibraryCatalouge.LibraryItems;
    }
    static getInstance() {
        if (!LibraryCatalouge.instance) {
            LibraryCatalouge.instance = new LibraryCatalouge();
        }
        return LibraryCatalouge.instance;
    }
    addItem(item) {
        const exsistInBooks = this.catalogue.Books.some((book) => book.getId() === item.getId());
        const exsistInAudioBooks = LibraryCatalouge.LibraryItems.AudioBooks.some((audioBook) => audioBook.getId() === item.getId());
        if (exsistInBooks || exsistInAudioBooks) {
            console.log(`Item ${item.getTitle()} is already in the library catalouge`);
            return;
        }
        if (item instanceof Book_1.Book) {
            LibraryCatalouge.LibraryItems.Books.push(item);
            console.log(`Added new Book : ${item.getTitle()} with ISBN : ${item.getISBN()} to the library catalouge`);
        }
        else if (item instanceof AudioBook_1.AudioBook) {
            LibraryCatalouge.LibraryItems.AudioBooks.push(item);
            console.log(`Added new Book : ${item.getTitle()} with narrator : ${item.getNarrator()} to the library catalouge`);
        }
    }
    displayAllItems() {
        console.log('Books:');
        LibraryCatalouge.LibraryItems.Books.forEach((book) => book.display());
        console.log('Audio Books:');
        LibraryCatalouge.LibraryItems.AudioBooks.forEach((audioBook) => audioBook.display());
    }
    displayAllAvailableItems() {
        console.log('Available Books:');
        LibraryCatalouge.LibraryItems.Books.filter((book) => book.isItemAvailable()).forEach((book) => book.display());
        console.log('Available Audio Books:');
        LibraryCatalouge.LibraryItems.AudioBooks.filter((audioBook) => audioBook.isItemAvailable()).forEach((audioBook) => audioBook.display());
    }
}
exports.LibraryCatalouge = LibraryCatalouge;
LibraryCatalouge.LibraryItems = {
    Books: [],
    AudioBooks: []
};
