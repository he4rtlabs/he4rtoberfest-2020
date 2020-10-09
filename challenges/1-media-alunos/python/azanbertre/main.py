try:
    n1 = int(input('n1: '))
    n2 = int(input('n2: '))
    print('Média -> {:.1f}'.format((n1 + n2) / 2))
except ValueError:
    print('Argumentos inválidos')
