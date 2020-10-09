#include <stdio.h>

int main()
{
  float baseMaior, baseMenor, altura;
  printf("\nValor base maior: ");
  scanf("%f", &baseMaior);

  printf("\nValor base menor: ");
  scanf("%f", &baseMenor);

  printf("\nValor altura: ");
  scanf("%f", &altura);

  float res = (baseMaior + baseMenor) * altura / 2;
  printf("\nA área do trapézio é: %.1f", res);

  printf("\n^._.^\n");

  return 0;
}