class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];

        this.subscriptionTypes  = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes.hasOwnProperty(type)) {
            throw new Error(`The type ${type} is invalid`);
        }

        let subscriberIndex = this.subscribers.findIndex(s => s.name === name);

        if (subscriberIndex < 0) {
            this.subscribers.push({
                name,
                type,
                books: []
            });

        } else {
            this.subscribers[subscriberIndex].type = type;
        }

        subscriberIndex = this.subscribers.findIndex(s => s.name === name);

        return this.subscribers[subscriberIndex];
    }

    unsubscribe(name) {
        let index = this.subscribers.findIndex(s => s.name === name);

        if (index < 0) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(index, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let index = this.subscribers.findIndex(s => s.name === subscriberName);

        if(index < 0) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        if(this.subscriptionTypes[this.subscribers[index].type] <= this.subscribers[index].books.length) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[this.subscribers[index].type]}!`);
        }

        this.subscribers[index].books.push({ title: bookTitle, author: bookAuthor});

        return this.subscribers[index];
    }

    showInfo() {
        if(this.subscribers.length < 1) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let result = "";
        for (const subscriber of this.subscribers) {
            result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\n`;

            let booksAsStrs = []
            subscriber.books.forEach(book => {
                booksAsStrs.push(`${book.title} by ${book.author}`);
            });

            result += `Received books: ${booksAsStrs.join(", ")}\n`;
        }

        return result;
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());

