function dobro(x) {
    alert("O dobro de " + x + " é " + (x*2))
}

//dobro(5)

function dizerOla(name = "mundo") {
    alert("Olá, " + name + "!")
}

//dizerOla("Gustavo")
//dizerOla()

function soma(a, b, c, d, e){
    alert("O resultado da soma é " + (a+b+c+d+e))
}

//soma(1, 1, 4, 5, 6)

function criarUsuario(nome, email, senha, tipo = "adm"){
    const usuario = {
        nome, //mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

criarUsuario("Gustavo", "gustavo@gmail", "1234")