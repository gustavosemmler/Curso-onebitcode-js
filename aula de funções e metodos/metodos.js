let pessoa = {
    nome: "Gustavo",
    idade: 23,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()