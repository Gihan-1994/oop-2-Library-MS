import {Book} from "../Book";
import {AudioBook} from "../AudioBook";

export interface LibraryItemTypes {
    Books: Book[];
    AudioBooks: AudioBook[]
}