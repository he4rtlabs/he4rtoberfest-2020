#include <stdio.h>

float media_aluno(float n1, float n2) {

  float media = (n1 + n2)/2;

  return media;
}
   

int main(void) {

  float media = media_aluno(6, 4); // passe os valores desejados para a função
  
  printf("%.2f", media);

  return 0;
}