import {LibraryItem} from "./modules/LibraryItem";
import {Book} from "./modules/Book";
import {AudioBook} from "./modules/AudioBook";
import {LibraryCatalouge} from "./modules/libraryCatalouge";
import {User} from "./modules/User";

const book1 = new Book(1, 'The Great Gatsby', true, 'F. Scott Fitzgerald', '978-0743273565');

const audio2 = new AudioBook('J.K. Rowling', 60, 2, 'Harry Potter and the Sorcerer\'s Stone', true);

const catalouge = LibraryCatalouge.getInstance();
catalouge.addItem(book1);
catalouge.addItem(audio2);
catalouge.displayAllItems();
catalouge.displayAllAvailableItems();

const user1 =new User("Gihan","gihan@me.com");
const user2 =new User("Pasan","pasan@me.com");
user1.borrowBook("The Great Gatsby");
user2.borrowBook("The Great Gatsby");
catalouge.displayAllAvailableItems();
