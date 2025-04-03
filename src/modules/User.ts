import{LibraryItem} from "./LibraryItem";
import {LibraryCatalouge} from "./libraryCatalouge";

export class User{


    static users: User[] = [];

    constructor(private name: string, private email:string) {
        User.users.push(this);
    }
        getName(): string {
            return this.name;
        }
        set Name(name: string) {
            this.name = name;
        }
        getEmail(): string {
            return this.email;
        }
        set Email(email: string) {
            this.email = email;
        }
        borrowBook(bookTitle: string): void {
            const BookAvailableToBorrow = LibraryCatalouge.LibraryItems.Books.find((book) => book.getTitle() === bookTitle && book.isItemAvailable());
            const isBookAvailableToBorrow = LibraryCatalouge.LibraryItems.Books.some((book) => book.getTitle() === bookTitle && book.isItemAvailable());
            BookAvailableToBorrow ? console.log(`${bookTitle} is borrowed by ${this.getName()}`)
                : console.log(`${bookTitle} is not available to borrow`);
            BookAvailableToBorrow?.setAvailability(isBookAvailableToBorrow);

        }

        manageLibrary(): void {
         console.log(`Current User : ${this.getName()} is managing the library`);
         console.log(`currently available users`)
            User.users.map((user)=>
                console.log(`User :${user.name} --- e-mail : ${user.email}`)
                )
        }
}