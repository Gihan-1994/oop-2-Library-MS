"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
const LibraryItem_1 = require("./LibraryItem");
class AudioBook extends LibraryItem_1.LibraryItem {
    constructor(narrator, length, id, title, isAvailable) {
        super(id, title, isAvailable);
        this.narrator = narrator;
        this.length = length;
    }
    display() {
        console.log(`Title : ${this.title} \n Narrator : ${this.narrator} \n Length : ${this.length} \n Available : ${this.isAvailable ? 'Yes' : 'No'}`);
    }
    getNarrator() {
        return this.narrator;
    }
}
exports.AudioBook = AudioBook;
