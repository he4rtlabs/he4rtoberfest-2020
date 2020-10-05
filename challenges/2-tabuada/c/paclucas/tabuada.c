#include <stdio.h>

int  main(){
  int amt;

  printf("Deseja a tabuada até qual número?: ");
  scanf("%d",&amt);

  for(int i = 1; i <= amt; i++){
    printf("=~~~~~~~~~~~~~~~~~~~~~~~~~=");
    printf("\nA tabuada  do  número %d é:\n", i);
    
    for(int j = 1; j <= 10; j++)  printf("%d * %d = %d\n", i, j, i * j);
  }
  printf("=~~~~~~~~~~~~~~~~~~~~~~~~~=");

  printf("\n^._.^\n");

  return 0;
}