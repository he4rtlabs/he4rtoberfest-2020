try:
    bMa = int(input('base maior: '))
    bMe = int(input('base menor: '))
    alt = int(input('altura: '))

    a = (bMa + bMe) * alt / 2
    print('A área do trapézio é: {:.1f}'.format(a))
except ValueError:
    print('Argumento Inválido')
