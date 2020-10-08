palavra = input("Digite a palavra: ")
espaços = 0
palavra_tamanho = len(palavra)

for char in palavra:
    print(" " * espaços, end="")
    
    for i in range(palavra_tamanho):
        print(palavra[i], end=" ")
    
    espaços += 1
    palavra_tamanho -= 1
    print()
    