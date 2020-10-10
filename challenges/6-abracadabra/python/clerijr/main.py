# -*- coding: utf-8 -*-
def main():
    magic_word = input("Digite a palavra: ")
    if len(magic_word) < 2 or len(magic_word) > 100:
        print("Digite uma palavra com no mínimo 2 caracteres e no máximo 100!")
    else:
        magic_word = magic_word.replace(' ', '')[:-3] #Isto remove os 3 últimos dígitos da string após remover os espaços.                      
        spaces = ' '                                  #Fiquei em dúvida se entrar com espaços deveria retornar erro ou se poderia tratar dessa forma.
        while len(magic_word) > 0:
            print('\n', end=spaces)
            for char in magic_word:
                print(f"{char}", end=" ")
            magic_word = magic_word[:-1]
            spaces = spaces + ' '

if __name__ == "__main__":
    main()