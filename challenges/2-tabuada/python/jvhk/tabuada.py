num = int(input("Digite um número: "))
for x in range(num):
    indice = x + 1
    print("===========================")
    print(f"A tabuada do número {indice} é:" )
    for y in range(10): #printa as multiplicações 1*1 = 1 ...
        acumuladora = y+ 1
        mult = indice * acumuladora
        print(f"  {indice}*{acumuladora} = {mult}") #formato 1*1 = 1  para todos os números
print("===========================")