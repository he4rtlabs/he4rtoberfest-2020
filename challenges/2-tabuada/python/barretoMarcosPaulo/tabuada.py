limite = input("Ate qual numero deseja imprimir a tabuada?")

for number in range(1,(limite+1)):
    print("===========================")
    print("A tabuada do numero {} e: ".format(number))
    for i in range(1,11):
        print("{}*{} = {}".format(number, i, (number*i)))