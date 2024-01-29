const nome = prompt("Qual o nome do turista?")
let cidades = ""
let contagem = 0


let continuar = prompt("Você já visitou alguma cidade? s/n")

while (continuar === "s"){
    let cidade = prompt("Qual o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? s/n")
}

alert(
    "turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)
