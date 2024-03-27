class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const eragon = new Book("eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon, eldest)

console.log(eragon instanceof Book)