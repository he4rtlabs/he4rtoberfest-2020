numero=int(input("Digite um numero: "))
for i in range(1, numero+1):
    print("=====================================")
    print("A tabuada do numero {} é:".format(i))
    for e in range(1, 10+1):
        print("[{}] X [{}] = {}".format(i,e,i*e))
