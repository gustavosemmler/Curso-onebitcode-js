function step02() {
    console.log('passo 2')
}

console.log('passo 1')
step02()
console.log('passo 3')

console.log('passo 4')
setTimeout(() => {
    console.log('passo 5')
}, 1000 * 3);

console.log('passo 6')