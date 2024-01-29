let pokemon = "Charmander"

function evoluir () {
    pokemon = "charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)        //escopo é contexto onde a variavel foi declarada

function criarAnimal(){
    let animal = "Gato"
}                           //variaveis criadas no escopo mais interno não funcionam no escopo externo

criarAnimal()
console.log(animal)