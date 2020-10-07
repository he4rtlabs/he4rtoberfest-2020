print("====================================================================")
print("Bem vindo ao melhor programa de calcular médias da história do piton")

print("Insira suas notas separadas por espaço! Ex: 5.5 6.7 9.1 0.7...")
raw_notas = input().split(" ")

try:
    suma = sum([float(nota) for nota in raw_notas])
    print(f"\nSua média foi: {suma/len(raw_notas)}\n")
except ValueError:
    print('\nArgumentos inválidos, Insira como no exemplo!\n')

print("====================================================================")
