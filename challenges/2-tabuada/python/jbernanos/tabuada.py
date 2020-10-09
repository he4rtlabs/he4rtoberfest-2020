def dados():
    numero = int(input('Informe até qual número deseja ver a tabuada: '))
    tabuada(numero)
    return numero

def tabuada(numero):
    for i in range(1, numero + 1):
        print(' ')
        print(f'A tabuada do numero {i} é:')
        for k in range(1, 11, 1):
            calculo = i * k
            print(f'{i} x {k} = {calculo}')

dados()
