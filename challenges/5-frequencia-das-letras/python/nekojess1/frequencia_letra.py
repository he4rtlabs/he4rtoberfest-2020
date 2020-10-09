nCasos = int(input())    
alfabeto = 'abcdefghijklmnopqrstuvwxyz'   #Adicionamos o alfabeto para comparar se o elemento está inserido nele

for t in range(nCasos):                   #Loop de acordo com a quantidade de casos
    frase = input().lower()               
    lista_letras = []                     #Lista contendo a(s) letra(s) com maior(es) ocorrência(s)
    maior = 0
    letras_utilizadas = []                #Evitar contar a mesma letra mais de 1 vez

    for letra in frase:                   #Loop que percorre todos os elementos da frase
        if (letra in alfabeto) and (letra not in (letras_utilizadas)):        #Se o elemento pertencer ao alfabeto e não tiver sido utilizado
            contador = frase.count(letra)                                 #Conta a quantidade de vezes que a letra aparece

            if (contador == maior):                                       # Se a quantidade de ocorrências dessa letra for igual a maior ocorrência existente
                lista_letras.append(letra)

            elif (contador > maior):                                      # Se a quantidade de ocorrências dessa letra for maior que a maior ocorrência existente
                lista_letras.clear()
                lista_letras.append(letra)
                maior = contador
            letras_utilizadas.append(letra)
    print(''.join(sorted(lista_letras)))