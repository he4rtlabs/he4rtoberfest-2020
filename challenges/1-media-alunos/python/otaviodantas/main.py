"""Segundo desafio do He4rtoberfest."""


def media(med1: int, med2: int) -> int:
    return (med1 + med2) / 2


if __name__ == "__main__":
    n1 = int(input("Nota 1: "))
    n2 = int(input("Nota 2: "))

    print(media(n1, n2))
