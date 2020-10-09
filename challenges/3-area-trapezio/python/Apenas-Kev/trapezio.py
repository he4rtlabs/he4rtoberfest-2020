while True:
    try:
        altura = float(input('Qual a altura?: '))
        base_maior = float(input('Qual a base maior?: '))
        base_menor = float(input('Qual a base menor?: '))
        break;
    except ValueError:
        print(f'\n{"-" * 8} ERRO {"-" * 8}\nInsira somente numeros.\n')

print(f'A área do trapézio é: {(base_maior + base_menor) * altura / 2}')
