# -*- coding: utf-8 -*-
""" Falta só um try except pra ficar legalzin """
def main():
    while True:
        num = (input("Opa, digite o número que você deseja, digite sair para parar o programa: "))
        if num.upper() == "SAIR":
            break;
        else:
            for i in range(int(num)):
                print("="*30);
                print("A tabuada do número {} é: ".format(i+1))
                for j in range(10):
                    print("{} * {} = {}".format(i+1, j+1, ((i+1)*(j+1))));
if __name__ == "__main__":
    main()
