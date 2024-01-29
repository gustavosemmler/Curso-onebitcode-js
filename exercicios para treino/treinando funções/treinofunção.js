function bv() {
    alert("Boas vindas ao site")
}

//bv()

function oddEven (a) {
    if (a%2 === 0) {
        console.log("número par")
    } else {
        console.log("número impar")
    }
}

//oddEven(7)

function mediaArt() {
    let a = [];
    let sum = 0;

    // Solicitar à pessoa que insira 5 números
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt("Digite o número " + (i + 1) + ":"));

        // Verificar se a entrada é um número válido
        if (!isNaN(num)) {
            a.push(num);
            sum += num;
        } else {
            // Se a entrada não for um número válido, decrementar o índice para repetir a iteração
            i--;
            alert("Por favor, insira um número válido.");
        }
    }

    // Calcular e exibir a média aritmética
    console.log("A média aritmética é " + sum / a.length);
}

//mediaArt();

function palavra(a) {
    return a
}

//console.log(palavra("naruto".toUpperCase()))

/*function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            return false;
        }
    }
    return true;
}

let determinadoNumero = 50;

for (let i = 2; i < determinadoNumero; i++) {
    if (primeNumber(i)) {
        console.log(i);
    }
} */

/*const multi = (n1, n2) => n1*n2
console.log(multi(145,10))
*/

//const gritar = s => s.toUpperCase()
//console.log(gritar("caralho"))

const mult = (a,b) => a * b
console.log(mult(2,4))

const treino = (n,b) => n + b 
console.log(treino(24,24))
