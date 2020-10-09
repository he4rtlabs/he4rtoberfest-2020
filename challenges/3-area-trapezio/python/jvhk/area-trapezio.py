try:
    baseMaior = float(input("Digite o valor da base maior do trapézio: "))
except ValueError:
    baseMaior = float(input("O valor digitado não é um número, digite um número para a base maior do trapézio: "))

try:
    baseMenor = float(input("Digite o valor da base menor do trapézio: "))
except ValueError:
    baseMenor = float(input("O valor digitado não é um número, digite um número para a base menor do trapézio: "))

try:
    altura = float(input("Digite o valor da altura do trapézio: "))
except ValueError:
    altura = float(input("O valor digitado não é um número, digite um número para a altura do trapézio: "))

Area = (baseMaior + baseMenor) * altura / 2

print("A área do trapézio é: {:.1f}".format(Area))