def bMaior(bMaior):
    while True:
        try:
            bMaior = float(input("Base maior: "))
        except (TypeError, ValueError):
            print("Por favor, digite um número.")
        else:
            return bMaior


def bMenor(bMenor):
    while True:
        try:
            bMenor = float(input("Base menor: "))
        except (TypeError, ValueError):
            print("Por favor, digite um número.")
        else:
            return bMenor


def altura(altura):
    while True:
        try:
            altura = float(input("Altura: "))
        except (TypeError, ValueError):
            print("Por favor, digite um número.")
        else:
            return altura


def areaT(bMaior, bMenor, altura):
    area = (bMaior + bMenor) * altura / 2
    return area

print(f"A área do trapézio é: {areaT(bMaior(bMaior), bMenor(bMenor), altura(altura))}")
