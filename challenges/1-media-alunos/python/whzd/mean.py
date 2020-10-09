def mean(val1, val2):
    return (val1+val2)/2

def main():
    while True:
      try:
        val1 = float(input("Insira o primeiro valor: "))
        if val1 < 0:
            raise ValueError
        val2 = float(input("Insira o segundo valor: "))
        if val2 < 0:
            raise ValueError
      except ValueError:
        print("ERRO: Os valores têm de ser números inteiros ou décimais.")
      else:
        res = mean(val1, val2)
        print("A média entre os números {:.2f} e {:.2f} é igual a {:.2f}.".format(val1,val2,res))
        break

if __name__ == '__main__':
    main()
