const nameP1 = prompt("Digite o nome do seu personagem: ")
const powerP1 = parseFloat(prompt("Digite o número de ataque do seu personagem: "))
const nameP2 = prompt("Digite o nome do seu inimigo: ")
let lifeP2 = parseFloat(prompt("Quantos pontos de vida tem seu inimigo? "))
const defP2 = parseFloat(prompt("Qual é o poder de defesa do seu inimigo? "))
const shield = prompt("Seu inimigo tem um escudo?  (sim/não)")

let danoCausado = 0

if(powerP1 > defP2 && shield === "não"){
    danoCausado = powerP1 - defP2
} else if (powerP1 > defP2 && shield === "sim"){
    danoCausado = (powerP1 - defP2) / 2
} 

lifeP2 -= danoCausado

alert(nameP1 + " causou " + danoCausado + " pontos de dano em " + nameP2)

if (danoCausado >= lifeP2 ){
    alert("o Seu personagem derrotou o inimigo")
}
 
alert(
   `${nameP1} \nPoder de ataque:  ${powerP1}  \n\n` 
  nameP2 + "\nPontos de vida: " + lifeP2 +
  "\nPoder de defesa: " + defP2 + "\nPossui escudo: " + shield
)