/*const primeiroNome = prompt("informe o primeiro nome do recruta: ")
const sobrenome = prompt("informe o sobrenome do recruta: ")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta? ")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta: ")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento)
)*/

const entrada1= prompt("informe o primeiro número: ")
const entrada2= prompt("informe o segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao +
    "\nSeu resultado, independente dos números, é que o flip3 mama muitos cacetes"
)