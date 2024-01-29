function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a,b)
    return resultado
}

function somar (x, y) {
    console.log("Realizando uma soma.")
    return x+y
}

//calcular(3,5,somar)

//calcular(8,4, )

function exibirElemento(elemento, indice, array) {
    console.log({
       elemento,
       indice,
       array 
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array){
    console.log(
        indice,
        elemento,
        array
    )
})