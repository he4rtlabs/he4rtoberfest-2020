"""Terceiro desafio do He4rtoberfest."""


def tabuada(number: int) -> None:
    for i in range(1, number + 1):
        print("===========================")
        print(f"A tabuada do numero {i} é:")
        for j in range(1, 11):
            print(f"  {i}x{j} = {i * j}")
    print("===========================")


if __name__ == "__main__":
    max = int(input("N max: "))
    tabuada(max)
