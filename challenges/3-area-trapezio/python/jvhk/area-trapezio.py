baseMaior = float(input("Digite o valor da base maior do trapézio: "))
baseMenor = float(input("Digite o valor da base menor do trapézio: "))
altura = float(input("Digite o valor da altura do trapézio: "))

Area = (baseMaior + baseMenor) * altura / 2

print("A área do trapézio é: {:.1f}".format(Area))