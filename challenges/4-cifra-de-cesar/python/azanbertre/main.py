import string

casos = None

try:
    casos = int(input('casos: '))
except ValueError:
    print('Argumento Inválido')

if casos:
    for _ in range(casos):
        print('===========================')
        msg = input('mensagem: ')

        try:
            posicoes = int(input('posicoes: '))
        except ValueError:
            print('Argumento Inválido')
            break

        alp = list(string.ascii_uppercase)

        dec = []
        for c in msg:
            idx = alp.index(c.upper())
            n_idx = idx - posicoes if idx - posicoes >= 0 else len(alp) + idx - posicoes
            dec.append(alp[n_idx])

        print('Decifrado: {}'.format(''.join(dec)))

    print('===========================')
