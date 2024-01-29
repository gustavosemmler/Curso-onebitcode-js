const metros = parseFloat(prompt("Digite um valor em metros: "))
const medidas = prompt("para qual medida você gostaria de converter? milímetro(mm) centímetro(cm) decímetro(dm) decâmetro(dam) hectômetro(hm) quilômetro(km)")

switch (medidas){
    case "mm":
        alert("sua conversão de " + (metros) + " metros para mm deu " + (metros * 1000) + " milimetros")
        break
    case "cm":
        alert("sua conversão de " + (metros) + " metros para cm deu " + (metros * 100) + " centimetros")
        break
    case "dm":
        alert("sua conversão de " + (metros) + " metros para dm deu " + (metros * 10) + " decimetros")
        break
    case "dam":
        alert("sua conversão de " + (metros) + " metros para dam deu " + (metros * 0.1) + " decâmetros")
        break
    case "hm":
        alert("sua conversão de " + (metros) + " metros para hm deu " + (metros * 0.01) + " hectômetros")
        break
    case "km":
        alert("sua conversão de " + (metros) + " metros para km deu " + (metros * 0.001) + " quilômetros")
        break
    default:
        alert("você inseriu uma opção inválida, tente com uma das anteriores")
}