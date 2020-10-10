# -*- coding: utf-8 -*-
def main():
    passWord = input("Digite sua senha alfanumérica, entre 6 e 32 caracteres: ")
    if passWord.isalnum() == False:
        print("Senha inválida; Apenas caracteres alfanuméricos!")
    elif len(passWord) < 6 or len(passWord) > 32:
        print("Senha inválida; Deve ter entre 6 e 32 caracteres!")
    else:
        passCheckUpper, passCheckLower, passCheckNumber = False, False, False
        for char in passWord:
            if ord(char) > 122:
                print('Senha inválida; Sem caracteres especiais ou acentuações!')
                exit()
            elif char.isupper():
                passCheckUpper = True
            elif char.islower():
                passCheckLower = True
            elif char.isnumeric():
                passCheckNumber = True
        if passCheckLower == True and passCheckUpper == True and passCheckNumber == True:
            print('Senha válida!')
        else:
            print('Senha inválida; No mínimo 1 maiúsculo, 1 menúsculo e 1 número.')
if __name__ == "__main__":
    main()
    