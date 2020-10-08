def tabuada(numero):
    for indice_tabuada in range(1, numero+1):
        print("===========================")
        print(f"A tabuada do número {indice_tabuada} é:")
        for valor in range(1,11):
            print(f"{indice_tabuada} x {valor} = {indice_tabuada * valor}")


if __name__== '__main__':
    numero = int(input("Digite um número: "))
    tabuada(numero)
