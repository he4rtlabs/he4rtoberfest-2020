numero = int(input("Digite um número: "))
print(f"Vou te mostrar a tabuada de todos os números até o {numero}.")

for tabuada in range(1, numero+1):
    print("===========================")
    print(f"A tabuada do numero {tabuada} é: ")
    for c in range(1, 11):
        print(f"  {tabuada}*{c} = {c*tabuada}")
print("===========================")
