def classificar_produto(tipo, marca, avaliacoes, disponibilidade):
    if tipo == "Eletrônico" and marca == "Apple" and avaliacoes > 4.5 and disponibilidade:
        return "Categoria A - produtos premium"
    elif tipo == "Vestuário" and marca == "Gucci" and avaliacoes > 4.0 and disponibilidade:
        return  "Categoria B - Moda de Luxo"
    elif tipo == "Livro" and marca == "Penguin" and avaliacoes > 3.8 and disponibilidade:
        return "Categoria C - Leitura Recomendada"
    else:
        return "Categoria D - Outras Condições"