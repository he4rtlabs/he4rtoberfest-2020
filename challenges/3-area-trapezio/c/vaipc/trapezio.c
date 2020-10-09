#include <stdio.h>

int main () {

  float basemaior, basemenor, altura, area;

  printf("Digite o tamanho da menor base: ");
  scanf("%f", &basemenor);
  getchar();

  printf("Digite o tamanho da base maior: ");
  scanf("%f", &basemaior);
  getchar();

  printf("Digite a altura: ");
  scanf("%f", &altura);
  getchar();

  area=(basemaior + basemenor)*altura/2;

  printf("A área do trapézio é igual a: %.1f", area);

  return 0;

}