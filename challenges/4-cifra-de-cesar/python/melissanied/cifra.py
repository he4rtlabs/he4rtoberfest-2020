print("Insira o número de casos")
numeroCasos = int(input())

letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
decifrado = ""
listaMensagem = []
listaPosicao = []
listaDecifrado = []

while numeroCasos > 0:
    print("Insira a mensagem codificada")
    mensagem = input().upper()[:50]
    listaMensagem.append(mensagem)
    print("Insira o número de posições que cada letra foi deslocada para a direita")
    numeroPosicoes = int(input())
    listaPosicao.append(numeroPosicoes)
    if numeroPosicoes > 25 or numeroPosicoes < 0:
        print("Número inválido, apenas números de 0 a 25")
        break
    for caractere in mensagem:
        if caractere in letras:
            num = letras.find(caractere)
            num -= numeroPosicoes
            if num < 0:
                num += len(letras)
                decifrado += letras[num] 
            else:
                decifrado += letras[num]
        else:
            decifrado += caractere
    listaDecifrado.append(decifrado)
    numeroCasos -= 1
    decifrado = ""

print("")
for i in range(len(listaMensagem)):
    print("Mensagem:", listaMensagem[i])
    print("Número de deslocamento de posição:", listaPosicao[i])
    print("Decifrado:", listaDecifrado[i])
    print("------------------")