# Desafio #4

**Nome:** 4 - Cifra de César

**Descrição:** 

Júlio César usava um sistema de criptografia, agora conhecido como Cifra de César, que trocava cada letra pelo equivalente em duas posições à Esquerda no alfabeto (por exemplo, 'C' vira 'A', 'T' vira 'R', etc.). Ao começo do alfabeto nós voltamos para o fim, isto é 'A' vira 'Y'. Nós podemos, é claro, tentar trocar as letras com quaisquer número de posições.

A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste é composto por duas linhas. A primeira linha contém uma string com até 50 caracteres maiúsculos ('A'-'Z'), que é a sentença após ela ter sido codificada através desta Cifra de César modificada. A segunda linha contém um número que varia de 0 a 25 e que representa quantas posições cada letra foi deslocada para a direita.

**Input/Args**: numeroCasos, numeroPosicoes, mensagem

Casos de teste:
```
3
```
Entrada 1:
```
VQREQFGT
2
```
Entrada 2:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
10
```
Entrada 3:
```
TOPCODER
0
```


**Output**:

Saída 1:
```
Decifrado: TOPCODER
```
Saída 2:
```
Decifrado: QRSTUVWXYZABCDEFGHIJKLMNOP
```
Saída 3:
```
Decifrado: TOPCODER
```


**Desafio retirado do URI Judge:** [Cifra de Cesar](https://www.urionlinejudge.com.br/judge/pt/problems/view/1253)
