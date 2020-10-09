while True:
    try:
        numero = int(input('Insira o numero para receber a tabuada: '))
        break;
    except ValueError:
        print(f'{"-" * 13} ERRO {"-" * 13 }\nInsira somente numeros inteiros.\n')
print(f'\n{"="*27}')
for var in range(1, numero + 1):
    print(f'A tabuada do numero {var} é:')
    for tabuada in range(1,11):
        print(f'  {var} * {tabuada} = {var * tabuada}')
    print('=' * 27)