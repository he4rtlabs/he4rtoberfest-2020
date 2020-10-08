lista = []

def fibonacci(num: int):
    for i in range(1, num):
        if i==1:
            lista.append(1)
            i += 1
        if i==2:
            lista.append(1)
        else:
            valor = lista[i-1] + lista[i-2]
            lista.append(valor)
    lista[0] = 0
    for elementos in lista:
        string = f'{elementos}'
        print(string.removesuffix(' '), end=' ')

def executa():
    valor = int(input())
    fibonacci(valor)

if __name__ == '__main__':
    executa()