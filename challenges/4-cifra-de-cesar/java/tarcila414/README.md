# Submissão de Exercicio

**Exercicio:** 4 - Cifra de Cesar

**Nickname:** tarcila414

**Nível Técnico:** - Estudante/Estagiário -

**Dificuldade de Resolução:** - Médio

**Comentários:** Este exercício possibilita diversas resoluções, utilizei dos códigos da tabela ASCII para solucionar este problema. Basta subtrair do caractere a atual a quantidade de carateres que foram deslocados, caso esse valor seja menor que o caractere 'A', devemos reiniciar nossa contagem ao final do alfabeto no caratere 'Z'. Veja um exemplo, se o deslocamento foi de 3 caracteres e estamos tentando decodificar a mensagem "AB".
Z - deslocamento => Z - 3 = W

A - A = 0
W + 1 + 0 = X

B - A = 1
W + 1 + 1 = Y

V
->W
X A
Y B
Z C

**Como rodar o desafio:**

**Use os comandos abaixo:**

-javac Cifra.java (compilar)
-java Cifra (executar)

Durante a execução do programa você deve inserir:
->na primeira linha a quantidade de teste que deseja realizar
->em cada teste você deve inserir a mensagem criptografada e na linha seguinte
a quantidade de caracteres que foram deslocados.
