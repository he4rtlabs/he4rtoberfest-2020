#include "stdio.h"
#include "stdlib.h"

void multiplicationTable(int upperLimit){
    int i, j, multiplication;

    printf("===========================\n");
    for(i=1;i<=upperLimit;i++){
        printf("A tabuada do numero %d e:\n", i);
        for(j=1;j<=10;j++){
            multiplication = i*j;
            printf("%d*%d = %d\n", i, j, multiplication);
        }
        printf("===========================\n");
    }
}

int main() {
    int limitInput;
    scanf("%d", &limitInput);
    multiplicationTable(limitInput);
}