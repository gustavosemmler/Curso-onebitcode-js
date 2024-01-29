const word = prompt("Olá!!\n" +
"gostaria de saber se a pavra que você digitou é um palindromo? Então escreva uma palavra: ")
let InverseWord = ""

for(let i = word.length - 1; i >= 0; i--){
    InverseWord += word[i]
}

if(word === InverseWord) {
    alert(word + " é um palíndromo!")
} else {
    alert(word + " não é um palíndromo!\n\n" + word + " !== " + InverseWord)
}