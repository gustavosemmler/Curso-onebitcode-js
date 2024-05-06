function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if(typeof weight !== 'number' || typeof height !== 'number') 
            reject('arguments must be of type number')
         else 
            resolve(weight / (height * height))
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        console.log(`O resultado do IMC foi de ${result}.`)

        if(result <18.5) console.log('Situação: Magreza')
        else if (result < 25) console.log('Situação: normal')
        else if (result < 30) console.log('Situação: Sobrepeso')
        else if (result < 40) console.log('situação: Obesidade')
        else console.log('Situação: Obesidade grave')
    }).catch((err) => {
        console.log(err)
    }) 

    console.log(`calculando o IMC para peso de ${weight} e altura de ${height}...`)
}

showImc(108, 1.86)
showImc(48, 1.75)
showImc(54, 'arroz')
showImc(108, 1.55)
showImc(120, 1.96)