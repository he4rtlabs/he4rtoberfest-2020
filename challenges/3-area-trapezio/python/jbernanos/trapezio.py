try:
    def dados():
        altura = float(input('Informe o valor da altura do trapézio: '))
        base_maior = float(input('Informe o valor da base maior: '))
        base_menor = float(input('Informe o valor da base menor: '))
        area(altura, base_maior, base_menor)
        return altura, base_maior, base_menor

    def area(a, bma, bme):
        calculo = (bma + bme) * a / 2
        print(f'A área de um trapézio com altura {a}, base maior {bma} e base menor {bme} é: {calculo}!')

    dados()

except ValueError:
    print('Dado não aceito por não ser um número.')
