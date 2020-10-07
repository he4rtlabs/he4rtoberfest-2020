def main():
    while True:
        try:
            baseMaior = float(input("Qual o valor da base maior do trapézio? "))
            baseMenor = float(input("E o valor da base menor? "))
            altura = float(input("Qual a altura do trapézio? "))
        except ValueError:
            print("Você digitou um valor inválido! Digite apenas números!")
        else:
            area = ((baseMaior+baseMenor)*altura)/2;
            print("A área do trapézio é: {:2}".format(area))
        buffer = input("Digite \"sair\" para sair do programa, qualquer outro valor para repetir\n");
        if buffer.upper() == "SAIR":
            break;
if __name__ == "__main__":
    main()
