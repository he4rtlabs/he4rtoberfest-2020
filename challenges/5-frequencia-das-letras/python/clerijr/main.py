def main():
    try:
        nCases = int(input("Digite o número de casos: "))
    except ValueError:
        print("Dígito inválido! Digite apenas números!")
    else:
        while nCases > 0:
            phrase = input("Digite a frase: ").lower()
            alpha = 'abcdefghijklmnopqrstuvwxyz'
            buffer = []
            charList = ''
            maxChar = 0
            for char in phrase:
                if char in alpha and char not in buffer:
                    counter = phrase.count(char)
                    if counter == maxChar:
                        charList += char
                    elif counter > maxChar:
                        charList = ''
                        charList += char
                        maxChar = counter
                buffer.append(char)
            print(''.join(sorted(charList))) #Melhor maneira que encontrei pra retornar a string 'sortada'
            nCases -= 1
if __name__ == "__main__":
    main()
