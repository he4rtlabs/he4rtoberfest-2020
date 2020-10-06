print('-'*40)
print('Sequência de Fibonacci'.center(40))
print('-'*40)


def Fibonacci(elementos):
    contador = 1

    termo_1 = 0
    termo_2 = 1
    termo_3 = 0

    while contador <= elementos:
        print(termo_1, end=' ' if elementos < contador else ' -> ')
        termo_3 = termo_1 + termo_2
        termo_1 = termo_2
        termo_2 = termo_3
        contador += 1

while True:
    try:
        elementos = int(input("Digite a quantidade de elementos: "))
        while 0 < elementos > 46:
            print("O máximo aceito são 46 elementos.")
            elementos = int(input("Digite a quantidade de elementos: "))
    except (ValueError, TypeError):
        print("Digite um número INTEIRO, por favor.")
    else:
        break
Fibonacci(elementos)
print("FIM")
