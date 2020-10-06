while True:
    try:
        palavra = input('Digite uma palavra: ')
        print('\n')
        lista_letras = []
        for letra in palavra:
            lista_letras.append(letra)
        
        tamanho_string = len(lista_letras)
        
        for cont in range(0, len(lista_letras)):
            for cont_2 in range(cont):
                print('', end=' ')
            
            for cont_2 in range(tamanho_string):
                print(lista_letras[cont_2], end='')

                if (cont_2 != tamanho_string -1):
                    print(' ', end='')

            print('')
            tamanho_string -= 1
        print('')

    except EOFError:
        break