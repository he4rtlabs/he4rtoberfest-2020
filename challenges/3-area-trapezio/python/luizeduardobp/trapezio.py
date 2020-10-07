try:
    maior = int(input("Digite o valor da base maior: "))
    menor = int(input("Digite o valor da base menor: "))
    altura = int(input("Digite o valor da altura: "))

    area = ((menor + maior) * altura) / 2
    print("A area do trapezio é: {}".format(area))

except ValueError:
    print("Uma das entradas não corresponde a números, por favor corrija")

