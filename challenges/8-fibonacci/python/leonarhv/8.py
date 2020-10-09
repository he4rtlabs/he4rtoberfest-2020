# Fibonacci

print(f'{"Sequência de Fibonacci":-^50}')

totalNumbers = int(input('Quantos números da sequência você deseja ver? '))

while (totalNumbers >= 46 or totalNumbers <= 0):    
    print('Sequência inválida! Por favor, tente informar um número entre 0 e 46')
    totalNumbers = int(input('Quantos números da sequência você deseja ver? '))

last = 0
current = 1
carry = 0

for c in range(1, totalNumbers):
    if (last == 0):
        print(last, end=" ")

    print(current, end=" ")
    carry = last
    last = current
    current += carry
