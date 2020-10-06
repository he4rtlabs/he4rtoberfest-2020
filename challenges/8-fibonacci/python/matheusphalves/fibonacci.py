
#Usarei a técnica de memorização para deixar o método mais eficiente.
#Desafio foi aceito no URI Online Judge

#DEFINIÇÃO DE VARIÁVEIS
listFib = [0,1]; #lista que contém resultados salvos. Cada posição da lista equivale ao valor do fibbonaci desejado
#Exemplo fib(0) = 1, fib(1) = 1, fib(2) = 1 e assim em diante

#SOLUÇÃO
def fibList(n):
    sizeList = len(listFib) #
    if n<sizeList:
        return listFib[n] #retornamos o valor do fib salvo, ele já está calculado!
    else:
        #(sizeList-1) é o último indice da lista
        # n é o termo que eu desejo conhecer
        #então, eu preciso calcular alguns outros termos em minha lista. Fazemos: result = n - sizeList-1
        #Com isso, descobrimos quantos termos precisam ser calculados até chegar ao termo n.
        #I need to know how many terms (index) must be increased.
        for i in range(n -(sizeList-1)):
            listFib.append(listFib[-1] + listFib[-2]) #por definição, fib(n) = fib(n-1) + fib(n-2)
        #assim, não precisamos recalcular os termos posteriores a 'n' novamente
    return listFib[-1] #retornamos o último elemento da lista, que no nosso caso é fib(n)

#EXECUÇÃO DO PROGRAMA
number = int(input("")) #Leitura dos dados
fibList(number) #calculamos todos os n termos informados pelo usuário.
resultados = "0" #string salvará todos os resultados. Lembrando que N não será igual a 0
for termo in range(1, number): #loop calculará fib(n). Ex: n = 5 => calcular os 5 primeiros elementos da sequência
    resultados += " " + str(listFib[termo])
print(resultados) #impressão dos valores após cálculo
    
