pontos_totais = 0
divisao = 0
while True:
    try:
        provas = int(input('Qual a quantidade de provas? '))
        break;
    except ValueError:
        print('Por favor, insira apenas numeros inteiros')
while True:
    try:
        while (provas > 0):
            pontos_totais = pontos_totais + float(input('Insira uma nota: '))
            divisao = divisao + 1
            provas = provas - 1
        print(f'A média de pontos entre {divisao} provas foi {pontos_totais / divisao :.1f}')
        break;
    except ValueError:
        print('Por favor, insira apenas numeros')
