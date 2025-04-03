SOLID Principles and Design Patterns in the Library Management System
SOLID Principles
1. Single Responsibility Principle (SRP)
Each class has a single responsibility:

LibraryItem - Base class for library items

Book/AudioBook - Specific item types

LibraryCatalouge - Manages the collection of items

User - Represents library users

typescript
Copy
// LibraryItem.ts - Only responsible for base item properties
export abstract class LibraryItem {
    constructor(protected id: number, protected title: string, protected isAvailable: boolean = true) {}
    // ... methods related to basic item properties
}
2. Open/Closed Principle (OCP)
The system is open for extension (new item types) but closed for modification:

typescript
Copy
// LibraryItem.ts
export abstract class LibraryItem {
    abstract display(): void; // New item types must implement this
}
3. Liskov Substitution Principle (LSP)
Subclasses (Book, AudioBook) can substitute their parent class (LibraryItem) without breaking functionality:

typescript
Copy
// Both Book and AudioBook can be used wherever LibraryItem is expected
addItem(item: LibraryItem) {
    if(item instanceof Book) {
        // handle book
    } else if(item instanceof AudioBook) {
        // handle audio book
    }
}
4. Interface Segregation Principle (ISP)
The system doesn't force classes to implement interfaces they don't need. Each subclass only implements what it requires.

5. Dependency Inversion Principle (DIP)
High-level modules depend on abstractions (LibraryItem) rather than concrete implementations:

typescript
Copy
// LibraryCatalouge depends on LibraryItem abstract class
addItem(item: LibraryItem) {
    // works with any LibraryItem subclass
}
Design Patterns
1. Singleton Pattern
Used in LibraryCatalouge to ensure only one instance exists:

typescript
Copy
// LibraryCatalouge.ts
private static instance: LibraryCatalouge;

private constructor() {}

public static getInstance(): LibraryCatalouge {
    if(!LibraryCatalouge.instance) {
        LibraryCatalouge.instance = new LibraryCatalouge();
    }
    return LibraryCatalouge.instance;
}
2. Factory Method Pattern
The abstract display() method in LibraryItem is implemented differently by each subclass:

typescript
Copy
// Book.ts
display() {
    console.log(`Title: ${this.title} \n Author: ${this.author} \n ISBN: ${this.ISBN} \n Available: ${this.isAvailable ? 'Yes' : 'No'}`);
}

// AudioBook.ts
display() {
    console.log(`Title: ${this.title} \n Narrator: ${this.narrator} \n Length: ${this.length} \n Available: ${this.isAvailable ? 'Yes' : 'No'}`);
}
3. Observer Pattern (Potential)
The system could be extended to use the Observer pattern for notifying users when items become available, though not fully implemented in current code.

4. Template Method Pattern
The LibraryItem abstract class defines the structure (template) that subclasses must follow:

typescript
Copy
// LibraryItem.ts
export abstract class LibraryItem {
    // ... common methods
    abstract display(): void; // Subclasses must implement
}
