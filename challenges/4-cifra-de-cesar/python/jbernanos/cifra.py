try:
    def dados():
        alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z']
        n_casos = int(input('Informe o número de casos: '))
        for i in range(n_casos):
            n_pos = int(input('Informe o número de posições a serem modificadas: '))
            mensagem = str(input('Informe a mensagem: ')).upper().strip()
            cifra(alfabeto, n_pos, mensagem)


    def cifra(a, np, msg):
        cc = ''
        for i in range(len(msg)):
            for k in range(len(a)):
                if msg[i] == a[k]:
                    cc = cc + a[k - np]
        print(cc)


    dados()

except ValueError:
    print('Dado inválido!')
