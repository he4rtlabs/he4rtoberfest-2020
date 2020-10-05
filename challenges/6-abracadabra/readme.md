

# Desafio #6

**Nome:** 6 - Abracadabra

**Descrição:** 

No século XXII, uma doença devastadora atingiu mais da metade da população mundial. O governo está desesperado em busca de uma cura, pois há um grande risco de que a doença dizime toda a população. Os hospitais estão lotados e a aflição no olhar das pessoas é notável.

Nesta época, poucas pessoas têm acesso livre à internet, mas você é uma delas. Ao vasculhar a rede, você encontrou alguns textos dispersos sobre um amuleto de uma palavra mágica escrita em forma de um triângulo que cura doenças letais. Incrédulo mas esperançoso, você se lembrou de que a biblioteca do Sr. Severino tinha um livro um tanto inusitado, com a seguinte capa:

<center>
    <img src="https://resources.urionlinejudge.com.br/gallery/images/contests/UOJ_231_A.jpg">
</center>

Então, você foi imediatamente à biblioteca. Chegando lá, ao ler somente o prefácio do livro, já confirmou tudo o que viu sobre os amuletos na rede, e em seguida, deu a si mesmo uma missão: espalhar palavras mágicas na rede em forma de um triângulo a fim de alertar as pessoas de que pode haver uma cura para a doença. Por consequência, se forem construídos amuletos em massa com palavras mágicas e estes forem entregues às pessoas, a doença pode ser aniquilada e a população, salva.

Para completar tal missão, você deverá começar pelo passo mais simples: escrever um programa que receba uma palavra e a transforme em um triângulo, tal como na capa do livro.

**Input/Args**: palavraBase

A entrada uma palavra que irá ser o topo da pirâmide. Cada caso de teste é composto por uma palavra de 2 até 100 caracteres e sem espaços. A entrada termina com EOF (fim de arquivo).


Exemplo 1:
```
ABRACADABRA
```
Exemplo 2:
```
HELPME
```

**Output**:

Saída 1:
```
A B R A C A D A B R A

 A B R A C A D A B R

  A B R A C A D A B

   A B R A C A D A

    A B R A C A D

     A B R A C A

      A B R A C

       A B R A

        A B R

         A B

          A
```
Saída 2:
```
H E L P M E

 H E L P M

  H E L P

   H E L

    H E

     H
```


**Desafio retirado do URI Judge:** [Abracadabra](https://www.urionlinejudge.com.br/judge/pt/problems/view/2484)