// const book = {
//     title: "eragon",
//     pages: 468,
//     published: true,
//     inStock: 7,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Chistopher Paolini"
//     },
//     addOnStock(quantity) {
//         this.inStock += quantity
//     }
// }

//PascalCase(primeira letra maiúscula)
function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this. inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function() {
        //salva no banco de dados
    }
}

const author = { name: "Cristopher Paolini"}
const tags = ["fantasy", "adventure"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)