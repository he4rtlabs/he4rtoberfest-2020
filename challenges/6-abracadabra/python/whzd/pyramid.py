def pyramid(string):
    newStr = ' '.join(string)
    maxWidth = len(newStr)
    for i in range(0, maxWidth, 2):
        tmpStr = newStr[:maxWidth-i]
        print(tmpStr.center(maxWidth, ' '))

def main():
    while True:
        string = input("Insira a palavra mágica: ")
        print()
        if len(string) >= 2 and len(string) <= 100:
            pyramid(string)
            break
        else:
            print("ERRO: A palavra magica tem de ter entre 2 e 100 caracters!")
            print()


if __name__ == "__main__":
    main()
