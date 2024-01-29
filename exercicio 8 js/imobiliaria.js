const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo(a) ao Cadastro de imóveis!\n" +
        "Total de imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista imóveis\n 3. Sair"
    )

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros o imóvel possui?")
            imovel.garagem = prompt("O imóvel possui garagem? (sim/não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n"+
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando pro inicio.")
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) + 
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, escolha umas das anteriores.")
    }

} while (opcao !== 3)