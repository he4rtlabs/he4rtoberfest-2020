#include <stdio.h>

int main() {
  int n, m;
  printf("\nDigite um número para a última tabuada que deseja ver: ");
  scanf("%d", &m);
  printf("\n");

	n=1;
	
  for (int i = n; i <= m; i++) {
    printf("- - - - - - - - - -\n");
    printf("A tabuada do %d é:\n", i);
    for (int p = 1; p <= 10; p++) {
        printf("%d x %d = %d\n", i, p, i*p);
    }
  }
  
	printf("\n");
  system("PAUSE");
  printf("\n");
  return 0;

}