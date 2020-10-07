try:
        
    base_maior = float(input('Base maior: '))

    base_menor = float(input('Base menor: '))

    altura = float(input('Altura: '))

    Area = (base_maior + base_menor) * altura / 2

    print("A área do trapézio é: {}".format(Area))
except Exception as e:
    print(e)