#encoding:utf8

number = int(input('Informe um número para verificar sua tabuada: '))

for i in range(1, number + 1):
    print('===========================')
    print('A tabuada do número ', i, ' é:')
    for n in range(1, 11):
        print(n, '*' ,i , '=', i * n)