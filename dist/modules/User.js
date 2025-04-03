"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const libraryCatalouge_1 = require("./libraryCatalouge");
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        User.users.push(this);
    }
    getName() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    set Email(email) {
        this.email = email;
    }
    borrowBook(bookTitle) {
        const BookAvailableToBorrow = libraryCatalouge_1.LibraryCatalouge.LibraryItems.Books.find((book) => book.getTitle() === bookTitle && book.isItemAvailable());
        const isBookAvailableToBorrow = libraryCatalouge_1.LibraryCatalouge.LibraryItems.Books.some((book) => book.getTitle() === bookTitle && book.isItemAvailable());
        BookAvailableToBorrow ? console.log(`${bookTitle} is borrowed by ${this.getName()}`)
            : console.log(`${bookTitle} is not available to borrow`);
        BookAvailableToBorrow === null || BookAvailableToBorrow === void 0 ? void 0 : BookAvailableToBorrow.setAvailability(isBookAvailableToBorrow);
    }
    manageLibrary() {
        console.log(`Current User : ${this.getName()} is managing the library`);
        console.log(`currently available users`);
        User.users.map((user) => console.log(`User :${user.name} --- e-mail : ${user.email}`));
    }
}
exports.User = User;
User.users = [];
