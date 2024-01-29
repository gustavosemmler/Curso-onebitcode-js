const num = prompt("Digite um número: ")

let resultado = ""

for(let i = 0; i<=20; i++){
    resultado += " -> " + num + " * " + i + " = " + (num * i) + "\n"
}

alert ("Resultado da tabuada de " + num + ":\n\n" + resultado)