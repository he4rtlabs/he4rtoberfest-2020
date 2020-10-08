#include <stdio.h>

int main(void)
{
    double media, A, B;

    scanf("%lf", &A);
    scanf("%lf", &B);

    media = (A + B)/2;

    printf("MEDIA = %.1lf\n", media);
    return 0;
}