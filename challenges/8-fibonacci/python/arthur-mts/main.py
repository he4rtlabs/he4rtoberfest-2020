def fibo(n):
    ns = [0]
    res = "0"
    if(n == 1):
        return res
    elif((n < 1) or (n > 46)):
        raise Exception("O número deve ser maior que 0 e menor que 46")
    else:
        for i in range(1, n):
            if (i == 1):
                ns.append(1)
                res += " 1 "
            else:
                v = (ns[i - 2] + ns[i - 1])
                ns.append(v)
                res += str(v) + " "
        return res


while (True):
    a = int(input())
    print(fibo(a))
