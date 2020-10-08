# -*- coding: utf-8 -*-
def main():
    try:
        caseNum = int(input("Digite o número de casos: "))
    except ValueError:
        print("Digite um valor válido!")
    else:  
        while caseNum > 0:
            cifra = input("Digite sua cifra com até 50 caracteres: ")
            if len(cifra) > 50:
                print("Digite uma mensagem com até 50 caracteres!")
                break
            try:
                cifraPos = int(input("Digite quantas posições para decodificar, de 0 a 25: "))
                while cifraPos < 0 or cifraPos > 25:
                    cifraPos = int(input("Digite um número válido entre 0 e 25: "))
            except ValueError:
                print("Você digitou um valor inválido! Apenas números!")
                break;   
            else:
                decoded = ''
                for char in cifra:
                    """ Este bloco if checa letra por letra, e atuará para maiúsculas e menúsculas """
                    upperBuffer = 97
                    if char.isupper():
                        upperBuffer = 65
                    """ Bloco principal para transformar as letras """
                    if (ord(char) - cifraPos) < upperBuffer:
                        char = chr((ord(char)-cifraPos)+26)
                    else:
                        char = chr((ord(char)-cifraPos))
                    decoded+=char
                print("Decifrado: {}".format(decoded));
                print("="*30)
                caseNum = caseNum - 1
if __name__ == "__main__":
    main()
