while True:
    try:
        b_maior = int(input('Digite um número: '))
    except (ValueError, TypeError):
        print('Digite apenas números!')
    else:
        try:
            b_menor = int(input('Digite um número: '))
        except(ValueError, TypeError):
            print('Digite apenas números!')
        else:
            try:
                altura = int(input('Digite um número: '))
            except(ValueError, TypeError):
                print('Digite apenas números!')
            else:
                print(f'A área do trapézio é: {(b_maior + b_menor) * altura / 2}')
            
