def fibonacci_sequence(n,lst):
    if lst[n] != None:  # Impedir que o valor seja reescrito no backtracking
        return lst[n]
    if n == 0:          # Condição de paragem 1
        lst[0] = 0
        return 0
    elif n == 1:        # Condição de paragem 2
        lst[0] = 0
        lst[1] = 1
        return 1
    else:
        lst[n] = fibonacci_sequence(n-1,lst)+fibonacci_sequence(n-2, lst)
    return lst[n]

def main():
    print("Sequência de Fibonacci")
    print()
    print("Este programa irá mostra a sequencia de fibonacci até ao valor N.")
    print()
    while True:
        try:
            n = int(input("Insira o número de N (0 < N < 46): "))
            print()
            if n < 0 or n > 46:
                raise ValueError
        except ValueError:
            print("ERRO: O número tem de ser entre 0 e 46.")
            print()
        else:
            lst = []
            for i in range(n+1):
                lst.append(None)
            fibonacci_sequence(n,lst)
            print(f"A sequência de fibonacci até {n} é:")
            print(*lst)
            break

if __name__ == '__main__':
    main()
