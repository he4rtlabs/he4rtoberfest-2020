class ContadorLetras:
    
    def __init__(self, texto):
        self._texto = texto
    
    def quantidade_letras(self):
        self._dicio = dict()
        for palavras in self._texto.lower().split(' '):
            for letras in palavras:
                self._dicio[letras] = self._dicio.get(letras, 0) + 1
        return self._dicio
    
    def retorna_porcentagem(self):
        proporcao = [(letras, frequencia / sum(self.quantidade_letras().values())) for letras, frequencia in
                     self.quantidade_letras().items()]
        print('Porcentagem de cada letra: ')
        for caractere, proporcao in proporcao:
            print(f'{caractere} = {100 * proporcao:.2f}%')


if __name__ == '__main__':
    texto = ''' Queria ser bom em Python'''
    a = ContadorLetras(texto)
    print(a.quantidade_letras())  # imrprime um dicionario com todas as letras
    a.retorna_porcentagem()  # imprime porcentagem de todas as letras contidas
