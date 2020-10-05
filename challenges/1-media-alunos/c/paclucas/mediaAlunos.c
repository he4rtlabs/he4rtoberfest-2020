#include <stdio.h>

int main() {
  // variável da nota e da soma final
  float grade, sum = 0;
  int i;

  /*
   * - Um laço for para que o código possa ser aprimorado além do pedido,
   * podendo-se ter uma entrada para saber quantas notas serão calculdas e 
   * a partir disso solicitar a quantidade que o usuário preferir
   */
  for(i = 0; i < 2; i++) {
    printf("\nInsira a %dª nota: ", i+1);
    scanf("%f", &grade);
    sum += grade;
  }

  sum /= i;
  printf("\nMédia -> %.1f", sum);

  return 0;
}