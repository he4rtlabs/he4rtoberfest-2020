# -*- coding: utf-8 -*-
def main():
    while True:
        cifra = input("Digite sua cifra: ")
        try:
            cifraPos = int(input("Digite quantas posições para decodificar: "))
        except ValueError:
            print("Você digitou um valor inválido! Apenas números!")
            break;
        else:
            decoded = '';
            for char in cifra:
                if (ord(char) - cifraPos) < 65:
                    char = chr((ord(char)-cifraPos)+26)
                else:
                    char = chr((ord(char)-cifraPos))
                decoded+=char;
            print("Decifrado: {} \n".format(decoded));
        buffer = input("Digite \"sair\" para sair do programa, qualquer outro valor para repetir\n");
        if buffer.upper() == "SAIR":
            break;
if __name__ == "__main__":
    main()