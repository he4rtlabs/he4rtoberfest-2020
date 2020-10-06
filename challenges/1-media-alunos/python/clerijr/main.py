
def main():
    primeiraNota = float(input("Fala meu bom! De 0 a 10, qual foi sua primeira nota? "))
    segundaNota = float(input("E qual foi a segunda? "))

    """ Considerarei que a média para passar seja 7.0 """
    media = (primeiraNota + segundaNota)/2

    if  media >= 7:
        print("Parabéns! Tu passou de boinha! A média foi: {}".format(media))
    else:
        print("Vish Maria, vai precisar se esforçar mais com essa média: {}".format(media)) 

if __name__ == '__main__':
    main()