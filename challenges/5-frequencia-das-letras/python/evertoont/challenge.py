casos_testes = int(input("Digite a quantidade de casos de testes: "))

for teste in range(casos_testes):
    palavra = input("Digite a palavra: ").lower()

    caracteres = {}

    for letra in palavra:
        if letra.isalpha() and letra not in caracteres:
            caracteres[letra] = palavra.count(letra)
        
    
    caracteres_ordenados = sorted(caracteres.items(), key=lambda v: (-v[1],v[0]))

    maior = caracteres_ordenados[0][1]
    resultado = ''
    
    for letra in caracteres_ordenados:
        if letra[1] == maior:
            resultado += letra[0]
        else:
            break

    print(resultado)