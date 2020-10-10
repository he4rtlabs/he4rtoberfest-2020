# -*- coding: utf-8 -*-
def main():
    def fibonacci(n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        return fibonacci(n-1) + fibonacci(n-2)
    try:
        nElements = int(input("Digite o número: "))
        if nElements < 0 or nElements > 46:
            nElements = int(input("Digite um número intero entre 0 e 46!"))
            exit()
    except ValueError:
        print("Digite um número inteiro válido!")
        exit()
    else:
        fiboElements = ''
        for elements in range(nElements):
            fiboElements += str(fibonacci(elements)) + " "
        print(fiboElements.strip())
if __name__ == "__main__":
    main()