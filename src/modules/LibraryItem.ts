
export abstract class LibraryItem {

    constructor(protected id: number,protected title: string , protected isAvailable: boolean = true) {

    }
    abstract display (): void


    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    isItemAvailable(): boolean {
        return this.isAvailable;
    }
    setAvailability(isAvailable: boolean) {
        this.isAvailable = !isAvailable;
    }


}