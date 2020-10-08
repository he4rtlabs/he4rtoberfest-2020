while True:
    try:
        altura = float(input('Qual a altura?: '))
        base_maior = float(input('Qual a base maior?: '))
        base_menor = float(input('Qual a base menor?: '))
        break;
    except ValueError:
        print('-------- ERRO --------\nInsira somente numeros.')

print(f'A área do trapézio é: {(base_maior + base_menor) * altura / 2}')
