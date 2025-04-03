import {LibraryItem} from "./LibraryItem";

export class AudioBook extends LibraryItem{
    constructor(private narrator:string , private length: number ,id: number, title: string, isAvailable: boolean ){
        super(id,title, isAvailable);
    }
display() {
        console.log(`Title : ${this.title} \n Narrator : ${this.narrator} \n Length : ${this.length} \n Available : ${this.isAvailable ? 'Yes' : 'No'}`);
}
getNarrator(): string {
    return this.narrator;
    }
}