import {LibraryItem} from "./LibraryItem";
import {Book} from "./Book";
import {AudioBook} from "./AudioBook";
import {LibraryItemTypes} from "./interfaces/LibraryItemTypes";



export class LibraryCatalouge {
    static LibraryItems :LibraryItemTypes={
        Books: [],
        AudioBooks: []
    }
    private static instance: LibraryCatalouge;

    private constructor() {}

    public static getInstance(): LibraryCatalouge {
        if(!LibraryCatalouge.instance) {
            LibraryCatalouge.instance = new LibraryCatalouge();
        }
        return LibraryCatalouge.instance;
    }
     catalogue= LibraryCatalouge.LibraryItems;

    addItem(item: LibraryItem) {

        const exsistInBooks = this.catalogue.Books.some((book) => book.getId() === item.getId());
        const exsistInAudioBooks = LibraryCatalouge.LibraryItems.AudioBooks.some((audioBook) => audioBook.getId() === item.getId());

        if (exsistInBooks ||exsistInAudioBooks) {
            console.log(`Item ${item.getTitle()} is already in the library catalouge`);
            return;
        }
        if(item instanceof Book) {
            LibraryCatalouge.LibraryItems.Books.push(item);
            console.log(`Added new Book : ${item.getTitle()} with ISBN : ${item.getISBN()} to the library catalouge`);
        }
        else if(item instanceof AudioBook) {
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
        LibraryCatalouge.LibraryItems.Books.filter((book) =>
            book.isItemAvailable()).forEach((book) =>
            book.display());
        console.log('Available Audio Books:');
        LibraryCatalouge.LibraryItems.AudioBooks.filter((audioBook) =>
            audioBook.isItemAvailable()).forEach((audioBook) =>
            audioBook.display());
    }

}