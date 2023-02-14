class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity - 1 < 0) {
            throw new TypeError('Not enough space in the collection.');
        }

        this.capacity -= 1;
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName);

        if (book == undefined) {
            throw new TypeError(`${bookName} is not in the collection.`);
        }

        if (book.payed == true) {
            throw new TypeError(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let index = this.books.findIndex(b => b.bookName == bookName);
        const book = this.books[index];

        if (book == undefined) {
            throw new TypeError(`The book, you're looking for, is not found.`);
        }

        if (book.payed == false) {
            throw new TypeError(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(index, 1);
        this.capacity += 1;
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {

        if (!bookAuthor) {
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            const result = [`The book collection has ${this.capacity} empty spots left.`,
            ...this.books.map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`)];

            return result.join('\n');
        }

        this.books.filter(b => b.bookAuthor == bookAuthor);
        if (this.books.length == 0) {
            throw new TypeError(`${bookAuthor} is not in the collection.`);
        }

        const result = [...this.books.map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`)];

        return result.join('\n');
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
//console.log(library.addBook('Ulysses', 'James Joyce')); should throw error Not enough space in the collection.
console.log(library.payBook('In Search of Lost Time'));
//console.log(library.payBook('In Search of Lost Time'));
//console.log(library.removeBook('Time'));
console.log(library.removeBook('In Search of Lost Time'));
console.log(library.addBook('ADon Quixote2', 'Miguel de Cervantes'));
//console.log(library.removeBook('Don Quixote'));
console.log(library.getStatistics('Miguel de Cervantes'));