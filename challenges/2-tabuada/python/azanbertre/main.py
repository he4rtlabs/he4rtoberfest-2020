try:
    t = int(input('t: '))
    for i in range(1, t + 1):
        print('===========================')
        print('A tabuada do numero {} é:'.format(i))

        for j in range(1, 11):
            print('  {}*{} = {}'.format(i, j, i * j))
    print('===========================')
except ValueError:
    print('Argumento Inválido')
