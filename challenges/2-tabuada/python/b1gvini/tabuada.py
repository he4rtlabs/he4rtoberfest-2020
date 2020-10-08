try:
    num = int(input("Digite um valor: "))
    for i in range(1,num+1):
        numero = i
        print("Tabuada de {}".format(numero))
        for j in range(1,11):
            print("{}x{} = {}".format(numero,j,numero*j))
except:
    print("Digita um numero ai, boy!")
