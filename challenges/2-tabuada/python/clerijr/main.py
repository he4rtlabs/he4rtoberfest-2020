# -*- coding: utf-8 -*-
def main():
    while True:
        num = (input("Digite o número que você deseja ou \"sair\" para parar o programa: "))
        if num.upper() == "SAIR":
            break;
        try:
            int(num)
        except ValueError:
            print("Você digitou um valor inválido!")
        else:
            for i in range(int(num)):
                print("="*30);
                print("A tabuada do número {} é: ".format(i+1))
                for j in range(10):
                    print("{} * {} = {}".format(i+1, j+1, ((i+1)*(j+1))));
if __name__ == "__main__":
    main()
