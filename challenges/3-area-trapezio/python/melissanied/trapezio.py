try:
  print("Programa para calular a área de um trapézio :)")
  print("Insira o valor da base maior")
  baseMaior = float(input())
  print("Insira o valor da base menor")
  baseMenor = float(input())
  print("Insira o valor da altura")
  altura = float(input())

  area = (baseMaior + baseMenor) * altura / 2

  print("A área do trapézio é", area)

except ValueError:
  print("O valor inserido não é um número, apenas números são válidos")
