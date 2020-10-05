#include <stdio.h>

int main(int argc, char const *argv[])
{
  float a, b;
  float med;
  scanf("%f", &a);
  scanf("%f", &b);
  med = (a + b) / 2;
  printf("Media: %.2f", med);  
  return 0;
}
