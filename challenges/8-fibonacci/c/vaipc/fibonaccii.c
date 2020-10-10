#include <stdio.h>
int main() {
    int i, n, termo1, termo2, proximotermo;
    printf("Digite a quantidade de termos que deseja imprimir: ");
    scanf("%d", &n);
    printf("\n");

    termo1=0;
    termo2=1;

    if(n>0 && n<46) {
      for (i = 1; i <= n; ++i) {
          printf("%d ", termo1);
          proximotermo = termo1 + termo2;
          termo1 = termo2;
          termo2 = proximotermo;
      }
      printf("\n\n");
    }else 
    printf("A quantidade deve ser maior que 0 e menor que 46.\n\n");

    return 0;
}