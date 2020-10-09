soma=0
notas=int(input("Digite a quantidade de notas: "))
for i in range(notas):
    nota = int(input("Digite uma nota: "))
    soma += nota

media = soma/notas
print("A media do aluno é {}".format(media))
