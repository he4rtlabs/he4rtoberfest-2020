while True:
    try:
        qtd_notas = int(input('Digite a quantidade de notas: '))

        soma = 0
        for indice in range(qtd_notas):
            notas = float(input(f'Nota {indice+1}: '))
            soma += notas

        media = soma/qtd_notas

        print(f'\nMédia: {media:.2f}')

    except ValueError:
        print('\nValor inválido!\n')

    else:
        break
