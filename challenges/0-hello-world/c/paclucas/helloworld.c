#include <stdio.h>

int main(){
  // declaração de uma variável do tipo inteiro
  int number, count = 1;

  /*
   * - a função 'printf(') imprime mensagem contida entre as aspas
   * - o '\n' é um tipo de expressão  regular, ele realiza a quebra de linha 
   * (isso faz com que o próximo texto a ser mostrado seja exibido na linha de baixo)
   */
  printf("Quantos 'Hello He4rtoberfest!' deseja?\n");
  /*
   * - a função 'scanf()' realiza a leitura do input realizado
   * - seu primeiro parâmetro %d indica que o input a ser lido é
   * do tipo inteiro
   * - seu segundo parâmetro indica em qual variável será inserido 
   * o valor lido
   * - o operador '&' adicionado antes da variável faz com que a função 
   * saiba o endereço de memória em que a variável está alocada
   */ 
  scanf("%d", &number);

  /*
   * - o laço 'for()' é uma estrutura de repetição, nela realizamos um conjunto
   * de instruções enquanto uma condição for verdadeira
   */
  for(int i = 0; i < number; i++, count++){
    printf("\n%d - Hello He4rtoberfest!", count);
  }

  // apenas um gatito
  printf("\n^._.^");

  // valor de retorno indicando que o programa acabou
  return 0;
}