const car1 = prompt("digite a velocidade do primeiro carro: ")
const car2 = prompt("digite a velocidade do segundo carro: ")

const x = parseFloat(car1)
const y = parseFloat(car2)

if(car1 > car2){
    alert("O carro 1 é mais rapido que o carro 2")
} else if (car1 < car2){
    alert("O carro 2 é mais rapido que o carro 1")
} else if(car1 === car2){
    alert("Os 2 carros possuem a mesma velocidade.")
}