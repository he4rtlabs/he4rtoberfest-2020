print("Insira a quantidade de casos de teste")
casosTeste = int(input())

listaMensagem = []
listaFrequencia = []
listaNumero = []
alfabeto = "abcdefghijklmnopqrstuvwxyz"

for i in range(casosTeste):
    letrasUsadas = []
    frequenciaIndividual = []
    numeroMaior = 0
    numeroIndividual = []
    print("Insira o texto que deseja saber a frequência das letras")
    mensagem = input().lower()[:200]
    listaMensagem.append(mensagem)
    for letra in mensagem:
        if letra in alfabeto and letra not in letrasUsadas:
            letrasUsadas.append(letra)
            quantidade = mensagem.count(letra)
            if quantidade > numeroMaior:
                numeroMaior = quantidade
                frequenciaIndividual = []
                frequenciaIndividual.append(letra)
                numeroIndividual = []
                numeroIndividual.append(numeroMaior)
            elif quantidade == numeroMaior:
                frequenciaIndividual.append(letra)

    listaFrequencia.append(frequenciaIndividual)
    listaNumero.append(numeroIndividual)

for i in range(casosTeste):
    print("")
    print("Mensagem:", listaMensagem[i])
    print("Letras com maior frequência:", ''.join(sorted(listaFrequencia[i])))
    print("Quantidade de vezes que a letra aparece:", *listaNumero[i])
    print("-----------------------------")