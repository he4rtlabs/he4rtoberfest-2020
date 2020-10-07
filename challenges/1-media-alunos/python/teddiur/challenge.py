def mean_calculator():
    scores = []
    while len(scores) < 2:
        try:
            scores.append(float(input(f"Digite a {len(scores)+1}ª nota: ")))
            if (type(scores[-1]) not in [int, float]) or scores[-1] < 0 and scores[-1] > 100:
                print(scores)
                print("Nota inválida. Digite novamente: ")
                scores.pop()

        except ValueError:
            print("Não é um número. Digite novamente.\n")

    mean = sum(scores)/len(scores)
    print(f"Média -> {mean}")


if __name__ == "__main__":
    mean_calculator()
