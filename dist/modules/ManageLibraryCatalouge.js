"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryItem_1 = require("./LibraryItem");
class ManageLibraryCatalouge extends LibraryItem_1.LibraryItem {
    constructor(id, title, isAvailable) {
        super(id, title, isAvailable);
    }
    checkIsAvailable(title) {
        return title.isAvailable;
    }
}
