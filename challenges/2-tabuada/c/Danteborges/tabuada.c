#include <stdlib.h>
#include <stdbool.h>

int main()
{
    int tabuada ;
    printf("\nDigite a tabuada que voce deseja \n\t\t\t\n>>> ");
    scanf("%i", &tabuada);
 for(int i = 1; i <= tabuada; i++){
    printf("===========================");
    printf("\nA tabuada  do  numero %d e:\n", i);
    
    for(int j = 1; j <= 10; j++)  printf("%d * %d = %d\n", i, j, i * j);
  }
  printf("===========================");

 

  return 0;
}