numero = int(input("Digite um número: "))

for i in range(numero):
    index = i + 1
    print("===========================")
    print(f"A tabuada do número {index} é:" )
    
    for j in range(10):
        multiplicador = j + 1
        multiplicação = index * multiplicador
        print(f"  {index}*{multiplicador} = {multiplicação}")
print("===========================")