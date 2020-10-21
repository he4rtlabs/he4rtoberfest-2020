def fibo(n):
    ns = [0]
    res = "0"
    if((n <= 1) or (n > 46)):
        return 'O número digitado é invalido'
    else:
        for i in range(1, n):
            if (i == 1):
                ns.append(1)
                res += " 1 "
            else:
                v = (ns[i - 2] + ns[i - 1])
                ns.append(v)
                res += str(v) + " "
        res = res[:-1]
        return res


while (True):
    a = int(input())
    print(fibo(a))
