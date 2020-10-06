while True:
    try:
        b_maior = int(input('Digite o comprimeto da base Maior: '))
        b_menor = int(input('Digite o comprimeto da base Menor:'))
        altura = int(input('Digite a altura: '))
    except (ValueError, TypeError):
        print('Digite apenas números!')
    else:
        print(f'A área do trapézio é: {(b_maior + b_menor) * altura / 2}')
