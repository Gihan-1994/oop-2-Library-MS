"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryItem = void 0;
class LibraryItem {
    constructor(id, title, isAvailable = true) {
        this.id = id;
        this.title = title;
        this.isAvailable = isAvailable;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    isItemAvailable() {
        return this.isAvailable;
    }
    setAvailability(isAvailable) {
        this.isAvailable = !isAvailable;
    }
}
exports.LibraryItem = LibraryItem;
