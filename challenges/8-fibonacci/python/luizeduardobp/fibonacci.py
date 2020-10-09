numero=int(input("Digite um numero: "))
if numero <=0 or numero>=46:
    print("Digite um numero entre 0 e 46")
else:
    prox=1
    atual=1
    anterior=0
    if numero==1:
        print("0")
    if numero==2:
        print("0 1")
    if numero>2:
        print("0 1", end=' ')
        for i in range(numero-2):
            proximo = anterior + atual
            anterior = atual
            if i!=(numero-3):
                print(proximo, end=' ')
            elif i==(numero-3):
                print(proximo)
            atual = proximo