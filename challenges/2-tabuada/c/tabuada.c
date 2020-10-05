#include <stdio.h>

int main(int argc, char const *argv[])
{
  int input;
  scanf("%d", &input);
  for (int i = 1; i <= input; i++)
  {
    printf("===========================\n");
    printf("A tabuada do numero %d e:\n", i);
    for (int j = 1; j <= 10; j++)
    {
      printf("%d * %d = %d\n", i, input, i * j);
    }
  }

  return 0;
}
