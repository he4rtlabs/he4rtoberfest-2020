def primeiraNota(nota01=0):
    while True:
        try:
            nota01 = int(input("Digite a primeira nota: "))
        except (ValueError, TypeError):
            print("Por favor, digite um número INTEIRO válido.")
        except KeyboardInterrupt:
            print(" Usuário não digitou valor.")
            return 0
        else:
            return nota01


def segundaNota(nota02=0):
    while True:
        try:
            nota02 = int(input("Digite a segunda nota: "))
        except (ValueError, TypeError):
            print("Por favor, digite um número INTEIRO válido.")
        except KeyboardInterrupt:
            print(" Usuário não digitou valor.")
            return 0
        else:
            return nota02

def media():
    media = (primeiraNota() + segundaNota()) / 2
    return media

print(f"Média -> {media()}")
