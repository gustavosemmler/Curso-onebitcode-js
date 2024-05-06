const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Deus abençoe a todos")

post.addComment("Gustavo Semmler", "Amém você também")
post.addComment("asoijdiaos", "oauihsdfioashf")

console.log(john)
console.log(post)