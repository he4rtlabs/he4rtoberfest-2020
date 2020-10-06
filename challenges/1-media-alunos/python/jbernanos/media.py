def dados():
    quantidade = int(input('Informe o número de notas: '))
    total = 0
    for n in range(quantidade):
        notas = int(input(f'Informe a nota {n + 1}: '))
        total += notas
    media(total, quantidade)
    return total


def media(t, q):
    calculo = t / q
    print(f'A média do aluno é: {calculo}')


dados()
