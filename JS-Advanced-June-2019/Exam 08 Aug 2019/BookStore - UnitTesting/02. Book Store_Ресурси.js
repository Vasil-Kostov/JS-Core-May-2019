const assert = require("chai").assert;

class BookStore {
    constructor(name) {
        this.name = name;
        this.books = [];
        this._workers = [];
    }

    get workers() {
        return this._workers;
    }

    stockBooks(newBooks) {
        newBooks.forEach((book) => {
            let [title, author] = book.split('-');
            this.books.push({ title, author });
        });

        return this.books;
    }

    hire(name, position) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            worker = {
                name: name,
                position: position,
                booksSold: 0
            };
            this.workers.push(worker);
        } else {
            throw new Error('This person is our employee');
        }
        return `${name} started work at ${this.name} as ${position}`
    }

    fire(name) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            throw new Error(`${name} doesn't work here`);
        }
        let index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        return `${name} is fired`;
    }

    sellBook(title, workerName) {
        let book = this.books.filter(b => b.title === title)[0];
        if (!book) {
            throw new Error('This book is out of stock');
        }

        let worker = this.workers.filter((w) => w.name === workerName)[0];
        if(!worker){
            throw new Error(`${workerName} is not working here`)
        }

        this.books = this.books.filter(b => b.title !== title);
        this.workers.filter(w => w.name === workerName).map(w => w.booksSold++);
    }

    printWorkers() {
        let result = "";
        this.workers.forEach(w => {
            result += `Name:${w.name} Position:${w.position} BooksSold:${w.booksSold}\n`;
        })
        return result.trim();
    }
}

describe("BookStore tests", function () {
    let bookStore;

    this.beforeEach(() => {
        bookStore = new BookStore("MyStore");
    })

    describe("Constructor tests", () => {
        it("Should set name and props correctly", () => {
            assert.equal(bookStore.name, "MyStore");
            assert.isTrue(bookStore.hasOwnProperty("books"));
            assert.isTrue(bookStore.hasOwnProperty("_workers"));
            assert.deepEqual(bookStore.books, []);
            assert.deepEqual(bookStore._workers, []);
        });
    })

    describe("StoreBooks tests", () => {
        it("Should add all books to books prop", () => {
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

            let expected = [{ title: "Inferno", author: "Dan Braun"}, { title: "Harry Potter", author: "J.Rowling"}, { title: "Uncle Toms Cabin", author: "Hariet Stow"}, { title: "The Jungle", author: "Upton Sinclear"}];
            assert.deepEqual(bookStore.books, expected);
        }) 

        it("Should return the books", () => {
            let actual = bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            let expected = [{ title: "Inferno", author: "Dan Braun"}, { title: "Harry Potter", author: "J.Rowling"}, { title: "Uncle Toms Cabin", author: "Hariet Stow"}, { title: "The Jungle", author: "Upton Sinclear"}];
            
            assert.deepEqual(actual, expected)
        });

        it("Should add correct amount books to books prop", () => {
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

            let actual = bookStore.books.length;

            assert.equal(actual, 4);
        })
    })

    describe("hire tests", () => {
        it("Should add the worket to workers prop", () => {
            bookStore.hire("Pesho", "Boss");
            let expected = [{
                name: "Pesho",
                position: "Boss",
                booksSold: 0
            }]
            assert.deepEqual(bookStore.workers, expected)
        });

        it("Should throw exeption if worker is already hired", () => {
            bookStore.hire("Pesho", "Boss");

            assert.throws(()=> bookStore.hire("Pesho", "Boss"));
        })

        it("Should add the worker and return propper message", () => {
            let actual = bookStore.hire("Pesho", "Boss");
            
            let expected = `Pesho started work at MyStore as Boss`;

            assert.equal(actual, expected)
        });
    })

    describe("fire tests", () => {
        it("Should remove worket from workers prop", () => {
            bookStore.hire("Pesho", "Boss");
            let expected = []
            bookStore.fire("Pesho");
            assert.deepEqual(bookStore.workers, expected)
        });

        it("Should retur propper message", () => {
            bookStore.hire("Pesho", "Boss")
            let actual = bookStore.fire("Pesho");
            let expected = `Pesho is fired`;

            assert.equal(actual, expected);
        });

        it("Should throw exeption if worker is not hired", () => {

            assert.throws(()=> bookStore.fire("Pesho"));
        });
    })

    describe("sellBook tests", () => {
        it("Should increase the sold books prop in the worker's object", () => {
            bookStore.hire("Pesho", "Boss")
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            bookStore.sellBook("Inferno", "Pesho");

            let expected = [{
                name: "Pesho",
                position: "Boss",
                booksSold: 1
            }];

            assert.deepEqual(bookStore.workers, expected);
        });

        it("Should throw exeption if book is not present", () => {
            bookStore.hire("Pesho", "Boss")

            assert.throws(() => bookStore.sellBook("Some book", "Pesho"));
        })

        it("Should throw exeption if book is not present", () => {
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

            assert.throws(() => bookStore.sellBook("Inferno", "Pesho")); //TODO check for the messages!
        })
    })

    describe("PrintWorkers tests", () => {
        it("Should return correct information", () => {
            bookStore.hire("Pesho", "Boss")

            let expected = `Name:Pesho Position:Boss BooksSold:0`;
            let actual = bookStore.printWorkers();
            assert.equal(actual, expected);
        })
    })
})