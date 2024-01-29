function dividir(num) {
    console.log(num)
    if(num % 2 === 0) {
        dividir(num/2)
    } else {
        return num
    }
}

//dividir(1200)   //isso é uma função recursiva, uma função que fica chamando ela mesmo.

function fatorial (num) {
    console.log("Número: " + num)
    if(num === 0 || num === 1){ //caso base
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(100))