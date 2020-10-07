class CifraCesar:
    # So aceita palavras que estejam entre A - Z(SEM CARACTERES ESPECIAIS)
    # Em caso de espaço a palavra irá concatenar sem o espaço
    def __init__(self, palavra, posicao=2, brute_force=False):
        self.__palavra = palavra.upper()
        self.__posicao = posicao
        self.__brute_force = brute_force
    
    def palavra(self):
        self.alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        nova_palavra = ''
        lista = []
        self.__posicao_letra = [self.alfabeto.index(letra) for letras in self.__palavra for letra in self.alfabeto if
                                letra == letras]
        if self.__brute_force:
            # imprime uma lista com todas as variações de 1 até 25
            for c in range(1, 26):
                for posicao in self.__posicao_letra:
                    nova_palavra += self.alfabeto[posicao - c]
                    if len(nova_palavra) == len(self.__palavra):
                        lista.append(nova_palavra)
                        nova_palavra = ''
                print(f'+{c}: {lista[c - 1]}')
        else:
            # imprime apenas a palavra e sua posição de acordo com o que você escolheu (CASO O BRUTE FORCE ESTEJA DESATIVADO - False)
            for posicao in self.__posicao_letra:
                nova_palavra += self.alfabeto[posicao - self.__posicao]
            print('Palavra encriptada:', nova_palavra)


if __name__ == '__main__':
    # A posição troca cada letra pelo equivalente a posição à esquerda no alfabeto, de acordo com a posição no qual você escolheu
    # Por a posicao default está como 2
    # Use o BRUTER_FORCE para encontrar a palavra decrpitada e sua posição
    CifraCesar('Topcoder', posicao=2).palavra()
    CifraCesar('VQREQFGT', brute_force=True).palavra()
