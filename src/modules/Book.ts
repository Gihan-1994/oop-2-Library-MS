 import {LibraryItem} from "./LibraryItem";

export class Book extends LibraryItem {
    constructor(id: number, title: string, isAvailable: boolean, private author: string, private ISBN: string) {
        super(id, title, isAvailable);

    }

    display() {
        console.log(`Title : ${this.title} \n Author : ${this.author} \n ISBN : ${this.ISBN} \n Available : ${this.isAvailable ? 'Yes' : 'No'}`);
    }

    getISBN(): string {
        return this.ISBN;
    }

    getAuthor(): string {
        return this.author;
    }
}
