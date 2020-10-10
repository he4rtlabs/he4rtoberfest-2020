#include <stdio.h>

int main() {
    int numero;

    printf("\n::::::::::::: TABUADA:::::::::::::\n");

    printf("Você deseja ver a tabuada até qual número?\n");
    scanf("%d", &numero);

    for(int i = 1; i <= numero; i++) {
        printf("\n~===========================~\n");
        printf("A tabuada do número %d é:\n", i);
        for(int j = 1; j <= 10; j++) {
            printf("%d * %d = %d\n", i, j, i*j);
        }
        ("\n~===========================~\n");
    }
    return 0;
}