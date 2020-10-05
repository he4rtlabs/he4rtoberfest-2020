try:
    baseMaior = float(input("Digite a base maior: "))
    baseMenor = float(input("Digite a base menor: "))
    altura = float(input("Digite a altura: "))

    area = (baseMaior + baseMenor) * altura / 2

    print(f"A área do trapézio é: {area:.2f}")
    
except ValueError:
    print("\nÉ necessario digitar apenas números!")
