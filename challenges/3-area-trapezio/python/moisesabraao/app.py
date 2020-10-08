#encoding:utf8

while True:
    try:
        baseMaior = float(input('Informe o valor da base maior do trapézio: '))
        baseMenor = float(input('Informe o valor da base menor do trapézio: '))
        altura = float(input('Informe o valor da altura do trapézio: '))
    except ValueError:
        print("Valor inválido! Informe apenas números!")
    else:
        resultado = ((baseMaior + baseMenor) * altura) / 2
        print("A área do trapézio é: ", resultado)
        break