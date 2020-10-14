print("Bem vindo a calculadora de médias:")
print()
print("Insira as notas separadas por espaço: Ex 6.6 9.1 3.3 ...")

notas = input().split(' ')

try:
    sum_ = sum([float(nota) for nota in notas])
    media = sum_ / len(notas)

    print("Sua Média é: {:0.2f}".format(media))
except ValueError as identifier:
    print("Insira apenas valores inteiros ou racionais!")
