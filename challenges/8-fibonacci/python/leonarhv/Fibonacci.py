# Fibonacci

def fibo(n):
    if (n == 1):
        return 0
    elif (n == 2):
        return 1
    else:
        return fibo(n-1) + fibo(n-2)

print(f'{"Sequência de Fibonacci":-^50}')

totalNumbers = int(input('Quantos números da sequência você deseja ver? '))

while (totalNumbers >= 46 or totalNumbers <= 0):    
    print('Sequência inválida! Por favor, tente informar um número entre 0 e 46')
    totalNumbers = int(input('Quantos números da sequência você deseja ver?'))

for c in range(1, totalNumbers + 1):
    print(fibo(c))
    
