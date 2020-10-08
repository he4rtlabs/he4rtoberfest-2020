"""Quarto desafio do He4rtoberfest."""


def verifica():
    try:
        x = float(input("Insira base maior: "))
        y = float(input("Insira base menor: "))
        h = float(input("Insira a altura: "))
        print(f"A área do trapézio é: {calcula(x, y, h)}")

    except ValueError:
        print("Oops! essa entrada não é número, pf verifique")


def calcula(baseMa: float, baseMe: float, altura: float) -> float:
    return ((baseMa + baseMe) * altura) / 2


if __name__ == "__main__":
    verifica()
