import re

def validator(string):

    flagUpper = False
    flagLower = False
    flagNum = False

    if len(string) < 6 or len(string) > 32:         # Testa tamanho
        return "Senha invalida."
    for letter in string:
        if not re.match("[a-zA-Z0-9]", letter):     # Testa caracters especiais
            return "Senha invalida."
        if letter.isupper():                        # Testa caracter maisculo
            flagUpper = True
        if letter.islower():                        # Testa caracter minusculo
            flagLower = True
        if letter.isnumeric():                      # Testa numero
            flagNum  = True
    if flagUpper and flagLower and flagNum:
        return "Senha valida."
    else:
        return "Senha inválida."


def main():
    print("Validador de Senhas")
    print()
    string = input("Senha: ")
    print()
    res = validator(string)
    print(res)



if __name__ == "__main__":
    main()

