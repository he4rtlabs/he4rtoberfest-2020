#include <stdio.h>

int main() 
{
  float nota1, nota2, media;

  printf("Digite a primeira nota ai: ");
  scanf("%f", &nota1);

  printf("Agora digite a segunda nota: ");
  scanf("%f", &nota2);

  media=(nota1+nota2)/2;

  printf("A media é igual a: %.2f", media);

  return 0;
}