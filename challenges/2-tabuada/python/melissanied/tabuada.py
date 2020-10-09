print("Insira um número inteiro que direi a tabuada do 1 até ele")
n = int(input())

for i in range (1, n+1):
    print("=============================")
    print("Tabuada do ", i)
    for x in range(1, 11):
        print(i, "x", x, "=", i*x)
