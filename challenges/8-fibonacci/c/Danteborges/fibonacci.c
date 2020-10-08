#include <stdio.h>

int main ()
{

int n, i, a = 0, b = 1, c = 0;
scanf("%d", &n);
if( n<=0 ||n>= 46)
{
    printf("valor nao aceito\n");
    return 0;
}

if ( n == 1)
{

  printf("%d", a);
  return 0;

}

printf("%d ", a);
for (i = 2; i < n; i++)
{

    a = b;
    b = c;
    c = a + b;
    printf("%d ", c);

}

printf("%d\n", c+b);

return 0;

}
