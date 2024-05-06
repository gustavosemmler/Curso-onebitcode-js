//pendente - pending
//resolvida - resolved
//resejeitada - rejected

// const p = new Promise((resolve, reject) => {
//     console.log('A promise está sendo executada')
//     setTimeout(() => {
//         if(true) {
//             reject(false)
//         }
//         console.log('blablabla')
//         resolve('concluida')
//     }, 2000);
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 3000);

function execute() {
    // faz alguma coisa

    return new Promise((resolve, reject) => {
        console.log('a promise está sendo executada...')
        setTimeout(() => {
            console.log('resolvendo a promise')
            resolve('resultado')
        }, 1000);
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 3000);